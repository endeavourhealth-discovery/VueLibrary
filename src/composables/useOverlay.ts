import { ref } from "vue";

import { SearchResultSummary } from "../models";

export function useOverlay() {
  const OS = ref();

  async function showOverlay(event: MouseEvent, data: string | undefined): Promise<void> {
    if (OS.value) await OS.value.showOverlay(event, data);
  }

  async function showOverlayTreeNode(event: MouseEvent, data: SearchResultSummary | undefined): Promise<void> {
    if (OS.value) await OS.value.showOverlayTreeNode(event, data);
  }

  function hideOverlay(): void {
    if (OS.value) OS.value.hideOverlay();
  }

  return {
    OS,
    showOverlay,
    showOverlayTreeNode,
    hideOverlay
  };
}
