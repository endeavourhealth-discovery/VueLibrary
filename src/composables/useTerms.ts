import { ref, Ref } from "vue";
import { SearchTermCode } from "@/interfaces/AutoGen";
import { TermCode } from "@/interfaces";

export function useTerms(conceptService: { getEntityTermCodes(iri: string, includeInactive?: boolean): Promise<TermCode[]> }) {
  const terms: Ref<SearchTermCode[]> = ref([]);
  async function getTerms(iri: string) {
    terms.value = await conceptService.getEntityTermCodes(iri, true);
  }
  return { terms, getTerms };
}
