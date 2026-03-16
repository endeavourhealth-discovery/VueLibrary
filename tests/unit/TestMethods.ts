import { defineComponent } from "vue";
import { mount } from "@vue/test-utils";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { vi } from "vitest";
import { createTestingPinia } from "@pinia/testing";

export function createTestRouter(routes?: RouteRecordRaw[], mockPush?: any, mockGo?: any, mockBack?: any, mockForward?: any) {
  const router = createRouter({
    routes: routes || [{ name: "Home", path: "/", component: defineComponent({ template: "<template></template>" }) }],
    history: createWebHashHistory()
  });
  router.push = mockPush || vi.fn();
  router.go = mockGo || vi.fn();
  router.back = mockBack || vi.fn();
  router.forward = mockForward || vi.fn();
  return router;
}

function createTestComponent(composable: any, composableInputs: any[] = []) {
  return defineComponent({
    setup() {
      return { ...composable(...composableInputs) };
    },
    template: "<template></template>"
  });
}

export function mountComposable(composable: any, composableInputs: any[], options: { initialState?: any; mockRouter?: any; provide?: Record<any, any> }) {
  const TestComponent = createTestComponent(composable, composableInputs);
  if (options.mockRouter)
    return mount(TestComponent, {
      global: {
        plugins: [options.mockRouter, createTestingPinia({ initialState: options.initialState })],
        provide: options.provide
      }
    });
  else
    return mount(TestComponent, {
      global: { plugins: [createTestRouter(), createTestingPinia({ initialState: options.initialState })], provide: options.provide }
    });
}

export default { createTestRouter, mountComposable };
