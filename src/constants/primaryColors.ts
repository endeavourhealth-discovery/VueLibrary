import { PrimeVueColors } from "@/enums";

import { surfaceColors } from "./surfaceColors";

export const primaryColors: PrimeVueColors[] = Object.values(PrimeVueColors).filter(color => !surfaceColors.includes(color));
