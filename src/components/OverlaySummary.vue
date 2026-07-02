<template>
  <Popover ref="OP" id="overlay-panel" style="width: 50vw" :breakpoints="{ '960px': '75vw' }">
    <div v-if="loading" class="flex flex-row justify-center"><ProgressSpinner /></div>
    <div v-else-if="hoveredResult?.name" class="justify-contents-start result-overlay flex flex-row" style="width: 100%; gap: 1rem">
      <div class="left-side" style="width: 50%">
        <p>
          <strong>Name: </strong>
          <span>{{ hoveredResult.name }}</span>
        </p>
        <p>
          <strong>Iri: </strong>
          <span style="word-break: break-all">{{ hoveredResult.iri }}</span>
        </p>
        <p>
          <strong>Description: </strong>
          <span>{{ hoveredResult.description }}</span>
        </p>
        <p v-if="hoveredResult.unit">
          <strong>Units of measure : </strong>
          <span>{{ getConceptTypes(hoveredResult.unit) }}</span>
        </p>
        <p v-if="hoveredResult.qualifier">
          <strong>May be qualified by : </strong>
          <span>{{ getConceptTypes(hoveredResult.qualifier) }}</span>
        </p>
        <p v-if="hoveredResult.code">
          <strong>Code: </strong>
          <span>{{ hoveredResult.code }}</span>
        </p>
      </div>
      <div class="right-side" style="width: 50%">
        <p v-if="hoveredResult.status">
          <strong>Status: </strong>
          <span>{{ hoveredResult.status.name }}</span>
        </p>
        <p v-if="hoveredResult.scheme">
          <strong>Scheme: </strong>
          <span>{{ hoveredResult.scheme.name }}</span>
        </p>
        <p v-if="hoveredResult.type">
          <strong>Type: </strong>
          <span>{{ getConceptTypes(hoveredResult.type) }}</span>
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
import { SearchResultSummary, TTIriRef } from "../interfaces/AutoGen";
import { currentTarget } from "happy-dom/lib/PropertySymbol";

const entityService = inject(injectionKeys.entityService);
if (!entityService) throw new Error("Missing injection: entityService");

const hoveredResult: Ref<SearchResultSummary | undefined> = ref();
const overlayLocation: Ref<any> = ref({});
const OP = ref();
const loading = ref(true);
const timer = ref<number | undefined>();

async function showOverlay(event: MouseEvent, iri: string): Promise<void> {
  if (iri) {
    clearTimeout(timer.value);

    const target = event.currentTarget as HTMLElement;
    if (!target) return;
    timer.value = window.setTimeout(async () => {
      const popover = OP.value;
      if (!popover) return;

      loading.value = true;
      hoveredResult.value = undefined;
      hoveredResult.value = await entityService!.getEntitySummary(iri);
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
