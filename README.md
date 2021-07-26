# Quake Live stats data model

A typed and documented Quake Live stats data model.

## Quake Live Stats API documentation

### The player connects

If the player connect, a PLAYER_CONNECT event is emitted.

```json
{
   "DATA" : {
      "MATCH_GUID" : "3aced848-62ae-4c73-b48a-928d1e903ab7",
      "NAME" : "garz",
      "STEAM_ID" : "76561198170654797",
      "TIME" : 27674,
      "WARMUP" : true
   },
   "TYPE" : "PLAYER_CONNECT"
}
```

### A freshly joined player clicks on "Spectate"

```json
{
   "DATA" : {
      "KILLER" : {
         "NAME" : "garz",
         "OLD_TEAM" : "SPECTATOR",
         "STEAM_ID" : "76561198170654797",
         "TEAM" : "SPECTATOR"
      },
      "MATCH_GUID" : "3aced848-62ae-4c73-b48a-928d1e903ab7",
      "TIME" : 28172,
      "WARMUP" : true
   },
   "TYPE" : "PLAYER_SWITCHTEAM"
}
```

### A spectator joins the game

```json
{
   "DATA" : {
      "KILLER" : {
         "NAME" : "garz",
         "OLD_TEAM" : "SPECTATOR",
         "STEAM_ID" : "76561198170654797",
         "TEAM" : "FREE"
      },
      "MATCH_GUID" : "3aced848-62ae-4c73-b48a-928d1e903ab7",
      "TIME" : 27686,
      "WARMUP" : true
   },
   "TYPE" : "PLAYER_SWITCHTEAM"
}
```

### The playing player goes into spectator mode

```json
{
   "DATA" : {
      "KILLER" : {
         "AIRBORNE" : false,
         "AMMO" : 0,
         "ARMOR" : 0,
         "BOT" : false,
         "BOT_SKILL" : null,
         "HEALTH" : 0,
         "HOLDABLE" : null,
         "NAME" : "garz",
         "POSITION" : {
            "X" : -366.9644470214844,
            "Y" : -487.6138610839844,
            "Z" : 416.125
         },
         "POWERUPS" : null,
         "SPEED" : 0,
         "STEAM_ID" : "76561198170654797",
         "SUBMERGED" : false,
         "TEAM" : 0,
         "VIEW" : {
            "X" : 9.5635986328125,
            "Y" : -9.8931884765625,
            "Z" : 0
         },
         "WEAPON" : "OTHER_WEAPON"
      },
      "MATCH_GUID" : "3aced848-62ae-4c73-b48a-928d1e903ab7",
      "MOD" : "SWITCHTEAM",
      "OTHER_TEAM_ALIVE" : null,
      "OTHER_TEAM_DEAD" : null,
      "ROUND" : null,
      "SUICIDE" : true,
      "TEAMKILL" : false,
      "TEAM_ALIVE" : null,
      "TEAM_DEAD" : null,
      "TIME" : 27726,
      "VICTIM" : {
         "AIRBORNE" : false,
         "AMMO" : 24,
         "ARMOR" : 0,
         "BOT" : false,
         "BOT_SKILL" : null,
         "HEALTH" : 100,
         "HOLDABLE" : null,
         "NAME" : "garz",
         "POSITION" : {
            "X" : -366.9644470214844,
            "Y" : -487.6138610839844,
            "Z" : 416.125
         },
         "POWERUPS" : null,
         "SPEED" : 0,
         "STEAM_ID" : "76561198170654797",
         "STREAK" : 0,
         "SUBMERGED" : false,
         "TEAM" : 0,
         "VIEW" : {
            "X" : 9.5635986328125,
            "Y" : -9.8931884765625,
            "Z" : 0
         },
         "WEAPON" : "ROCKET"
      },
      "WARMUP" : true
   },
   "TYPE" : "PLAYER_KILL"
}
```

```json
{
   "DATA" : {
      "KILLER" : {
         "AIRBORNE" : false,
         "AMMO" : 0,
         "ARMOR" : 0,
         "BOT" : false,
         "BOT_SKILL" : null,
         "HEALTH" : 0,
         "HOLDABLE" : null,
         "NAME" : "garz",
         "POSITION" : {
            "X" : -366.9644470214844,
            "Y" : -487.6138610839844,
            "Z" : 416.125
         },
         "POWERUPS" : null,
         "SPEED" : 0,
         "STEAM_ID" : "76561198170654797",
         "SUBMERGED" : false,
         "TEAM" : 0,
         "VIEW" : {
            "X" : 9.5635986328125,
            "Y" : -9.8931884765625,
            "Z" : 0
         },
         "WEAPON" : "OTHER_WEAPON"
      },
      "MATCH_GUID" : "3aced848-62ae-4c73-b48a-928d1e903ab7",
      "MOD" : "SWITCHTEAM",
      "OTHER_TEAM_ALIVE" : null,
      "OTHER_TEAM_DEAD" : null,
      "ROUND" : null,
      "SUICIDE" : true,
      "TEAMKILL" : false,
      "TEAM_ALIVE" : null,
      "TEAM_DEAD" : null,
      "TIME" : 27726,
      "VICTIM" : {
         "AIRBORNE" : false,
         "AMMO" : 24,
         "ARMOR" : 0,
         "BOT" : false,
         "BOT_SKILL" : null,
         "HEALTH" : 100,
         "HOLDABLE" : null,
         "NAME" : "garz",
         "POSITION" : {
            "X" : -366.9644470214844,
            "Y" : -487.6138610839844,
            "Z" : 416.125
         },
         "POWERUPS" : null,
         "SPEED" : 0,
         "STEAM_ID" : "76561198170654797",
         "STREAK" : 0,
         "SUBMERGED" : false,
         "TEAM" : 0,
         "VIEW" : {
            "X" : 9.5635986328125,
            "Y" : -9.8931884765625,
            "Z" : 0
         },
         "WEAPON" : "ROCKET"
      },
      "WARMUP" : true
   },
   "TYPE" : "PLAYER_DEATH"
}
```

