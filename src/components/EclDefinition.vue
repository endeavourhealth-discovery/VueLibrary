<template>
  <div v-if="loading">
    <ProgressSpinner />
  </div>
  <div v-else id="ecl-definition-container">
    <span
      class="ecl-text"
      data-testid="eclString"
      v-tooltip.left="'Copy to clipboard'"
      v-clipboard:copy="copyToClipboard()"
      v-clipboard:success="onCopy"
      v-clipboard:error="onCopyError"
      >{{ eclString }}</span
    >
  </div>
</template>

<script setup lang="ts">
import { inject, onMounted, ref } from "vue";
import { useCopyToClipboard } from "@/composables/useCopyToClipboard";
import injectionKeys from "@/injectionKeys/injectionKeys";

interface Props {
  definition: string;
}

const props = defineProps<Props>();

const eclService = inject(injectionKeys.eclService);
if (!eclService) throw new Error("Missing injection: eclService");

const eclString = ref("");
const { copyToClipboard, onCopy, onCopyError } = useCopyToClipboard(eclString);

const loading = ref(true);
onMounted(async () => await init());

async function init() {
  loading.value = true;
  const result = await eclService!.getEcl(JSON.parse(props.definition));
  if (!result) eclString.value = "Error";
  else eclString.value = result;
  loading.value = false;
}
</script>

<style scoped>
.ecl-text {
  white-space: break-spaces;
  cursor: pointer;
}
</style>
