<template>
  <Popover ref="OP" id="overlay-panel" style="max-width: 55vw" :breakpoints="{ '960px': '75vw' }">
    <div v-if="loading" class="flex flex-row justify-center"><ProgressSpinner /></div>
    <div v-else-if="hoveredResult?.status" class="justify-contents-start result-overlay flex flex-row" style="width: 100%; gap: 1rem">
      <div style="max-width: 65%">
        <div v-if="hoveredResult.iri">
          <p>
            <strong>iri: </strong>
            <span>{{ hoveredResult.iri }}</span>
          </p>
        </div>
        <p>
          <strong>Description: </strong>
          <span v-if="hoveredResult.description">{{ hoveredResult.description }}</span>
          <span v-else> N/A </span>
        </p>
      </div>
      <div v-if="hoveredResult.status">
        <p>
          <strong>Scheme: </strong>
          <span v-if="hoveredResult.scheme">{{ hoveredResult.scheme.name }}</span>
          <span v-else> N/A </span>
        </p>
        <p>
          <strong>Status: </strong>
          <span>{{ hoveredResult.status.name }}</span>
        </p>
      </div>
    </div>
  </Popover>
</template>

<script setup lang="ts">
import { Ref, inject, ref } from "vue";

import Popover from "primevue/popover";
import ProgressSpinner from "primevue/progressspinner";

import { getNamesAsStringFromTypes } from "../helpers/ConceptTypeMethods";
import injectionKeys from "../injectionKeys/injectionKeys";
import { SearchResultSummary, TTIriRef } from "../models";

const entityService = inject(injectionKeys.entityService);
if (!entityService) throw new Error("Missing injection: entityService");

const hoveredResult: Ref<SearchResultSummary | undefined> = ref();
const overlayLocation: Ref<any> = ref({});
const OP = ref();
const loading = ref(true);
const timer = ref<number | undefined>();

async function showOverlay(event: MouseEvent, data: string | undefined): Promise<void> {
  hoveredResult.value = undefined;
  if (data) {
    clearTimeout(timer.value);
    const target = event.currentTarget as HTMLElement;
    if (!target) return;
    timer.value = window.setTimeout(async () => {
      const popover = OP.value;
      if (!popover) return;
      loading.value = true;
      hoveredResult.value = await entityService!.getEntitySummary(data);
      if (target.checkVisibility()) popover.show({ currentTarget: target });
      loading.value = false;
    }, 500);
  }
}

async function showOverlayTreeNode(event: MouseEvent, data: SearchResultSummary | undefined): Promise<void> {
  hoveredResult.value = undefined;
  if (data && Object.keys(data).length) {
    clearTimeout(timer.value);
    const target = event.currentTarget as HTMLElement;
    if (!target) return;
    timer.value = window.setTimeout(async () => {
      const popover = OP.value;
      if (!popover) return;
      loading.value = true;
      hoveredResult.value = data;
      if (target.checkVisibility()) popover.show({ currentTarget: target });
      loading.value = false;
    }, 500);
  }
}

function hideOverlay(): void {
  clearTimeout(timer.value);
  if (OP.value) OP.value.hide();
  hoveredResult.value = undefined;
  overlayLocation.value = {};
  loading.value = false;
}

function getConceptTypes(types: TTIriRef[]): string {
  return getNamesAsStringFromTypes(types);
}

defineExpose({ showOverlay, showOverlayTreeNode, hideOverlay });
</script>

<style scoped></style>