```json
 {
   "DATA" : {
      "ABORTED" : false,
      "DAMAGE" : {
         "DEALT" : 0,
         "TAKEN" : 15
      },
      "DEATHS" : 0,
      "ITEM_TIMING" : {
         "MEGA_HEALTH" : 0
      },
      "KILLS" : 0,
      "LOSE" : 0,
      "MATCH_GUID" : "3aced848-62ae-4c73-b48a-928d1e903ab7",
      "MAX_STREAK" : 0,
      "MEDALS" : {
         "ACCURACY" : 0,
         "ASSISTS" : 0,
         "CAPTURES" : 0,
         "COMBOKILL" : 0,
         "DEFENDS" : 0,
         "EXCELLENT" : 0,
         "FIRSTFRAG" : 0,
         "HEADSHOT" : 0,
         "HUMILIATION" : 0,
         "IMPRESSIVE" : 0,
         "MIDAIR" : 0,
         "PERFECT" : 0,
         "PERFORATED" : 0,
         "QUADGOD" : 0,
         "RAMPAGE" : 0,
         "REVENGE" : 0
      },
      "MODEL" : "sarge",
      "NAME" : "garz",
      "PICKUPS" : {
         "AMMO" : 0,
         "ARMOR" : 0,
         "ARMOR_REGEN" : 0,
         "BATTLESUIT" : 0,
         "DOUBLER" : 0,
         "FLIGHT" : 0,
         "GREEN_ARMOR" : 0,
         "GUARD" : 0,
         "HASTE" : 0,
         "HEALTH" : 0,
         "INVIS" : 0,
         "INVULNERABILITY" : 0,
         "KAMIKAZE" : 0,
         "MEDKIT" : 0,
         "MEGA_HEALTH" : 1,
         "OTHER_HOLDABLE" : 0,
         "OTHER_POWERUP" : 0,
         "PORTAL" : 0,
         "QUAD" : 0,
         "RED_ARMOR" : 0,
         "REGEN" : 0,
         "SCOUT" : 0,
         "TELEPORTER" : 0,
         "YELLOW_ARMOR" : 0
      },
      "PLAY_TIME" : 39,
      "QUIT" : 1,
      "RANK" : -1,
      "SCORE" : 0,
      "STEAM_ID" : "76561198170654797",
      "TIED_RANK" : 1,
      "WARMUP" : true,
      "WEAPONS" : {
         "BFG" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 0,
            "S" : 0,
            "T" : 0
         },
         "CHAINGUN" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 0,
            "S" : 0,
            "T" : 0
         },
         "GAUNTLET" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 0,
            "S" : 0,
            "T" : 0
         },
         "GRENADE" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 0,
            "S" : 0,
            "T" : 0
         },
         "HMG" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 0,
            "S" : 0,
            "T" : 0
         },
         "LIGHTNING" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 0,
            "S" : 0,
            "T" : 0
         },
         "MACHINEGUN" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 0,
            "S" : 0,
            "T" : 2
         },
         "NAILGUN" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 0,
            "S" : 0,
            "T" : 0
         },
         "OTHER_WEAPON" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 0,
            "S" : 0,
            "T" : 0
         },
         "PLASMA" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 0,
            "S" : 0,
            "T" : 0
         },
         "PROXMINE" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 0,
            "S" : 0,
            "T" : 0
         },
         "RAILGUN" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 0,
            "S" : 1,
            "T" : 2
         },
         "ROCKET" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 1,
            "S" : 1,
            "T" : 34
         },
         "SHOTGUN" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 1,
            "S" : 0,
            "T" : 0
         }
      },
      "WIN" : 0
   },
   "TYPE" : "PLAYER_STATS"
}
```

```json
{
   "DATA" : {
      "KILLER" : {
         "NAME" : "garz",
         "OLD_TEAM" : "FREE",
         "STEAM_ID" : "76561198170654797",
         "TEAM" : "SPECTATOR"
      },
      "MATCH_GUID" : "3aced848-62ae-4c73-b48a-928d1e903ab7",
      "TIME" : 27726,
      "WARMUP" : true
   },
   "TYPE" : "PLAYER_SWITCHTEAM"
}
```

### A playing player disconnects

```json
{
   "DATA" : {
      "ABORTED" : false,
      "DAMAGE" : {
         "DEALT" : 0,
         "TAKEN" : 10
      },
      "DEATHS" : 0,
      "ITEM_TIMING" : {
         "RED_ARMOR" : 0,
         "YELLOW_ARMOR" : 0
      },
      "KILLS" : 0,
      "LOSE" : 0,
      "MATCH_GUID" : "3aced848-62ae-4c73-b48a-928d1e903ab7",
      "MAX_STREAK" : 0,
      "MEDALS" : {
         "ACCURACY" : 0,
         "ASSISTS" : 0,
         "CAPTURES" : 0,
         "COMBOKILL" : 0,
         "DEFENDS" : 0,
         "EXCELLENT" : 0,
         "FIRSTFRAG" : 0,
         "HEADSHOT" : 0,
         "HUMILIATION" : 0,
         "IMPRESSIVE" : 0,
         "MIDAIR" : 0,
         "PERFECT" : 0,
         "PERFORATED" : 0,
         "QUADGOD" : 0,
         "RAMPAGE" : 0,
         "REVENGE" : 0
      },
      "MODEL" : "sarge",
      "NAME" : "garz",
      "PICKUPS" : {
         "AMMO" : 0,
         "ARMOR" : 0,
         "ARMOR_REGEN" : 0,
         "BATTLESUIT" : 0,
         "DOUBLER" : 0,
         "FLIGHT" : 0,
         "GREEN_ARMOR" : 0,
         "GUARD" : 0,
         "HASTE" : 0,
         "HEALTH" : 0,
         "INVIS" : 0,
         "INVULNERABILITY" : 0,
         "KAMIKAZE" : 0,
         "MEDKIT" : 0,
         "MEGA_HEALTH" : 0,
         "OTHER_HOLDABLE" : 0,
         "OTHER_POWERUP" : 0,
         "PORTAL" : 0,
         "QUAD" : 0,
         "RED_ARMOR" : 1,
         "REGEN" : 0,
         "SCOUT" : 0,
         "TELEPORTER" : 0,
         "YELLOW_ARMOR" : 1
      },
      "PLAY_TIME" : 39,
      "QUIT" : 1,
      "RANK" : -1,
      "SCORE" : 0,
      "STEAM_ID" : "76561198170654797",
      "TIED_RANK" : 1,
      "WARMUP" : true,
      "WEAPONS" : {
         "BFG" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 0,
            "S" : 0,
            "T" : 0
         },
         "CHAINGUN" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 0,
            "S" : 0,
            "T" : 0
         },
         "GAUNTLET" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 0,
            "S" : 0,
            "T" : 0
         },
         "GRENADE" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 1,
            "S" : 0,
            "T" : 0
         },
         "HMG" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 0,
            "S" : 0,
            "T" : 0
         },
         "LIGHTNING" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 0,
            "S" : 0,
            "T" : 0
         },
         "MACHINEGUN" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 0,
            "S" : 0,
            "T" : 6
         },
         "NAILGUN" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 0,
            "S" : 0,
            "T" : 0
         },
         "OTHER_WEAPON" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 0,
            "S" : 0,
            "T" : 0
         },
         "PLASMA" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 0,
            "S" : 0,
            "T" : 0
         },
         "PROXMINE" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 0,
            "S" : 0,
            "T" : 0
         },
         "RAILGUN" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 0,
            "S" : 0,
            "T" : 0
         },
         "ROCKET" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 1,
            "S" : 1,
            "T" : 33
         },
         "SHOTGUN" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 1,
            "S" : 0,
            "T" : 0
         }
      },
      "WIN" : 0
   },
   "TYPE" : "PLAYER_STATS"
}
```

```json
{
   "DATA" : {
      "MATCH_GUID" : "3aced848-62ae-4c73-b48a-928d1e903ab7",
      "NAME" : "garz",
      "STEAM_ID" : "76561198170654797",
      "TIME" : 28095,
      "WARMUP" : true
   },
   "TYPE" : "PLAYER_DISCONNECT"
}
```

### A spectator disconnects

```json
{
   "DATA" : {
      "MATCH_GUID" : "3aced848-62ae-4c73-b48a-928d1e903ab7",
      "NAME" : "garz",
      "STEAM_ID" : "76561198170654797",
      "TIME" : 28220,
      "WARMUP" : true
   },
   "TYPE" : "PLAYER_DISCONNECT"
}
```

### A match starts

```json
{
   "DATA" : {
      "CAPTURE_LIMIT" : 8,
      "FACTORY" : "stdduel",
      "FACTORY_TITLE" : "Standard Duel",
      "FRAG_LIMIT" : 0,
      "GAME_TYPE" : "DUEL",
      "INFECTED" : 0,
      "INSTAGIB" : 0,
      "MAP" : "campgrounds",
      "MATCH_GUID" : "b39556ce-b6da-47a5-b728-f73fb7d2f195",
      "MERCY_LIMIT" : 0,
      "PLAYERS" : [
         {
            "NAME" : "garz",
            "STEAM_ID" : "76561198170654797",
            "TEAM" : 0
         },
         {
            "NAME" : "f^4oo ^7t^4o^7p^4e^7k",
            "STEAM_ID" : "76561199001714968",
            "TEAM" : 0
         }
      ],
      "QUADHOG" : 0,
      "ROUND_LIMIT" : 10,
      "SCORE_LIMIT" : 150,
      "SERVER_TITLE" : "QL Fight Club - Fresh Maps",
      "TIME_LIMIT" : 10,
      "TRAINING" : 0
   },
   "TYPE" : "MATCH_STARTED"
}
```

