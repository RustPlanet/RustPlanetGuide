# Mod Development Introduction

RustPlanet provides a powerful modding system that allows developers to freely extend and modify game content.

## Mod System Overview

### Mod Types

RustPlanet's modding system supports modifying game content, including but not limited to:

1. Content
   - New units
   - New buildings
   - New terrain
   - New technologies

2. Gameplay
   - New game modes
   - New campaigns
   - New AI behaviors
   - Balance modifications

3. Visual/Audio
   - New models
   - New textures
   - New sound effects
   - New visual effects

4. UI/UX
   - Interface modifications
   - HUD customization
   - New control schemes

## Creating Your First Mod

Mod packages are in `zip` format without any custom suffix

### 1. Basic Structure

To standardize mod development, we define the following mod folder structure:

```
my_mod/
├── mod.toml         # Mod configuration file
├── assets/          # Asset files
│   ├── textures/    # Texture files
│   ├── sounds/      # Audio files
│   └── effects/     # Effect files
├── scripts/         # Script files
│   ├── units/       # Unit definitions
│   ├── ai/          # AI behaviors
│   └── gui/         # UI scripts
└── localization/    # Localization files
    ├── en/          # English
    └── zh/          # Chinese
```

### 2. Mod Configuration

`mod.toml` example:

```toml
id = "my_awesome_mod"
name = "my_awesome_mod"
version = "1.0.0"
author = "Your Name"
description = "this is my awesome mod"
minGameVersion = "1.0.0"
[dependencies]
base_game = "^1.0.0"

```

### 3. Creating Units
RustPlanet's unit is a js script containing unit properties and behaviors.

Unit definition example:

```JavaScript
// scripts/units/tank.js

let attackComponent = {
   attackDamage: 40,
   attackRange: 7
};
let coreComponent = {
   name: "heavy_tank",
   maxHp: 500,
   speed: 0.7,
   energy: 100
};
let moveComponent = {
   type: "LAND",
   movementSpeed: 0.7,
   acceleration: 1.5,
   deceleration: 1.2
};
let actionComponent = {
   onDeath: function() {
       playAnimation("death");
   },
   onAttack: function(target) {
       playAnimation("attack");
   },
   onMove: function(destination) {
      playAnimation("move");
   },
   onIdle: function() {
      playAnimation("idle");
   }
};

export const unit = {
   core: coreComponent,
   attack: attackComponent,
   move: moveComponent,
   action: actionComponent
};

```

### 4. Packaging the Mod