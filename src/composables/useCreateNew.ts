import { getFAIconFromType } from "@/helpers/ConceptTypeVisuals";
import { isArrayHasLength } from "@/helpers/DataTypeCheckers";
import { IM } from "@/vocabulary/IM";
import { RDFS } from "@/vocabulary/RDFS";
import { SHACL } from "@/vocabulary/SHACL";
import type { TreeNode } from "primevue/treenode";
import { Ref } from "vue";
import { MenuItem } from "primevue/menuitem";
import { TTIriRef } from "@/interfaces/AutoGen";
import Swal from "sweetalert2";
import { TTEntity } from "@/interfaces/ExtendedAutoGen";

export function useCreateNew(
  directService: {
    edit(iri: string, openInNewTab?: boolean): Promise<void>;
    create(typeIri?: string, propertyIri?: string, valueIri?: string): Promise<void>;
  },
  entityService: {
    getAllowableChildTypes(iri: string): Promise<TTEntity[]>;
    checkExists(iri: string): Promise<boolean>;
  }
) {
  async function getCreateOptions(newFolderName: Ref<string>, newFolder: Ref<TreeNode | null>, node: TreeNode): Promise<any[]> {
    const selectionWrapperCopy = [
      {
        label: "New",
        icon: "fas fa-fw fa-plus",
        items: [] as MenuItem[]
      },
      {
        label: "Edit",
        icon: "fa-duotone fa-pen-to-square",
        command: {}
      }
    ];
    selectionWrapperCopy[1].command = () => directService.edit(node.data, false);

    const allowableTypes = await entityService.getAllowableChildTypes(node.data);
    if (!isArrayHasLength(allowableTypes)) {
      return selectionWrapperCopy;
    }
    for (const allowableType of allowableTypes) {
      const item = {
        label: allowableType[RDFS.LABEL],
        data: {
          type: allowableType.iri,
          property: allowableType[SHACL.PATH][0]["iri"].toString()
        },
        icon: getFAIconFromType([{ iri: allowableType.iri, name: allowableType[RDFS.LABEL] } as TTIriRef]).join(" "),
        command: () => {}
      };
      if (allowableType.iri === IM.FOLDER) {
        item.command = () => {
          newFolderName.value = "";
          newFolder.value = node;
        };
      } else {
        item.command = () => directService.create(item.data.type, item.data.property, node.data);
      }
      if (selectionWrapperCopy[0].items) selectionWrapperCopy[0].items.push(item);
    }
    return selectionWrapperCopy;
  }

  async function checkExists(iri: string): Promise<boolean> {
    if (await entityService.checkExists(iri)) {
      await Swal.fire({
        icon: "warning",
        title: "Warning",
        text: "Entity with this iri already exists.",
        confirmButtonText: "Close",
        confirmButtonColor: "#689F38"
      });
      return true;
    } else return false;
  }

  return { getCreateOptions, checkExists };
}