### A player frags itself

```json
{
   "DATA" : {
      "KILLER" : {
         "AIRBORNE" : false,
         "AMMO" : 22,
         "ARMOR" : 0,
         "BOT" : false,
         "BOT_SKILL" : null,
         "HEALTH" : -14,
         "HOLDABLE" : null,
         "NAME" : "garz",
         "POSITION" : {
            "X" : -728.875,
            "Y" : -663.1250610351562,
            "Z" : 64.125
         },
         "POWERUPS" : null,
         "SPEED" : 531.7309587563997,
         "STEAM_ID" : "76561198170654797",
         "SUBMERGED" : false,
         "TEAM" : 0,
         "VIEW" : {
            "X" : 20.885009765625,
            "Y" : 136.043701171875,
            "Z" : 0
         },
         "WEAPON" : "ROCKET"
      },
      "MATCH_GUID" : "1244e9fe-ce91-4d71-b67c-c9edf8d7cf8c",
      "MOD" : "ROCKET_SPLASH",
      "OTHER_TEAM_ALIVE" : null,
      "OTHER_TEAM_DEAD" : null,
      "ROUND" : null,
      "SUICIDE" : true,
      "TEAMKILL" : false,
      "TEAM_ALIVE" : null,
      "TEAM_DEAD" : null,
      "TIME" : 27376,
      "VICTIM" : {
         "AIRBORNE" : false,
         "AMMO" : 22,
         "ARMOR" : 0,
         "BOT" : false,
         "BOT_SKILL" : null,
         "HEALTH" : 0,
         "HOLDABLE" : null,
         "NAME" : "garz",
         "POSITION" : {
            "X" : -728.875,
            "Y" : -663.1250610351562,
            "Z" : 64.125
         },
         "POWERUPS" : null,
         "SPEED" : 531.7309587563997,
         "STEAM_ID" : "76561198170654797",
         "STREAK" : 0,
         "SUBMERGED" : false,
         "TEAM" : 0,
         "VIEW" : {
            "X" : 20.885009765625,
            "Y" : 136.043701171875,
            "Z" : 0
         },
         "WEAPON" : "ROCKET"
      },
      "WARMUP" : true
   },
   "TYPE" : "PLAYER_KILL"
}
```

```json
{
   "DATA" : {
      "KILLER" : {
         "AIRBORNE" : false,
         "AMMO" : 22,
         "ARMOR" : 0,
         "BOT" : false,
         "BOT_SKILL" : null,
         "HEALTH" : -14,
         "HOLDABLE" : null,
         "NAME" : "garz",
         "POSITION" : {
            "X" : -728.875,
            "Y" : -663.1250610351562,
            "Z" : 64.125
         },
         "POWERUPS" : null,
         "SPEED" : 531.7309587563997,
         "STEAM_ID" : "76561198170654797",
         "SUBMERGED" : false,
         "TEAM" : 0,
         "VIEW" : {
            "X" : 20.885009765625,
            "Y" : 136.043701171875,
            "Z" : 0
         },
         "WEAPON" : "ROCKET"
      },
      "MATCH_GUID" : "1244e9fe-ce91-4d71-b67c-c9edf8d7cf8c",
      "MOD" : "ROCKET_SPLASH",
      "OTHER_TEAM_ALIVE" : null,
      "OTHER_TEAM_DEAD" : null,
      "ROUND" : null,
      "SUICIDE" : true,
      "TEAMKILL" : false,
      "TEAM_ALIVE" : null,
      "TEAM_DEAD" : null,
      "TIME" : 27376,
      "VICTIM" : {
         "AIRBORNE" : false,
         "AMMO" : 22,
         "ARMOR" : 0,
         "BOT" : false,
         "BOT_SKILL" : null,
         "HEALTH" : 0,
         "HOLDABLE" : null,
         "NAME" : "garz",
         "POSITION" : {
            "X" : -728.875,
            "Y" : -663.1250610351562,
            "Z" : 64.125
         },
         "POWERUPS" : null,
         "SPEED" : 531.7309587563997,
         "STEAM_ID" : "76561198170654797",
         "STREAK" : 0,
         "SUBMERGED" : false,
         "TEAM" : 0,
         "VIEW" : {
            "X" : 20.885009765625,
            "Y" : 136.043701171875,
            "Z" : 0
         },
         "WEAPON" : "ROCKET"
      },
      "WARMUP" : true
   },
   "TYPE" : "PLAYER_DEATH"
}
```

### The player enters the /kill command into the console

```json
{
   "DATA" : {
      "KILLER" : {
         "AIRBORNE" : false,
         "AMMO" : 0,
         "ARMOR" : 0,
         "BOT" : false,
         "BOT_SKILL" : null,
         "HEALTH" : -999,
         "HOLDABLE" : null,
         "NAME" : "garz",
         "POSITION" : {
            "X" : -104,
            "Y" : 1032,
            "Z" : 56.35641098022461
         },
         "POWERUPS" : null,
         "SPEED" : 0,
         "STEAM_ID" : "76561198170654797",
         "SUBMERGED" : false,
         "TEAM" : 0,
         "VIEW" : {
            "X" : 4.0869140625,
            "Y" : -34.6343994140625,
            "Z" : 0
         },
         "WEAPON" : "OTHER_WEAPON"
      },
      "MATCH_GUID" : "a00b725c-6c4e-4bd9-a47a-4739e440e898",
      "MOD" : "SUICIDE",
      "OTHER_TEAM_ALIVE" : null,
      "OTHER_TEAM_DEAD" : null,
      "ROUND" : null,
      "SUICIDE" : true,
      "TEAMKILL" : false,
      "TEAM_ALIVE" : null,
      "TEAM_DEAD" : null,
      "TIME" : 5310,
      "VICTIM" : {
         "AIRBORNE" : false,
         "AMMO" : 150,
         "ARMOR" : 0,
         "BOT" : false,
         "BOT_SKILL" : null,
         "HEALTH" : 0,
         "HOLDABLE" : null,
         "NAME" : "garz",
         "POSITION" : {
            "X" : -104,
            "Y" : 1032,
            "Z" : 56.35641098022461
         },
         "POWERUPS" : null,
         "SPEED" : 0,
         "STEAM_ID" : "76561198170654797",
         "STREAK" : 0,
         "SUBMERGED" : false,
         "TEAM" : 0,
         "VIEW" : {
            "X" : 4.0869140625,
            "Y" : -34.6343994140625,
            "Z" : 0
         },
         "WEAPON" : "MACHINEGUN"
      },
      "WARMUP" : true
   },
   "TYPE" : "PLAYER_KILL"
}
```

