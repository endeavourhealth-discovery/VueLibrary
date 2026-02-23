<template>
  <div :style="{ paddingLeft: '1rem' }">
    <div v-if="loading" class="flex flex-row"><ProgressSpinner /></div>
    <div v-if="dataSet.name">Name : {{ dataSet.name }}</div>
    <div v-else>{{ parentQuery.typeOf?.name }} internal id</div>

    <div v-if="dataSet.return">
      <div v-if="dataSet.and || dataSet.or || dataSet.where || dataSet.is">
        <Button text :icon="!matchExpand ? 'fa-solid fa-chevron-right' : 'fa-solid fa-chevron-down'" @click="matchToggle" />
        <RecursiveMatchDisplay
          v-if="matchExpand"
          :inline="false"
          :match="dataSet"
          :key="index"
          :clause-index="index"
          :parentIndex="0"
          :depth="1"
          :operator="Bool.and"
          :expanded="false"
          :parent-match="dataSet"
        />
      </div>
      <span v-if="dataSet.orderBy">{{ dataSet.orderBy.description }}</span>
      <div v-if="dataSet.return">
        <ReturnColumns :select="dataSet.return" class="pl-8" :parentQuery="parentQuery" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Bool, DisplayMode, Match, Query } from "@/interfaces/AutoGen";
import { onMounted, watch, ref, inject } from "vue";
import RecursiveMatchDisplay from "./RecursiveMatchDisplay.vue";
import ReturnColumns from "./ReturnColumns.vue";
import injectionKeys from "@/injectionKeys/injectionKeys";

interface Props {
  matchExpanded: boolean;
  returnExpanded: boolean;
  index: number;
  editMode?: boolean;
  match: Match;
}

const props = defineProps<Props>();

const queryService = inject(injectionKeys.queryService);
if (!queryService) throw new Error("Missing injection: queryService");

const parentQuery = defineModel<Query>("parentQuery", { default: {} });
const matchExpand = ref(false);
const loading = ref(false);
const dataSet = ref({ ...props.match });

onMounted(async () => {
  await init();
});
function matchToggle() {
  matchExpand.value = !matchExpand.value;
}

async function init() {
  dataSet.value = await queryService!.getQueryDisplayFromQuery(dataSet.value, DisplayMode.ORIGINAL);
}
watch(
  () => props.match,
  async () => {
    dataSet.value = await queryService.getQueryDisplayFromQuery(dataSet.value, DisplayMode.ORIGINAL);
  }
);
</script>

<style scoped></style>
