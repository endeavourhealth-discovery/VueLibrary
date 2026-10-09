import { createApp, ref } from "vue";

import { beforeEach, describe, expect, it, vi } from "vitest";

import { useTree } from "../../../src/composables/useTree";
import injectionKeys from "../../../src/injectionKeys/injectionKeys";

const toastAdd = vi.fn();
vi.mock("primevue/usetoast", () => ({ useToast: () => ({ add: toastAdd }) }));

const TYPE = [{ iri: "http://endhealth.info/im#Concept" }];

function entity(iri: string, hasChildren = false) {
  return { iri, name: iri, type: TYPE, hasChildren };
}

function setup(entityService: Record<string, any>, favourites: string[] = []) {
  const app = createApp({});
  app.provide(injectionKeys.useDirectService, () => ({ select: vi.fn(), view: vi.fn() }));
  app.provide(injectionKeys.entityService, entityService as any);
  return app.runWithContext(() => useTree(ref(favourites), undefined, 2));
}

describe("useTree", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("expandNode / onNodeExpand", () => {
    it("adds returned children without duplicating existing ones", async () => {
      const getPagedChildren = vi.fn().mockResolvedValue({ result: [entity("a"), entity("b")], totalCount: 2 });
      const tree = setup({ getPagedChildren });
      const parent = tree.createTreeNode("p", "p", TYPE, undefined, true, null);

      await tree.onNodeExpand(parent);
      await tree.onNodeExpand(parent);

      expect(parent.children!.map((c: any) => c.key)).toEqual(["a", "b"]);
    });

    it("removes every stale child when fewer children are returned", async () => {
      const getPagedChildren = vi.fn().mockResolvedValue({ result: [entity("c")], totalCount: 1 });
      const tree = setup({ getPagedChildren });
      const parent = tree.createTreeNode("p", "p", TYPE, undefined, true, null);
      // adjacent stale children: splice-while-iterating used to skip the second one
      parent.children = ["a", "b", "c"].map(k => tree.createTreeNode(k, k, TYPE, undefined, false, parent));

      await tree.onNodeExpand(parent);

      expect(parent.children!.map((c: any) => c.key)).toEqual(["c"]);
    });

    it("adds a load more node when there are more pages", async () => {
      const getPagedChildren = vi.fn().mockResolvedValue({ result: [entity("a"), entity("b")], totalCount: 5 });
      const tree = setup({ getPagedChildren });
      const parent = tree.createTreeNode("p", "p", TYPE, undefined, true, null);

      await tree.onNodeExpand(parent);

      expect(parent.children!.map((c: any) => c.key)).toEqual(["a", "b", "loadMorep"]);
    });
  });

  describe("expandFavouriteNode", () => {
    it("fetches favourites in parallel and keeps their order", async () => {
      const resolvers: Record<string, (v: any) => void> = {};
      const getEntityAsEntityReferenceNode = vi.fn((iri: string) => new Promise(res => (resolvers[iri] = res)));
      const tree = setup({ getEntityAsEntityReferenceNode }, ["f1", "f2", "f3"]);
      const node = tree.createTreeNode("Favourites", "fav", TYPE, undefined, true, null);

      const promise = tree.expandFavouriteNode(node);
      // all requests are issued before any resolves
      expect(getEntityAsEntityReferenceNode).toHaveBeenCalledTimes(3);
      resolvers["f3"](entity("f3"));
      resolvers["f1"](entity("f1"));
      resolvers["f2"](entity("f2"));
      await promise;

      expect(node.children!.map((c: any) => c.key)).toEqual(["f1", "f2", "f3"]);
    });
  });

  describe("findPathToNode", () => {
    it("terminates with a warning when the target never appears", async () => {
      const entityService = {
        getPathBetweenNodes: vi.fn().mockResolvedValue([{ iri: "parent" }, { iri: "root" }]),
        // returns a single page with no load more node, and never the target
        getPagedChildren: vi.fn().mockResolvedValue({ result: [entity("other")], totalCount: 1 })
      };
      const tree = setup(entityService);
      tree.root.value = [tree.createTreeNode("root", "root", TYPE, undefined, true, null)];
      tree.root.value[0].children = [tree.createTreeNode("parent", "parent", TYPE, undefined, true, tree.root.value[0])];
      const loading = ref(false);

      await tree.findPathToNode("missing", loading, "no-such-container");

      expect(toastAdd).toHaveBeenCalledWith(expect.objectContaining({ summary: "Unable to locate" }));
      expect(loading.value).toBe(false);
    });
  });

  describe("selectAndExpand", () => {
    it("does not add the same node to expandedData twice", async () => {
      const getPagedChildren = vi.fn().mockResolvedValue({ result: [], totalCount: 0 });
      const tree = setup({ getPagedChildren });
      const node = tree.createTreeNode("n", "n", TYPE, undefined, true, null);

      await tree.selectAndExpand(node);
      await tree.selectAndExpand(node);

      expect(tree.expandedData.value.filter((x: any) => x.key === "n")).toHaveLength(1);
    });
  });
});
