export type Ring = "adopt" | "trial" | "assess" | "hold";

export type Quadrant =
  | "methods"
  | "languages-frameworks"
  | "tools"
  | "platforms";

export interface TechEntry {
  id: string;
  name: string;
  ring: Ring;
  quadrant: Quadrant;
  description: string;
  detail: string;
  website?: string;
  repository?: string;
  resources?: Array<{ label: string; url: string }>;
}
