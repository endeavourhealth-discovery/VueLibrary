import { inject, ref, Ref } from "vue";
import { SearchTermCode } from "../interfaces/AutoGen";
import { TermCode } from "../interfaces";
import injectionKeys from "../injectionKeys/injectionKeys";

export function useTerms() {
  const conceptService = inject(injectionKeys.conceptService);
  if (!conceptService) throw new Error("Missing injection: conceptService");

  const terms: Ref<SearchTermCode[]> = ref([]);
  async function getTerms(iri: string) {
    terms.value = await conceptService!.getEntityTermCodes(iri, true);
  }
  return { terms, getTerms };
}