```json
{
   "DATA" : {
      "KILLER" : {
         "AIRBORNE" : false,
         "AMMO" : 0,
         "ARMOR" : 0,
         "BOT" : false,
         "BOT_SKILL" : null,
         "HEALTH" : -999,
         "HOLDABLE" : null,
         "NAME" : "garz",
         "POSITION" : {
            "X" : -104,
            "Y" : 1032,
            "Z" : 56.35641098022461
         },
         "POWERUPS" : null,
         "SPEED" : 0,
         "STEAM_ID" : "76561198170654797",
         "SUBMERGED" : false,
         "TEAM" : 0,
         "VIEW" : {
            "X" : 4.0869140625,
            "Y" : -34.6343994140625,
            "Z" : 0
         },
         "WEAPON" : "OTHER_WEAPON"
      },
      "MATCH_GUID" : "a00b725c-6c4e-4bd9-a47a-4739e440e898",
      "MOD" : "SUICIDE",
      "OTHER_TEAM_ALIVE" : null,
      "OTHER_TEAM_DEAD" : null,
      "ROUND" : null,
      "SUICIDE" : true,
      "TEAMKILL" : false,
      "TEAM_ALIVE" : null,
      "TEAM_DEAD" : null,
      "TIME" : 5310,
      "VICTIM" : {
         "AIRBORNE" : false,
         "AMMO" : 150,
         "ARMOR" : 0,
         "BOT" : false,
         "BOT_SKILL" : null,
         "HEALTH" : 0,
         "HOLDABLE" : null,
         "NAME" : "garz",
         "POSITION" : {
            "X" : -104,
            "Y" : 1032,
            "Z" : 56.35641098022461
         },
         "POWERUPS" : null,
         "SPEED" : 0,
         "STEAM_ID" : "76561198170654797",
         "STREAK" : 0,
         "SUBMERGED" : false,
         "TEAM" : 0,
         "VIEW" : {
            "X" : 4.0869140625,
            "Y" : -34.6343994140625,
            "Z" : 0
         },
         "WEAPON" : "MACHINEGUN"
      },
      "WARMUP" : true
   },
   "TYPE" : "PLAYER_DEATH"
}
```

### A player gets fragged by lava

```json
{
   "DATA" : {
      "KILLER" : null,
      "MATCH_GUID" : "f2530877-0963-4fe7-9b2d-baecb5718df2",
      "MOD" : "LAVA",
      "OTHER_TEAM_ALIVE" : null,
      "OTHER_TEAM_DEAD" : null,
      "ROUND" : null,
      "SUICIDE" : false,
      "TEAMKILL" : false,
      "TEAM_ALIVE" : null,
      "TEAM_DEAD" : null,
      "TIME" : 13,
      "VICTIM" : {
         "AIRBORNE" : false,
         "AMMO" : 150,
         "ARMOR" : 0,
         "BOT" : false,
         "BOT_SKILL" : null,
         "HEALTH" : 25,
         "HOLDABLE" : null,
         "NAME" : "garz",
         "POSITION" : {
            "X" : 311.6126098632812,
            "Y" : -344.8745727539062,
            "Z" : -143.875
         },
         "POWERUPS" : null,
         "SPEED" : 0,
         "STEAM_ID" : "76561198170654797",
         "STREAK" : 0,
         "SUBMERGED" : false,
         "TEAM" : 0,
         "VIEW" : {
            "X" : 9.920654296875,
            "Y" : 88.4014892578125,
            "Z" : 0
         },
         "WEAPON" : "MACHINEGUN"
      },
      "WARMUP" : true
   },
   "TYPE" : "PLAYER_DEATH"
}
```

### A player drowns

```json
{
   "DATA" : {
      "KILLER" : null,
      "MATCH_GUID" : "dc5dd9bc-6bc5-42d9-a518-6c2df9a14274",
      "MOD" : "WATER",
      "OTHER_TEAM_ALIVE" : null,
      "OTHER_TEAM_DEAD" : null,
      "ROUND" : null,
      "SUICIDE" : false,
      "TEAMKILL" : false,
      "TEAM_ALIVE" : null,
      "TEAM_DEAD" : null,
      "TIME" : 1032,
      "VICTIM" : {
         "AIRBORNE" : true,
         "AMMO" : 7,
         "ARMOR" : 0,
         "BOT" : false,
         "BOT_SKILL" : null,
         "HEALTH" : 4,
         "HOLDABLE" : null,
         "NAME" : "garz",
         "POSITION" : {
            "X" : 517.90478515625,
            "Y" : 1151.82373046875,
            "Z" : -320.6697387695312
         },
         "POWERUPS" : null,
         "SPEED" : 3.992882117591311,
         "STEAM_ID" : "76561198170654797",
         "STREAK" : 0,
         "SUBMERGED" : true,
         "TEAM" : 0,
         "VIEW" : {
            "X" : -54.4537353515625,
            "Y" : -69.6368408203125,
            "Z" : 0
         },
         "WEAPON" : "ROCKET"
      },
      "WARMUP" : true
   },
   "TYPE" : "PLAYER_DEATH"
}
```

### A player is falling out of the arena

```json
{
   "DATA" : {
      "KILLER" : null,
      "MATCH_GUID" : "d808e63d-8030-490c-9e78-c9d1480f7d5a",
      "MOD" : "HURT",
      "OTHER_TEAM_ALIVE" : null,
      "OTHER_TEAM_DEAD" : null,
      "ROUND" : null,
      "SUICIDE" : false,
      "TEAMKILL" : false,
      "TEAM_ALIVE" : null,
      "TEAM_DEAD" : null,
      "TIME" : 32108,
      "VICTIM" : {
         "AIRBORNE" : true,
         "AMMO" : 25,
         "ARMOR" : 0,
         "BOT" : false,
         "BOT_SKILL" : null,
         "HEALTH" : 109,
         "HOLDABLE" : null,
         "NAME" : "garz",
         "POSITION" : {
            "X" : 414.1750183105469,
            "Y" : -1296.865478515625,
            "Z" : -1065.986206054688
         },
         "POWERUPS" : null,
         "SPEED" : 208.0153427334147,
         "STEAM_ID" : "76561198170654797",
         "STREAK" : 0,
         "SUBMERGED" : false,
         "TEAM" : 0,
         "VIEW" : {
            "X" : 15.3863525390625,
            "Y" : -25.169677734375,
            "Z" : 0
         },
         "WEAPON" : "ROCKET"
      },
      "WARMUP" : true
   },
   "TYPE" : "PLAYER_DEATH"
}
```

### A player is falling to death

```json
{
   "DATA" : {
      "KILLER" : null,
      "MATCH_GUID" : "d808e63d-8030-490c-9e78-c9d1480f7d5a",
      "MOD" : "FALLING",
      "OTHER_TEAM_ALIVE" : null,
      "OTHER_TEAM_DEAD" : null,
      "ROUND" : null,
      "SUICIDE" : false,
      "TEAMKILL" : false,
      "TEAM_ALIVE" : null,
      "TEAM_DEAD" : null,
      "TIME" : 32170,
      "VICTIM" : {
         "AIRBORNE" : false,
         "AMMO" : 119,
         "ARMOR" : 0,
         "BOT" : false,
         "BOT_SKILL" : null,
         "HEALTH" : 1,
         "HOLDABLE" : null,
         "NAME" : "garz",
         "POSITION" : {
            "X" : -521.2644653320312,
            "Y" : -75.06851959228516,
            "Z" : -311.8472595214844
         },
         "POWERUPS" : null,
         "SPEED" : 263.5000296489547,
         "STEAM_ID" : "76561198170654797",
         "STREAK" : 0,
         "SUBMERGED" : false,
         "TEAM" : 0,
         "VIEW" : {
            "X" : 17.7264404296875,
            "Y" : -11.239013671875,
            "Z" : 0
         },
         "WEAPON" : "PLASMA"
      },
      "WARMUP" : true
   },
   "TYPE" : "PLAYER_DEATH"
}
```

### A player frags a player

