import { FontSize } from "@/enums";
import injectionKeys from "@/injectionKeys/injectionKeys";
import { inject } from "vue";

export function useChangeFontSize() {
  const userStore = inject(injectionKeys.userStore);
  if (!userStore) throw new Error("Missing injection: userStore");

  async function changeFontSize(newFontSize: FontSize) {
    const currentFontSize = document.documentElement.style.fontSize || "14px";
    if (newFontSize !== currentFontSize) {
      document.documentElement.style.fontSize = newFontSize;
      await userStore!.updateCurrentFontSize(newFontSize);
    }
  }

  return { changeFontSize: changeFontSize };
}
