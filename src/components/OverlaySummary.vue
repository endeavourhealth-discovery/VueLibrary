<template>
  <Popover ref="OP" id="overlay-panel" style="max-width: 30vw" :breakpoints="{ '960px': '75vw' }">
    <div v-if="loading" class="flex flex-row justify-center"><ProgressSpinner /></div>
    <div v-else-if="hoveredResult?.status" class="justify-contents-start result-overlay flex flex-row" style="width: 100%; gap: 1rem">
      <div style="max-width: 75%">
        <p>
          <strong>Description: </strong>
          <span v-if="hoveredResult.description">{{ hoveredResult.description }}</span>
          <span v-else> N/A </span>
        </p>
      </div>
      <div v-if="hoveredResult.status">
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

import { currentTarget } from "happy-dom/lib/PropertySymbol";
import Popover from "primevue/popover";
import ProgressSpinner from "primevue/progressspinner";

import { isObjectHasKeys } from "@/helpers";

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

async function showOverlay(event: MouseEvent, data: any): Promise<void> {
  hoveredResult.value = undefined;
  if (data) {
    clearTimeout(timer.value);
    const target = event.currentTarget as HTMLElement;
    if (!target) return;
    timer.value = window.setTimeout(async () => {
      const popover = OP.value;
      if (!popover) return;
      loading.value = true;
      if (isObjectHasKeys(data, ["status"])) {
        hoveredResult.value = data as SearchResultSummary;
      } else {
        hoveredResult.value = await entityService!.getEntitySummary(data);
      }
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

defineExpose({ showOverlay, hideOverlay });
</script>

<style scoped></style>
