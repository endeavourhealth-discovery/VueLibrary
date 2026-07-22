import z from "zod";

import { UserRole } from "@/enums";
import { PrimeVuePresetThemes } from "@/enums";
import { PrimeVueColors } from "@/enums";
import { FontSize } from "@/enums";

import { NamespacePermissionJavaSchema } from "./NamespacePermissionJava";
import { RecentActivityItemDtoSchema } from "./RecentActivityItemDto";

// export interface UserJava {
//   id?: string;
//   username?: string;
//   email?: string;
//   displayName?: string;
//   password?: string;
//   avatar?: string;
//   roles?: UserRole[];
//   organisations?: string[];
//   theme?: PrimeVuePresetThemes;
//   primaryColor?: PrimeVueColors;
//   surfaceColor?: PrimeVueColors;
//   darkMode?: boolean;
//   fontSize?: FontSize;
//   favourites?: string[];
//   recentActivity?: RecentActivityItemDto[];
//   namespaces?: NamespacePermissionJava[];
// }

export const UserJavaSchema = z.strictObject({
  id: z.string().optional(),
  username: z.string().optional(),
  email: z.string().optional(),
  displayName: z.string().optional(),
  password: z.string().optional(),
  avatar: z.string().optional(),

  roles: z.enum(UserRole).optional(),
  organisations: z.array(z.string()).optional(),

  theme: z.enum(PrimeVuePresetThemes).optional(),
  primaryColor: z.enum(PrimeVueColors).optional(),
  surfaceColor: z.enum(PrimeVueColors).optional(),

  darkMode: z.boolean().optional(),

  fontSize: z.enum(FontSize).optional(),

  favourites: z.array(z.string()).optional(),
  recentActivity: z.array(RecentActivityItemDtoSchema).optional(),
  namespaces: z.array(NamespacePermissionJavaSchema).optional()
});

export type UserJava = z.infer<typeof UserJavaSchema>;

export function isUserJava(value: unknown): value is UserJava {
  return UserJavaSchema.safeParse(value).success;
}