```json
 {
   "DATA" : {
      "KILLER" : {
         "AIRBORNE" : false,
         "AMMO" : 13,
         "ARMOR" : 35,
         "BOT" : false,
         "BOT_SKILL" : null,
         "HEALTH" : 110,
         "HOLDABLE" : null,
         "NAME" : "f^4oo ^7t^4o^7p^4e^7k",
         "POSITION" : {
            "X" : 230.1467590332031,
            "Y" : -1341.296630859375,
            "Z" : 217.125
         },
         "POWERUPS" : null,
         "SPEED" : 296.3669732147966,
         "STEAM_ID" : "76561199001714968",
         "SUBMERGED" : false,
         "TEAM" : 0,
         "VIEW" : {
            "X" : 13.5406494140625,
            "Y" : -15.7818603515625,
            "Z" : 0
         },
         "WEAPON" : "ROCKET"
      },
      "MATCH_GUID" : "b39556ce-b6da-47a5-b728-f73fb7d2f195",
      "MOD" : "ROCKET_SPLASH",
      "OTHER_TEAM_ALIVE" : null,
      "OTHER_TEAM_DEAD" : null,
      "ROUND" : null,
      "SUICIDE" : false,
      "TEAMKILL" : false,
      "TEAM_ALIVE" : null,
      "TEAM_DEAD" : null,
      "TIME" : 60,
      "VICTIM" : {
         "AIRBORNE" : false,
         "AMMO" : 32,
         "ARMOR" : 0,
         "BOT" : false,
         "BOT_SKILL" : null,
         "HEALTH" : 16,
         "HOLDABLE" : null,
         "NAME" : "garz",
         "POSITION" : {
            "X" : 391.0954284667969,
            "Y" : -1384.875,
            "Z" : 217.1261596679688
         },
         "POWERUPS" : null,
         "SPEED" : 260.6889759608181,
         "STEAM_ID" : "76561198170654797",
         "STREAK" : 0,
         "SUBMERGED" : false,
         "TEAM" : 0,
         "VIEW" : {
            "X" : 5.2349853515625,
            "Y" : 144.1900634765625,
            "Z" : 0
         },
         "WEAPON" : "PLASMA"
      },
      "WARMUP" : false
   },
   "TYPE" : "PLAYER_KILL"
}
```

```json
{
   "DATA" : {
      "KILLER" : {
         "AIRBORNE" : false,
         "AMMO" : 13,
         "ARMOR" : 35,
         "BOT" : false,
         "BOT_SKILL" : null,
         "HEALTH" : 110,
         "HOLDABLE" : null,
         "NAME" : "f^4oo ^7t^4o^7p^4e^7k",
         "POSITION" : {
            "X" : 230.1467590332031,
            "Y" : -1341.296630859375,
            "Z" : 217.125
         },
         "POWERUPS" : null,
         "SPEED" : 296.3669732147966,
         "STEAM_ID" : "76561199001714968",
         "SUBMERGED" : false,
         "TEAM" : 0,
         "VIEW" : {
            "X" : 13.5406494140625,
            "Y" : -15.7818603515625,
            "Z" : 0
         },
         "WEAPON" : "ROCKET"
      },
      "MATCH_GUID" : "b39556ce-b6da-47a5-b728-f73fb7d2f195",
      "MOD" : "ROCKET_SPLASH",
      "OTHER_TEAM_ALIVE" : null,
      "OTHER_TEAM_DEAD" : null,
      "ROUND" : null,
      "SUICIDE" : false,
      "TEAMKILL" : false,
      "TEAM_ALIVE" : null,
      "TEAM_DEAD" : null,
      "TIME" : 60,
      "VICTIM" : {
         "AIRBORNE" : false,
         "AMMO" : 32,
         "ARMOR" : 0,
         "BOT" : false,
         "BOT_SKILL" : null,
         "HEALTH" : 16,
         "HOLDABLE" : null,
         "NAME" : "garz",
         "POSITION" : {
            "X" : 391.0954284667969,
            "Y" : -1384.875,
            "Z" : 217.1261596679688
         },
         "POWERUPS" : null,
         "SPEED" : 260.6889759608181,
         "STEAM_ID" : "76561198170654797",
         "STREAK" : 0,
         "SUBMERGED" : false,
         "TEAM" : 0,
         "VIEW" : {
            "X" : 5.2349853515625,
            "Y" : 144.1900634765625,
            "Z" : 0
         },
         "WEAPON" : "PLASMA"
      },
      "WARMUP" : false
   },
   "TYPE" : "PLAYER_DEATH"
}
```

### A player earns a medal

```json
{
   "DATA" : {
      "MATCH_GUID" : "f2530877-0963-4fe7-9b2d-baecb5718df2",
      "MEDAL" : "GAUNTLET",
      "NAME" : "f^4oo ^7t^4o^7p^4e^7k",
      "STEAM_ID" : "76561199001714968",
      "TIME" : 38,
      "TOTAL" : 1,
      "WARMUP" : true
   },
   "TYPE" : "PLAYER_MEDAL"
}
```

### A new map is voted in warmup

```json
{
   "DATA" : {
      "ABORTED" : true,
      "DAMAGE" : {
         "DEALT" : 0,
         "TAKEN" : 0
      },
      "DEATHS" : 0,
      "KILLS" : 0,
      "LOSE" : 0,
      "MATCH_GUID" : "f19d6038-c6d8-40b7-8ff0-684d7574e91c",
      "MAX_STREAK" : 0,
      "MEDALS" : {
         "ACCURACY" : 0,
         "ASSISTS" : 0,
         "CAPTURES" : 0,
         "COMBOKILL" : 0,
         "DEFENDS" : 0,
         "EXCELLENT" : 0,
         "FIRSTFRAG" : 0,
         "HEADSHOT" : 0,
         "HUMILIATION" : 0,
         "IMPRESSIVE" : 0,
         "MIDAIR" : 0,
         "PERFECT" : 0,
         "PERFORATED" : 0,
         "QUADGOD" : 0,
         "RAMPAGE" : 0,
         "REVENGE" : 0
      },
      "MODEL" : "sarge",
      "NAME" : "garz",
      "PICKUPS" : {
         "AMMO" : 0,
         "ARMOR" : 0,
         "ARMOR_REGEN" : 0,
         "BATTLESUIT" : 0,
         "DOUBLER" : 0,
         "FLIGHT" : 0,
         "GREEN_ARMOR" : 0,
         "GUARD" : 0,
         "HASTE" : 0,
         "HEALTH" : 0,
         "INVIS" : 0,
         "INVULNERABILITY" : 0,
         "KAMIKAZE" : 0,
         "MEDKIT" : 0,
         "MEGA_HEALTH" : 0,
         "OTHER_HOLDABLE" : 0,
         "OTHER_POWERUP" : 0,
         "PORTAL" : 0,
         "QUAD" : 0,
         "RED_ARMOR" : 0,
         "REGEN" : 0,
         "SCOUT" : 0,
         "TELEPORTER" : 0,
         "YELLOW_ARMOR" : 0
      },
      "PLAY_TIME" : 7,
      "QUIT" : 0,
      "RANK" : 1,
      "SCORE" : 0,
      "STEAM_ID" : "76561198170654797",
      "TIED_RANK" : 0,
      "WARMUP" : true,
      "WEAPONS" : {
         "BFG" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 0,
            "S" : 0,
            "T" : 0
         },
         "CHAINGUN" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 0,
            "S" : 0,
            "T" : 0
         },
         "GAUNTLET" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 0,
            "S" : 0,
            "T" : 0
         },
         "GRENADE" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 0,
            "S" : 0,
            "T" : 0
         },
         "HMG" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 0,
            "S" : 0,
            "T" : 0
         },
         "LIGHTNING" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 0,
            "S" : 0,
            "T" : 0
         },
         "MACHINEGUN" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 0,
            "S" : 0,
            "T" : 7
         },
         "NAILGUN" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 0,
            "S" : 0,
            "T" : 0
         },
         "OTHER_WEAPON" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 0,
            "S" : 0,
            "T" : 0
         },
         "PLASMA" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 0,
            "S" : 0,
            "T" : 0
         },
         "PROXMINE" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 0,
            "S" : 0,
            "T" : 0
         },
         "RAILGUN" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 0,
            "S" : 0,
            "T" : 0
         },
         "ROCKET" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 0,
            "S" : 0,
            "T" : 0
         },
         "SHOTGUN" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 0,
            "S" : 0,
            "T" : 0
         }
      },
      "WIN" : 1
   },
   "TYPE" : "PLAYER_STATS"
}
```

