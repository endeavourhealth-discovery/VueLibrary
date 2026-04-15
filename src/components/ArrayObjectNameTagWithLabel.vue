<template>
  <div class="container" :style="{ width: size }" :id="id">
    <strong class="label" data-testid="label">{{ label }}: </strong>
    <div v-if="isArrayObject" class="tag-container">
      <Tag v-for="item of data" :key="item.iri" :value="item.name" :severity="getSeverity(item)" class="data-tag" data-testid="data-tag" />
    </div>
    <span v-else class="tag-container">None</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { TagSeverity } from "vue-library/enums";
import { isArrayHasLength, isObjectHasKeys } from "vue-library/helpers";
import type { TTIriRef } from "vue-library/interfaces";

interface Props {
  label: string;
  data: TTIriRef[];
  tagSeverityMatches: { iri: string; severity: TagSeverity }[];
  size?: string;
  id?: string;
}

const props = withDefaults(defineProps<Props>(), {
  size: "100%",
  id: "array-object-name-tag-with-label"
});

const isArrayObject = computed(() => {
  if (props.data && isArrayHasLength(props.data) && isObjectHasKeys(props.data[0], ["iri"])) {
    return true;
  } else {
    return false;
  }
});

function getSeverity(item: TTIriRef): TagSeverity {
  let result = TagSeverity.INFO;
  if (item && isObjectHasKeys(item, ["name"])) {
    const found = props.tagSeverityMatches.find((severity: { iri: string; severity: string }) => severity.iri === item.iri);
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

.tag-container {
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
}
</style>
