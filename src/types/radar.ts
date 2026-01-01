export type Ring = "adopt" | "trial" | "assess" | "hold";

export type Quadrant = "languages" | "frameworks" | "tools" | "platforms";

export interface TechEntry {
  id: string;
  name: string;
  ring: Ring;
  quadrant: Quadrant;
  isNew: boolean;
  description: string;
}

export interface RadarConfig {
  entries: TechEntry[];
  rings: { name: string; color: string }[];
  quadrants: { name: string }[];
}