```json
{
   "DATA" : {
      "ABORTED" : true,
      "CAPTURE_LIMIT" : 8,
      "EXIT_MSG" : "Shutdown",
      "FACTORY" : "stdduel",
      "FACTORY_TITLE" : "Standard Duel",
      "FIRST_SCORER" : "none",
      "FRAG_LIMIT" : 0,
      "GAME_LENGTH" : 2205,
      "GAME_TYPE" : "DUEL",
      "INFECTED" : 0,
      "INSTAGIB" : 0,
      "LAST_LEAD_CHANGE_TIME" : 83725,
      "LAST_SCORER" : "none",
      "LAST_TEAMSCORER" : "none",
      "MAP" : "gomdm3",
      "MATCH_GUID" : "f19d6038-c6d8-40b7-8ff0-684d7574e91c",
      "MERCY_LIMIT" : 0,
      "QUADHOG" : 0,
      "RESTARTED" : 0,
      "ROUND_LIMIT" : 10,
      "SCORE_LIMIT" : 150,
      "SERVER_TITLE" : "QL Fight Club - Fresh Maps",
      "TIME_LIMIT" : 10,
      "TRAINING" : 0,
      "TSCORE0" : 0,
      "TSCORE1" : 0
   },
   "TYPE" : "MATCH_REPORT"
}
```

### A match ends regularly

```json
{
   "DATA" : {
      "ABORTED" : false,
      "DAMAGE" : {
         "DEALT" : 5197,
         "TAKEN" : 3553
      },
      "DEATHS" : 8,
      "ITEM_TIMING" : {
         "GREEN_ARMOR" : 27979,
         "MEGA_HEALTH" : 3638,
         "RED_ARMOR" : 18431,
         "YELLOW_ARMOR" : 11731
      },
      "KILLS" : 21,
      "LOSE" : 0,
      "MATCH_GUID" : "b601bba3-dc5c-4cbd-9327-8e522c8f34bc",
      "MAX_STREAK" : 8,
      "MEDALS" : {
         "ACCURACY" : 0,
         "ASSISTS" : 0,
         "CAPTURES" : 0,
         "COMBOKILL" : 1,
         "DEFENDS" : 0,
         "EXCELLENT" : 0,
         "FIRSTFRAG" : 1,
         "HEADSHOT" : 0,
         "HUMILIATION" : 0,
         "IMPRESSIVE" : 5,
         "MIDAIR" : 1,
         "PERFECT" : 0,
         "PERFORATED" : 0,
         "QUADGOD" : 0,
         "RAMPAGE" : 0,
         "REVENGE" : 1
      },
      "MODEL" : "ranger/red",
      "NAME" : "carrik",
      "PICKUPS" : {
         "AMMO" : 7,
         "ARMOR" : 0,
         "ARMOR_REGEN" : 0,
         "BATTLESUIT" : 0,
         "DOUBLER" : 0,
         "FLIGHT" : 0,
         "GREEN_ARMOR" : 12,
         "GUARD" : 0,
         "HASTE" : 0,
         "HEALTH" : 39,
         "INVIS" : 0,
         "INVULNERABILITY" : 0,
         "KAMIKAZE" : 0,
         "MEDKIT" : 0,
         "MEGA_HEALTH" : 9,
         "OTHER_HOLDABLE" : 0,
         "OTHER_POWERUP" : 0,
         "PORTAL" : 0,
         "QUAD" : 0,
         "RED_ARMOR" : 8,
         "REGEN" : 0,
         "SCOUT" : 0,
         "TELEPORTER" : 0,
         "YELLOW_ARMOR" : 8
      },
      "PLAY_TIME" : 599,
      "QUIT" : 0,
      "RANK" : 1,
      "SCORE" : 21,
      "STEAM_ID" : "76561198020388219",
      "TIED_RANK" : 0,
      "WARMUP" : false,
      "WEAPONS" : {
         "BFG" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 0,
            "S" : 0,
            "T" : 0
         },
         "CHAINGUN" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 0,
            "S" : 0,
            "T" : 0
         },
         "GAUNTLET" : {
            "D" : 0,
            "DG" : 150,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 0,
            "S" : 0,
            "T" : 18
         },
         "GRENADE" : {
            "D" : 0,
            "DG" : 100,
            "DR" : 164,
            "H" : 1,
            "K" : 0,
            "P" : 6,
            "S" : 2,
            "T" : 2
         },
         "HMG" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 0,
            "S" : 0,
            "T" : 0
         },
         "LIGHTNING" : {
            "D" : 2,
            "DG" : 816,
            "DR" : 646,
            "H" : 138,
            "K" : 7,
            "P" : 15,
            "S" : 451,
            "T" : 40
         },
         "MACHINEGUN" : {
            "D" : 0,
            "DG" : 40,
            "DR" : 65,
            "H" : 8,
            "K" : 0,
            "P" : 0,
            "S" : 34,
            "T" : 61
         },
         "NAILGUN" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 0,
            "S" : 0,
            "T" : 0
         },
         "OTHER_WEAPON" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 0,
            "S" : 0,
            "T" : 0
         },
         "PLASMA" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 0,
            "S" : 0,
            "T" : 0
         },
         "PROXMINE" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 0,
            "S" : 0,
            "T" : 0
         },
         "RAILGUN" : {
            "D" : 0,
            "DG" : 1280,
            "DR" : 240,
            "H" : 16,
            "K" : 4,
            "P" : 8,
            "S" : 42,
            "T" : 141
         },
         "ROCKET" : {
            "D" : 5,
            "DG" : 2536,
            "DR" : 2174,
            "H" : 60,
            "K" : 7,
            "P" : 33,
            "S" : 196,
            "T" : 332
         },
         "SHOTGUN" : {
            "D" : 1,
            "DG" : 275,
            "DR" : 224,
            "H" : 59,
            "K" : 3,
            "P" : 7,
            "S" : 200,
            "T" : 23
         }
      },
      "WIN" : 1
   },
   "TYPE" : "PLAYER_STATS"
}
```

