import { boolean, object, string, uuid, array, email, url, enum as zenum, type output, literal } from "zod/v4";
import FontSize from "@/enums/FontSize";
import PrimeVueColors from "@/enums/PrimeVueColors";
import PrimeVuePresetThemes from "@/enums/PrimeVuePresetThemes";
import { RecentActivityItemSchema } from "./RecentActivityItem";
import { NamespacePermissionSchema } from "./NamespacePermission";
import { Namespace } from "@/interfaces/AutoGen";

export const UserSchema = object({
  id: string(),
  type: string(),
  username: string(),
  displayName: string().optional(),
  email: email().or(literal("")),
  avatar: url().or(literal("")),
  roles: array(string()).optional(),
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

export const hasNamespace = (user: User, namespace: Namespace) => user.namespaces.some(n => n.iri === namespace);
