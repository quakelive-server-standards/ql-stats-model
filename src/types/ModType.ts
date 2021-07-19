export enum ModType {
  BFG = 'BFG shot',
  BFG_SPLASH = 'BFG splash',
  CHAINGUN = 'Chain Gun',
  CRUSH = 'Crush',
  /**
   * When the player was falling to death.
   */
  FALLING = 'Falling',
  GAUNTLET = 'Gauntlet slice',
  GRENADE = 'Grenade',
  GRENADE_SPLASH = 'Grenade splash',
  HMG = 'Heavy Machine Gun bullet',
  /**
   * When the player falls out of the arena.
   */
  HURT = 'Hurt',
  KAMIKAZE = 'Kamikaze',
  LAVA = 'Lava',
  LIGHTNING = 'Lightning',
  MACHINEGUN = 'Machine Gun bullet',
  NAILGUN = 'Nail',
  PLASMA = 'Plasma ball',
  PLASMA_SPLASH = 'Plasma splash',
  PROXMINE = 'Proximity Mine',
  PROXMINE_SPLASH = 'Proximity Mine splash',
  RAILGUN = 'Rail',
  ROCKET = 'Rocket',
  ROCKET_SPLASH = 'Rocket splash',
  SHOTGUN = 'Shotgun bullet',
  SLIME = 'Slime',
  SWITCHTEAM = 'Switch team',
  TRIGGER_HURT = 'Trigger hurt',
  WATER = 'Water',
  /**
   * Unkwown world death
   */
  UNKNOWN = 'Unknown'
}

export function isEnvironment(mod: ModType) {
  return mod == ModType.CRUSH ||
    mod == ModType.FALLING ||
    mod == ModType.HURT ||
    mod == ModType.LAVA ||
    mod == ModType.SLIME ||
    mod == ModType.TRIGGER_HURT ||
    mod == ModType.WATER ||
    mod == ModType.UNKNOWN
}