```json
{
   "DATA" : {
      "ABORTED" : false,
      "DAMAGE" : {
         "DEALT" : 3693,
         "TAKEN" : 4929
      },
      "DEATHS" : 21,
      "ITEM_TIMING" : {
         "GREEN_ARMOR" : 16326,
         "MEGA_HEALTH" : 2135,
         "RED_ARMOR" : 12296,
         "YELLOW_ARMOR" : 20904
      },
      "KILLS" : 8,
      "LOSE" : 1,
      "MATCH_GUID" : "b601bba3-dc5c-4cbd-9327-8e522c8f34bc",
      "MAX_STREAK" : 4,
      "MEDALS" : {
         "ACCURACY" : 0,
         "ASSISTS" : 0,
         "CAPTURES" : 0,
         "COMBOKILL" : 0,
         "DEFENDS" : 0,
         "EXCELLENT" : 0,
         "FIRSTFRAG" : 0,
         "HEADSHOT" : 0,
         "HUMILIATION" : 0,
         "IMPRESSIVE" : 1,
         "MIDAIR" : 0,
         "PERFECT" : 0,
         "PERFORATED" : 0,
         "QUADGOD" : 0,
         "RAMPAGE" : 0,
         "REVENGE" : 3
      },
      "MODEL" : "sarge",
      "NAME" : "garz",
      "PICKUPS" : {
         "AMMO" : 14,
         "ARMOR" : 0,
         "ARMOR_REGEN" : 0,
         "BATTLESUIT" : 0,
         "DOUBLER" : 0,
         "FLIGHT" : 0,
         "GREEN_ARMOR" : 13,
         "GUARD" : 0,
         "HASTE" : 0,
         "HEALTH" : 37,
         "INVIS" : 0,
         "INVULNERABILITY" : 0,
         "KAMIKAZE" : 0,
         "MEDKIT" : 0,
         "MEGA_HEALTH" : 7,
         "OTHER_HOLDABLE" : 0,
         "OTHER_POWERUP" : 0,
         "PORTAL" : 0,
         "QUAD" : 0,
         "RED_ARMOR" : 7,
         "REGEN" : 0,
         "SCOUT" : 0,
         "TELEPORTER" : 0,
         "YELLOW_ARMOR" : 6
      },
      "PLAY_TIME" : 599,
      "QUIT" : 0,
      "RANK" : 2,
      "SCORE" : 8,
      "STEAM_ID" : "76561198170654797",
      "TIED_RANK" : 0,
      "WARMUP" : false,
      "WEAPONS" : {
         "BFG" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 0,
            "S" : 0,
            "T" : 0
         },
         "CHAINGUN" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 0,
            "S" : 0,
            "T" : 0
         },
         "GAUNTLET" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 150,
            "H" : 0,
            "K" : 0,
            "P" : 0,
            "S" : 0,
            "T" : 0
         },
         "GRENADE" : {
            "D" : 0,
            "DG" : 164,
            "DR" : 100,
            "H" : 2,
            "K" : 0,
            "P" : 6,
            "S" : 15,
            "T" : 15
         },
         "HMG" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 0,
            "S" : 0,
            "T" : 0
         },
         "LIGHTNING" : {
            "D" : 7,
            "DG" : 660,
            "DR" : 806,
            "H" : 112,
            "K" : 2,
            "P" : 18,
            "S" : 444,
            "T" : 38
         },
         "MACHINEGUN" : {
            "D" : 0,
            "DG" : 65,
            "DR" : 40,
            "H" : 13,
            "K" : 0,
            "P" : 0,
            "S" : 72,
            "T" : 184
         },
         "NAILGUN" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 0,
            "S" : 0,
            "T" : 0
         },
         "OTHER_WEAPON" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 0,
            "S" : 0,
            "T" : 0
         },
         "PLASMA" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 0,
            "S" : 0,
            "T" : 0
         },
         "PROXMINE" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 0,
            "S" : 0,
            "T" : 0
         },
         "RAILGUN" : {
            "D" : 4,
            "DG" : 240,
            "DR" : 1137,
            "H" : 3,
            "K" : 0,
            "P" : 7,
            "S" : 6,
            "T" : 22
         },
         "ROCKET" : {
            "D" : 7,
            "DG" : 2339,
            "DR" : 2361,
            "H" : 52,
            "K" : 5,
            "P" : 33,
            "S" : 190,
            "T" : 318
         },
         "SHOTGUN" : {
            "D" : 3,
            "DG" : 225,
            "DR" : 285,
            "H" : 45,
            "K" : 1,
            "P" : 5,
            "S" : 240,
            "T" : 38
         }
      },
      "WIN" : 0
   },
   "TYPE" : "PLAYER_STATS"
}
```

```json
{
   "DATA" : {
      "ABORTED" : false,
      "CAPTURE_LIMIT" : 8,
      "EXIT_MSG" : "Timelimit hit.",
      "FACTORY" : "stdduel",
      "FACTORY_TITLE" : "Standard Duel",
      "FIRST_SCORER" : "carrik",
      "FRAG_LIMIT" : 0,
      "GAME_LENGTH" : 600,
      "GAME_TYPE" : "DUEL",
      "INFECTED" : 0,
      "INSTAGIB" : 0,
      "LAST_LEAD_CHANGE_TIME" : 21500,
      "LAST_SCORER" : "carrik",
      "LAST_TEAMSCORER" : "none",
      "MAP" : "aerowalk",
      "MATCH_GUID" : "b601bba3-dc5c-4cbd-9327-8e522c8f34bc",
      "MERCY_LIMIT" : 0,
      "QUADHOG" : 0,
      "RESTARTED" : 0,
      "ROUND_LIMIT" : 10,
      "SCORE_LIMIT" : 150,
      "SERVER_TITLE" : "QL Fight Club - Fresh Maps",
      "TIME_LIMIT" : 10,
      "TRAINING" : 0,
      "TSCORE0" : 0,
      "TSCORE1" : 0
   },
   "TYPE" : "MATCH_REPORT"
}
```

### A player quits

```json
{
   "DATA" : {
      "ABORTED" : false,
      "DAMAGE" : {
         "DEALT" : 1868,
         "TAKEN" : 3081
      },
      "DEATHS" : 16,
      "ITEM_TIMING" : {
         "MEGA_HEALTH" : 6425,
         "RED_ARMOR" : 9137,
         "YELLOW_ARMOR" : 8930
      },
      "KILLS" : 3,
      "LOSE" : 0,
      "MATCH_GUID" : "57a11376-8517-4485-894e-42e4ab7a5cf3",
      "MAX_STREAK" : 1,
      "MEDALS" : {
         "ACCURACY" : 0,
         "ASSISTS" : 0,
         "CAPTURES" : 0,
         "COMBOKILL" : 0,
         "DEFENDS" : 0,
         "EXCELLENT" : 0,
         "FIRSTFRAG" : 0,
         "HEADSHOT" : 0,
         "HUMILIATION" : 0,
         "IMPRESSIVE" : 0,
         "MIDAIR" : 0,
         "PERFECT" : 0,
         "PERFORATED" : 0,
         "QUADGOD" : 0,
         "RAMPAGE" : 0,
         "REVENGE" : 1
      },
      "MODEL" : "sarge",
      "NAME" : "garz",
      "PICKUPS" : {
         "AMMO" : 14,
         "ARMOR" : 46,
         "ARMOR_REGEN" : 0,
         "BATTLESUIT" : 0,
         "DOUBLER" : 0,
         "FLIGHT" : 0,
         "GREEN_ARMOR" : 0,
         "GUARD" : 0,
         "HASTE" : 0,
         "HEALTH" : 15,
         "INVIS" : 0,
         "INVULNERABILITY" : 0,
         "KAMIKAZE" : 0,
         "MEDKIT" : 0,
         "MEGA_HEALTH" : 4,
         "OTHER_HOLDABLE" : 0,
         "OTHER_POWERUP" : 0,
         "PORTAL" : 0,
         "QUAD" : 0,
         "RED_ARMOR" : 4,
         "REGEN" : 0,
         "SCOUT" : 0,
         "TELEPORTER" : 0,
         "YELLOW_ARMOR" : 5
      },
      "PLAY_TIME" : 439,
      "QUIT" : 1,
      "RANK" : -1,
      "SCORE" : 2,
      "STEAM_ID" : "76561198170654797",
      "TIED_RANK" : 1,
      "WARMUP" : false,
      "WEAPONS" : {
         "BFG" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 0,
            "S" : 0,
            "T" : 0
         },
         "CHAINGUN" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 0,
            "S" : 0,
            "T" : 0
         },
         "GAUNTLET" : {
            "D" : 1,
            "DG" : 0,
            "DR" : 147,
            "H" : 0,
            "K" : 0,
            "P" : 0,
            "S" : 0,
            "T" : 0
         },
         "GRENADE" : {
            "D" : 0,
            "DG" : 183,
            "DR" : 0,
            "H" : 3,
            "K" : 1,
            "P" : 9,
            "S" : 34,
            "T" : 37
         },
         "HMG" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 0,
            "S" : 0,
            "T" : 0
         },
         "LIGHTNING" : {
            "D" : 3,
            "DG" : 558,
            "DR" : 470,
            "H" : 93,
            "K" : 1,
            "P" : 12,
            "S" : 423,
            "T" : 52
         },
         "MACHINEGUN" : {
            "D" : 0,
            "DG" : 70,
            "DR" : 0,
            "H" : 14,
            "K" : 0,
            "P" : 0,
            "S" : 105,
            "T" : 326
         },
         "NAILGUN" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 0,
            "S" : 0,
            "T" : 0
         },
         "OTHER_WEAPON" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 0,
            "S" : 0,
            "T" : 0
         },
         "PLASMA" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 4,
            "S" : 0,
            "T" : 0
         },
         "PROXMINE" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 0,
            "S" : 0,
            "T" : 0
         },
         "RAILGUN" : {
            "D" : 1,
            "DG" : 0,
            "DR" : 146,
            "H" : 0,
            "K" : 0,
            "P" : 9,
            "S" : 2,
            "T" : 9
         },
         "ROCKET" : {
            "D" : 10,
            "DG" : 757,
            "DR" : 2275,
            "H" : 18,
            "K" : 0,
            "P" : 11,
            "S" : 56,
            "T" : 164
         },
         "SHOTGUN" : {
            "D" : 0,
            "DG" : 300,
            "DR" : 0,
            "H" : 60,
            "K" : 1,
            "P" : 8,
            "S" : 160,
            "T" : 47
         }
      },
      "WIN" : 0
   },
   "TYPE" : "PLAYER_STATS"
}
```

