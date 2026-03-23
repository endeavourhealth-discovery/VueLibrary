<template>
  <pre v-if="sql" ref="preRef" class="sql-container line-numbers language-sql">
      <code class="language-sql" >{{ sql }}</code>
    </pre>
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from "vue";
import Prism from "prismjs";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import "prismjs";

const preRef = ref<HTMLPreElement | null>(null);
Prism.plugins.NormalizeWhitespace.setDefaults({
  "remove-trailing": false,
  "remove-indent": true,
  "left-trim": false,
  "right-trim": false
});

interface Props {
  sql: string;
}

const props = defineProps<Props>();

watch(
  () => props.sql,
  async () => {
    await lazyLoadLanguage("sql");
    await nextTick();

    const codeEl = preRef.value?.querySelector("code");
    if (codeEl) {
      Prism.highlightElement(codeEl);
    }
  },
  { immediate: true }
);

async function lazyLoadLanguage(language: string) {
  if (!Prism.languages[language]) {
    await import(`prismjs/components/prism-${language}.js`);
  }
}
</script>

<style scoped>
@import "prismjs/themes/prism.css";
@import "prismjs/plugins/line-numbers/prism-line-numbers.css";
.sql-container {
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 5px;
  overflow-x: auto;
}
</style>
