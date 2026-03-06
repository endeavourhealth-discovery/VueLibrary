import { FontSize } from "@/enums";
import injectionKeys from "@/injectionKeys/injectionKeys";
import { useUserStore } from "@/stores";
import { inject } from "vue";

export function useChangeFontSize() {
  const userService = inject(injectionKeys.userService);
  if (!userService) throw new Error("Missing injection: userService");
  const userStore = useUserStore();

  async function changeFontSize(newFontSize: FontSize) {
    const currentFontSize = document.documentElement.style.fontSize || "14px";
    if (newFontSize !== currentFontSize) {
      document.documentElement.style.fontSize = newFontSize;
      await userStore!.updateCurrentFontSize(newFontSize, userService!);
    }
  }

  return { changeFontSize: changeFontSize };
}
