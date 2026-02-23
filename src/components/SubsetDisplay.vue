<template>
  <div v-if="!subsets.length">No subsets found.</div>
  <DataTable
    v-else
    :value="subsets"
    showGridlines
    :scrollable="true"
    sortMode="single"
    sortField="label"
    :sortOrder="1"
    class="p-datatable-sm"
    scrollHeight="flex"
    data-testid="table"
    :lazy="true"
  >
    <Column field="member" header="Name">
      <template #body="{ data }: any">
        <IMViewerLink :action="'select'" :iri="data.iri" :label="data.name" @navigateTo="(iri: string) => emit('navigateTo', iri)" />
      </template>
    </Column>
  </DataTable>
</template>

<script setup lang="ts">
import { inject, onMounted, Ref, ref } from "vue";
import IMViewerLink from "@/components/IMViewerLink.vue";
import { TTIriRef } from "@/interfaces/AutoGen";
import injectionKeys from "@/injectionKeys/injectionKeys";

const props = defineProps<{
  entityIri: string;
}>();

const emit = defineEmits<{
  onOpenTab: [payload: string];
  navigateTo: [payload: string];
}>();

const setService = inject(injectionKeys.setService);
if (!setService) throw new Error("Missing injection: setService");

const subsets: Ref<TTIriRef[]> = ref([]);

onMounted(async () => {
  subsets.value = await setService!.getSubsets(props.entityIri);
});
</script>
