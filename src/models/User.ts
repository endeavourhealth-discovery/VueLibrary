import { boolean, object, string, uuid, array, email, url, enum as zenum, type output, literal } from "zod/v4";
import { RecentActivityItemSchema } from "./RecentActivityItem";
import { NamespacePermissionSchema } from "./NamespacePermission";
import { FontSize, NAMESPACE, PrimeVueColors, PrimeVuePresetThemes } from "@/enums";

export const UserSchema = object({
  id: string(),
  type: string(),
  username: string(),
  displayName: string().optional(),
  email: email().or(literal("")),
  avatar: url().or(literal("")),
  roles: array(string()).prefault([]),
  theme: zenum(PrimeVuePresetThemes).prefault(PrimeVuePresetThemes.LARA),
  primaryColor: zenum(PrimeVueColors).prefault(PrimeVueColors.EMERALD),
  surfaceColor: zenum(PrimeVueColors).prefault(PrimeVueColors.SLATE),
  darkMode: boolean().prefault(false),
  fontSize: zenum(FontSize).prefault(FontSize.MEDIUM),
  favourites: array(string()).prefault([]),
  recentActivity: array(RecentActivityItemSchema).prefault([]),
  organisations: array(string()).prefault([]),
  namespaces: array(NamespacePermissionSchema).prefault([])
});

export type User = output<typeof UserSchema>;

export const hasRole = (user: User, role: string) => user.roles?.includes(role);

export const hasNamespace = (user: User, namespace: NAMESPACE) => user.namespaces.some(n => n.iri === namespace);
