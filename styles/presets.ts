// eventually we don't want to work with presets 
// this causes unneeded clutter in an individual project
// we might want to have some preset "styles" folders that the developer can use instead

enum Modes {
  PLAYFUL = "playful",
  NEUTRAL = "neutral",
  PROFESSIONAL = "professional",
}

export const mode: Modes = Modes.PLAYFUL;
