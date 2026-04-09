<template>
  <div v-if="data && isArrayObjectWithName" :id="id" :style="{ width: size }">
    <div class="head-container">
      <strong class="label" data-testid="label">{{ label }}: </strong>
      <span data-testid="count">&nbsp;({{ data.length }})</span>
      <Button
        :icon="buttonExpanded ? 'pi pi-minus' : 'pi pi-plus'"
        class="p-button-rounded p-button-text p-button-primary p-button-sm expand-button"
        :id="'expand-button-' + id"
        @click="setButtonExpanded"
        v-styleclass="{
          selector: '#listbox-' + id,
          enterClass: 'hidden',
          enterActiveClass: 'my-fadein',
          leaveActiveClass: 'my-fadeout',
          leaveToClass: 'hidden'
        }"
        data-testid="expand-button"
      />
    </div>
    <Listbox
      :options="data"
      listStyle="max-height: 12rem;overflow: auto;"
      v-model="selected"
      @change="directService.select(selected.iri)"
      selectionMessage="Selected"
      emptySelectionMessage="None"
      emptyMessage="None"
      :id="'listbox-' + id"
      class="array-listbox hidden"
    >
      <template #option="{ option }: any">
        <div class="data-name" data-testid="row-text">
          {{ option?.name || option?.iri }}
        </div>
      </template>
    </Listbox>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, onMounted, ref, Ref } from "vue";
import { isArrayHasLength, isObjectHasKeys } from "vue-library/helpers";
import injectionKeys from "../injectionKeys/injectionKeys";

interface Props {
  label: string;
  startExpanded?:string[]
  data?: unknown[];
  size?: string;
  id?: string;
}

const props = withDefaults(defineProps<Props>(), {
  size: "100%",
  data: [] as any,
  id: "array-object-name-listbox-with-label"
});

const useDirectService = inject(injectionKeys.useDirectService);
if (!useDirectService) throw new Error("Missing injection: useDirectService")
const directService = useDirectService()

const selected: Ref = ref({});
const buttonExpanded = ref(false);

const isArrayObjectWithName = computed(() => {
  if (!props.data) return false;
  if (!isArrayHasLength(props.data)) return false;
  if (props.data.every(item => isObjectHasKeys(item, ["name"]))) {
    return true;
  } else {
    console.warn(
      "Data error. Data is not array, array does not contain Object or Object has no property 'name' for use within component ArrayObjectNameListboxWithLabel.vue"
    );
    return false;
  }
});

onMounted(() => {
  expandAtStartup();
});

function setButtonExpanded() {
  buttonExpanded.value = !buttonExpanded.value;
}

function expandAtStartup() {
  if (props.startExpanded?.includes(props.label)) {
    const button = document.getElementById(`expand-button-${props.id}`) as HTMLElement;
    if (button) button.click();
  }
}
</script>

<style lang="scss" scoped>
.head-container {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
}

.array-listbox {
  margin: 0.5rem 0 0 0;
}
</style>
