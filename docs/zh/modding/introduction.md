# 模组开发入门

RustPlanet 提供了强大的模组系统，让开发者能够自由地扩展和修改游戏内容。

## 模组系统概述

### 模组类型

RustPlanet 的模组系统支持修改游戏内容，包括但不限于：

1. 内容
   - 新单位
   - 新建筑
   - 新地形
   - 新科技

2. 游戏玩法
   - 新游戏模式
   - 新战役
   - 新 AI 行为
   - 平衡性修改

3. 视觉/音频
   - 新模型
   - 新纹理
   - 新音效
   - 新特效

4. UI/UX
   - 界面修改
   - HUD 自定义
   - 新控制方式

## 创建第一个模组

模组包为`zip`格式，没有任何自定义后缀

### 1. 基础结构

为了规范模组开发，我们约定模组文件夹结构如下：

```
my_mod/
├── mod.toml         # 模组配置文件
├── assets/          # 资源文件
│   ├── textures/    # 纹理文件
│   ├── sounds/      # 音频文件
│   └── effects/     # 特效文件
├── scripts/         # 脚本文件
│   ├── units/       # 单位定义
│   ├── ai/          # AI 行为
│   └── gui/         # UI 脚本
└── localization/    # 本地化文件
    ├── en/          # 英文
    └── zh/          # 中文
```

### 2. 模组配置

`mod.toml` 示例：

```toml
id = "my_awesome_mod"
name = "my_awesome_mod"
version = "1.0.0"
author = "Your Name"
description = "this is my awesome mod"
minGameVersion ="1.0.0"
[dependencies]
base_game = "^1.0.0"

```

### 3. 创建单位
RustPlanet 的单位系统采用js+lua 的结构，每个单位都是一个toml 文件，包含单位的属性和行为。

单位属性示例：

```toml
[core]
id = "heavy_tank"
name = "heavy_tank"
armor = 15
speed = 0.7
attackDamage = 40
attackRange = 7
maxHp=500
energy=100

[movement]
type = "LAND"
movementSpeed = 0.7
acceleration = 1.5
deceleration = 1.2


```
对应的脚本文件:

```js
// scripts/units/heavy_tank.js

```