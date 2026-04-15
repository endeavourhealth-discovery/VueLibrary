<template>
  <div class="container" :style="{ width: size }">
    <strong class="label" data-testid="label">{{ label }}: </strong>
    <Tag v-if="isObjectWithName" :value="data.name" :severity="getSeverity(data)" class="data-tag" data-testid="data-tag" />
    <span v-else class="data">None</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { TagSeverity } from "vue-library/enums";
import { isObjectHasKeys } from "vue-library/helpers";
import type { TTIriRef } from "vue-library/interfaces";

interface Props {
  label: string;
  data: TTIriRef;
  tagSeverityMatches: { iri: string; severity: TagSeverity }[];
  size?: string;
  id?: string;
}

const props = withDefaults(defineProps<Props>(), {
  size: "100%",
  id: "object-name-tag-with-label"
});

const isObjectWithName = computed(() => isObjectHasKeys(props.data, ["name"]));

function getSeverity(data: TTIriRef): TagSeverity {
  let result = TagSeverity.INFO;
  if (data && isObjectHasKeys(data, ["iri"])) {
    const found = props.tagSeverityMatches.find((severity: { iri: string; severity: string }) => severity.iri === data.iri);
    if (found) result = found.severity;
    else console.warn("TagWithLabel missing case for severity");
  }
  return result;
}
</script>

<style scoped>
.container {
  margin: 0;
  padding: 0.25rem 0.5rem 0 0;
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
}
</style>
