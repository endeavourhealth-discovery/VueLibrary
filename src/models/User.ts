import { z } from "zod";

import { FontSize, NAMESPACE, PrimeVueColors, PrimeVuePresetThemes } from "../enums";
import { NamespacePermissionSchema } from "./NamespacePermission";
import { RecentActivityItemSchema } from "./RecentActivityItem";

export const UserSchema = z.object({
  id: z.string(),
  type: z.string(),
  username: z.string(),
  displayName: z.string().optional(),
  email: z.email().or(z.literal("")),
  avatar: z.url().or(z.literal("")),
  roles: z.array(z.string()).prefault([]),
  theme: z.enum(PrimeVuePresetThemes).prefault(PrimeVuePresetThemes.LARA),
  primaryColor: z.enum(PrimeVueColors).prefault(PrimeVueColors.EMERALD),
  surfaceColor: z.enum(PrimeVueColors).prefault(PrimeVueColors.SLATE),
  darkMode: z.boolean().prefault(false),
  fontSize: z.enum(FontSize).prefault(FontSize.MEDIUM),
  favourites: z.array(z.string()).prefault([]),
  recentActivity: z.array(RecentActivityItemSchema).prefault([]),
  organisations: z.array(z.string()).prefault([]),
  namespaces: z.array(NamespacePermissionSchema).prefault([])
});

export type User = z.output<typeof UserSchema>;

export const hasRole = (user: User, role: string) => user.roles?.includes(role);

export const hasRoles = (user: User, roles: string[]) => roles.every(role => user.roles?.includes(role));

export const hasNamespace = (user: User, namespace: NAMESPACE) => user.namespaces.some(n => n.iri === namespace);
