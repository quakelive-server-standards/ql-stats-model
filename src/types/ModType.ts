export enum ModType {
  BFG = 'BFG',
  BFG_SPLASH = 'BFG splash damage',
  CHAINGUN = 'Chain Gun',
  CRUSH = 'Crush',
  /**
   * When the player was falling to death.
   */
  FALLING = 'Falling',
  GAUNTLET = 'Gauntlet',
  GRENADE = 'Grenade Launcher',
  GRENADE_SPLASH = 'Grenade splash damage',
  HMG = 'Heavy Machine Gun',
  /**
   * When the player falls out of the arena.
   */
  HURT = 'Hurt',
  KAMIKAZE = 'Kamikaze',
  LAVA = 'Lava',
  LIGHTNING = 'Lightning Gun',
  MACHINEGUN = 'Machine Gun',
  NAILGUN = 'Nailgun',
  PLASMA = 'Plasma Gun',
  PLASMA_SPLASH = 'Plasma splash damage',
  PROXMINE = 'Proximity Mine Launcher',
  PROXMINE_SPLASH = 'Proximity Mine splash damange',
  RAILGUN = 'Railgun',
  ROCKET = 'Rocket Launcher',
  ROCKET_SPLASH = 'Rocket splash damage',
  SHOTGUN = 'Shotgun',
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