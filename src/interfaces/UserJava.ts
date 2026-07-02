import { UserRole } from "@/enums";
import { PrimeVuePresetThemes } from "@/enums";
import { PrimeVueColors } from "@/enums";
import { FontSize } from "@/enums";

import { NamespacePermissionJava } from "./NamespacePermissionJava";
import { RecentActivityItemDto } from "./RecentActivityItemDto";

export interface UserJava {
  id?: string;
  username?: string;
  email?: string;
  displayName?: string;
  password?: string;
  avatar?: string;
  roles?: UserRole[];
  organisations?: string[];
  theme?: PrimeVuePresetThemes;
  primaryColor?: PrimeVueColors;
  surfaceColor?: PrimeVueColors;
  darkMode?: boolean;
  fontSize?: FontSize;
  favourites?: string[];
  recentActivity?: RecentActivityItemDto[];
  namespaces?: NamespacePermissionJava[];
}