```json
{
   "DATA" : {
      "ABORTED" : false,
      "DAMAGE" : {
         "DEALT" : 3405,
         "TAKEN" : 2004
      },
      "DEATHS" : 3,
      "ITEM_TIMING" : {
         "MEGA_HEALTH" : 5757,
         "RED_ARMOR" : 6588,
         "YELLOW_ARMOR" : 8326
      },
      "KILLS" : 15,
      "LOSE" : 0,
      "MATCH_GUID" : "57a11376-8517-4485-894e-42e4ab7a5cf3",
      "MAX_STREAK" : 10,
      "MEDALS" : {
         "ACCURACY" : 0,
         "ASSISTS" : 0,
         "CAPTURES" : 0,
         "COMBOKILL" : 1,
         "DEFENDS" : 0,
         "EXCELLENT" : 0,
         "FIRSTFRAG" : 1,
         "HEADSHOT" : 0,
         "HUMILIATION" : 1,
         "IMPRESSIVE" : 0,
         "MIDAIR" : 0,
         "PERFECT" : 0,
         "PERFORATED" : 0,
         "QUADGOD" : 0,
         "RAMPAGE" : 0,
         "REVENGE" : 0
      },
      "MODEL" : "ranger/red",
      "NAME" : "carrik",
      "PICKUPS" : {
         "AMMO" : 13,
         "ARMOR" : 14,
         "ARMOR_REGEN" : 0,
         "BATTLESUIT" : 0,
         "DOUBLER" : 0,
         "FLIGHT" : 0,
         "GREEN_ARMOR" : 0,
         "GUARD" : 0,
         "HASTE" : 0,
         "HEALTH" : 9,
         "INVIS" : 0,
         "INVULNERABILITY" : 0,
         "KAMIKAZE" : 0,
         "MEDKIT" : 0,
         "MEGA_HEALTH" : 7,
         "OTHER_HOLDABLE" : 0,
         "OTHER_POWERUP" : 0,
         "PORTAL" : 0,
         "QUAD" : 0,
         "RED_ARMOR" : 9,
         "REGEN" : 0,
         "SCOUT" : 0,
         "TELEPORTER" : 0,
         "YELLOW_ARMOR" : 19
      },
      "PLAY_TIME" : 439,
      "QUIT" : 0,
      "RANK" : 1,
      "SCORE" : 15,
      "STEAM_ID" : "76561198020388219",
      "TIED_RANK" : 0,
      "WARMUP" : false,
      "WEAPONS" : {
         "BFG" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 0,
            "S" : 0,
            "T" : 0
         },
         "CHAINGUN" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 0,
            "S" : 0,
            "T" : 0
         },
         "GAUNTLET" : {
            "D" : 0,
            "DG" : 150,
            "DR" : 0,
            "H" : 0,
            "K" : 1,
            "P" : 0,
            "S" : 0,
            "T" : 7
         },
         "GRENADE" : {
            "D" : 1,
            "DG" : 0,
            "DR" : 211,
            "H" : 0,
            "K" : 0,
            "P" : 4,
            "S" : 5,
            "T" : 6
         },
         "HMG" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 0,
            "S" : 0,
            "T" : 0
         },
         "LIGHTNING" : {
            "D" : 1,
            "DG" : 480,
            "DR" : 558,
            "H" : 80,
            "K" : 3,
            "P" : 5,
            "S" : 307,
            "T" : 31
         },
         "MACHINEGUN" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 70,
            "H" : 0,
            "K" : 0,
            "P" : 0,
            "S" : 0,
            "T" : 216
         },
         "NAILGUN" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 0,
            "S" : 0,
            "T" : 0
         },
         "OTHER_WEAPON" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 0,
            "S" : 0,
            "T" : 0
         },
         "PLASMA" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 5,
            "S" : 2,
            "T" : 3
         },
         "PROXMINE" : {
            "D" : 0,
            "DG" : 0,
            "DR" : 0,
            "H" : 0,
            "K" : 0,
            "P" : 0,
            "S" : 0,
            "T" : 0
         },
         "RAILGUN" : {
            "D" : 0,
            "DG" : 160,
            "DR" : 0,
            "H" : 2,
            "K" : 1,
            "P" : 6,
            "S" : 7,
            "T" : 35
         },
         "ROCKET" : {
            "D" : 0,
            "DG" : 2615,
            "DR" : 757,
            "H" : 45,
            "K" : 10,
            "P" : 11,
            "S" : 117,
            "T" : 340
         },
         "SHOTGUN" : {
            "D" : 1,
            "DG" : 0,
            "DR" : 298,
            "H" : 0,
            "K" : 0,
            "P" : 4,
            "S" : 0,
            "T" : 0
         }
      },
      "WIN" : 1
   },
   "TYPE" : "PLAYER_STATS"
}
```

```json
{
   "DATA" : {
      "ABORTED" : false,
      "CAPTURE_LIMIT" : 8,
      "EXIT_MSG" : "Players have forfeited.",
      "FACTORY" : "stdduel",
      "FACTORY_TITLE" : "Standard Duel",
      "FIRST_SCORER" : "carrik",
      "FRAG_LIMIT" : 0,
      "GAME_LENGTH" : 440,
      "GAME_TYPE" : "DUEL",
      "INFECTED" : 0,
      "INSTAGIB" : 0,
      "LAST_LEAD_CHANGE_TIME" : 31550,
      "LAST_SCORER" : "carrik",
      "LAST_TEAMSCORER" : "none",
      "MAP" : "bloodrun",
      "MATCH_GUID" : "57a11376-8517-4485-894e-42e4ab7a5cf3",
      "MERCY_LIMIT" : 0,
      "QUADHOG" : 0,
      "RESTARTED" : 0,
      "ROUND_LIMIT" : 10,
      "SCORE_LIMIT" : 150,
      "SERVER_TITLE" : "QL Fight Club - Fresh Maps",
      "TIME_LIMIT" : 10,
      "TRAINING" : 0,
      "TSCORE0" : 0,
      "TSCORE1" : 0
   },
   "TYPE" : "MATCH_REPORT"
}
```
