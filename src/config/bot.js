
// ==========================================
// QUEEN LORINA BOT CONFIGURATION FILE
// ==========================================

module.exports = {
  // ----------------------------------------
  // 1. BOT PRESENCE & STATUS
  // ----------------------------------------
  presence: {
    status: "dnd", // Options: "online", "idle", "dnd", "invisible"
    activities: [
      {
        name: "Custom Status",
        state: "👑 Her Royal Majesty • /slots, /fight, /profile, or /craft for Souls",
        type: 4, // 4 = Custom Status
      },
    ],
  },

  // ----------------------------------------
  // 2. EMBEDS & COLOR BRANDING
  // ----------------------------------------
  embeds: {
    colors: {
      primary: "#800020",   // Royal Crimson / Velvet Red
      secondary: "#1A0006", // Midnight Velvet Obsidian
      gold: "#FFD700",      // Legendary / Royal Gold
      mythic: "#A020F0",    // Mythic Void Purple
    },
    footer: {
      text: "👑 Lorina's Royal Domain • Pledging absolute loyalty to Her Majesty",
      icon: null,
    },
  },

  // ----------------------------------------
  // 3. CORE ECONOMY & REBIRTH MECHANICS
  // ----------------------------------------
  economy: {
    currency: {
      name: "Soul",
      namePlural: "Souls",
      symbol: "🩸", // Crimson Soul Icon
    },
    startingBalance: 1000,
    
    // Command: /daily
    daily: {
      enabled: true,
      cooldown: 86400, // 24 hours
      rewardMin: 5000,
      rewardMax: 15000,
      streakMultiplier: 0.10, // +10% bonus Souls per consecutive daily claim (up to 7 days)
    },

    // Command: /weekly
    weekly: {
      enabled: true,
      cooldown: 604800, // 7 days
      rewardMin: 50000,
      rewardMax: 150000,
    },

    // Command: /steal (DISABLED - Prevent player frustration)
    steal: {
      enabled: false,
      cooldown: 0,
      successRate: 0.0,
      maxPercentSteal: 0.0,
      failFinePercent: 0.0,
    },

    // Command: /donate
    donate: {
      enabled: true,
      cooldown: 900, // 15-minute cooldown
      footerText: "🩸 Queen Lorina's Vault • A tribute between subjects. Next offering in 15 minutes.",
    },

    // Command: /rebirth
    rebirth: {
      enabled: true,
      description: "Sacrifice your accumulated Souls to ascend in Her Majesty's favor.",
      baseCost: 1000000,   // Rebirth 1 = 1,000,000 Souls
      costMultiplier: 10,  // Multiplies by 10x per level
      keepInventory: true,
      rebirthAtkBonusPerLevel: 0.15, // +15% ATK boost per rebirth level
      rebirthDefBonusPerLevel: 0.15, // +15% DEF boost per rebirth level
      unlocksPerLevel: {
        1: "Unlocked /shop (Rebirth items) & Jabberwock Hunt",
        3: "Unlocked /craft (Blacksmithing)",
        5: "Unlocked /transmog & Outer God Raids",
        8: "Unlocked Crown of the Red King",
      },
    },

    // Command: /work
    work: {
      enabled: true,
      cooldown: 180, // 3-minute cooldown
      payoutMin: 100,
      payoutMax: 500,
      jobs: [
        "🧹 Cleaning the Royal Throne Room",
        "🫖 Brewing Black Tea for Queen Lorina",
        "🪓 Executioner's Guard Duty",
        "📜 Transcribing Her Majesty's Decrees",
        "🥀 Tending to the Crimson Rose Gardens",
        "🗝️ Polishing the Keys to the Library of Babel",
      ],
    },

    // Command: /crime
    crime: {
      enabled: true,
      cooldown: 600, // 10 minutes
      successRate: 0.60,
      payoutMin: 1000,
      payoutMax: 5000,
      fineMin: 500,
      fineMax: 2000,
      scenarios: [
        { success: "You raided a sleeping Jabberwock's hoard!", fail: "The Jabberwock woke up and scorched your wallet!" },
        { success: "You stole raw gemstones from the Walrus & Carpenter!", fail: "The Oyster guards beat you up!" },
        { success: "You pickpocketed a Red Sentinel in the court!", fail: "Queen Lorina fined you on the spot!" },
      ],
    },

    // Command: /money-reset
    moneyReset: {
      creatorOnly: true,
    },
  },

  // ----------------------------------------
  // 4. AUTHORITARIAN QUEEN LORINA DIALOGUE
  // ----------------------------------------
  messages: {
    noPermission: "🩸 *Off with your head!* You lack the royal lineage or authority to execute this command.",
    cooldownActive: "⏳ Silence, peasant! Restraint is required in Her Majesty's presence. Wait **{time}** before petitioning court again.",
    errorOccurred: "🥀 A disturbance has upset the Court of Hearts. Her Majesty demands this anomaly be rectified immediately.",
    missingPermissions: "👑 Queen Lorina demands appropriate server privileges to enforce her absolute rule.",
    commandDisabled: "📜 This command has been forbidden and sealed by royal decree.",
    maintenanceMode: "🍷 Her Majesty is holding private audience in the inner sanctum. The bot is undergoing royal maintenance.",
  },

  // ----------------------------------------
  // 5. EXTENDED GAMBLING SUITE
  // ----------------------------------------
  gambling: {
    // Command: /bet (High-Low)
    bet: {
      enabled: true,
      description: "Wager your collected Souls in high-low card draws!",
      highLow: {
        enabled: true,
        startingMultiplier: 1.0,
        multiplierIncrement: 0.3,
        buttons: {
          higherLabel: "📈 Higher",
          lowerLabel: "📉 Lower",
          cashoutLabel: "💰 Cash Out Souls",
        },
      },
    },

    // Command: /blackjack
    blackjack: {
      enabled: true,
      description: "Play classic 21 against Queen Lorina's Royal Dealer.",
      payoutMultiplier: 2.0,
      blackjackPayoutMultiplier: 2.5,
    },

    // Command: /slots
    slots: {
      enabled: true,
      description: "Spin the Royal Casino Slot Machine!",
      symbols: ["👑", "🩸", "🗡️", "🍷", "🪓", "💀"],
      payouts: {
        threeCrowns: 50,  // 3x 👑 = 50x Wager
        threeSouls: 20,   // 3x 🩸 = 20x Wager
        threeBlades: 10,  // 3x 🗡️ = 10x Wager
        anyThreeMatch: 5, // 3x Any = 5x Wager
        anyTwoMatch: 2,   // 2x Any = 2x Wager
      },
    },

    // Command: /roulette
    roulette: {
      enabled: true,
      description: "Spin the Royal Crimson Roulette Wheel!",
      payouts: {
        singleNumber: 36, // Exact number (0-36)
        color: 2,         // Red or Black
        evenOdd: 2,       // Even or Odd
        highLow: 2,       // 1-18 or 19-36
      },
    },

    // Command: /coinflip
    coinflip: {
      enabled: true,
      description: "Flip a royal golden coin (Heads or Tails).",
      winMultiplier: 1.95, // 1.95x payout on win
    },

    // Command: /dice
    dice: {
      enabled: true,
      description: "Roll dice against the royal court high roller.",
      winMultiplier: 2.0,
    },

    // Command: /wheel (Wheel of Fortune / Fortune Spin)
    wheel: {
      enabled: true,
      description: "Spin Queen Lorina's Wheel of Fortune for massive multipliers or sudden penalties!",
      cooldown: 1800, // 30 minutes
      segments: [
        { label: "💀 Beheaded (Lose 50% Bet)", multiplier: -0.5 },
        { label: "🥀 Rotten Apple (0x)", multiplier: 0.0 },
        { label: "🍵 Tea Time (1.5x)", multiplier: 1.5 },
        { label: "🗡️ Royal Guard (2x)", multiplier: 2.0 },
        { label: "🍷 Court Feast (5x)", multiplier: 5.0 },
        { label: "👑 Queen's Favor Jackpot (20x)", multiplier: 20.0 },
      ],
    },

    // Command: /jackpot (Server-Wide Community Pot)
    jackpot: {
      enabled: true,
      description: "Contribute Souls to the server-wide jackpot pool. One lucky subject wins it all every 24h!",
      ticketCost: 5000,
      maxTicketsPerUser: 100,
      drawIntervalHours: 24,
    },
  },

  // ----------------------------------------
  // 6. EXPANDED EQUIPMENT, INVENTORY & CRAFTING
  // ----------------------------------------
  inventorySystem: {
    // Advanced Inventory Capacity & Loadout Slots
    maxDefaultCapacity: 20, // Max item slots before expansion
    expansionCostBase: 50000, // Souls cost to upgrade capacity (+5 slots)
    
    // Command: /equip & /unequip
    loadoutSlots: {
      weapon: { name: "⚔️ Main Weapon", allowedType: "weapon" },
      offhand: { name: "🛡️ Off-Hand / Shield", allowedType: "shield" },
      armor: { name: "👗 Body Armor", allowedType: "armor" },
      accessory: { name: "💍 Royal Ring / Charm", allowedType: "accessory" },
      godRelic: { name: "👑 God Artifact", allowedType: "god_artifact" },
    },

    // Command: /transmog (Cosmetic Skins without altering stats)
    transmog: {
      enabled: true,
      description: "Apply the visual appearance of any owned item onto your current equipped gear.",
      costPerTransmog: 10000,
    },

    // Command: /craft (Blacksmithing / Alchemy Recipe System)
    crafting: {
      enabled: true,
      description: "Combine monster materials and raw items to forge elite weapons and artifacts.",
      recipes: [
        {
          resultItemId: "vorpal_blade",
          name: "🗡️ Vorpal Sword",
          requiredMaterials: [
            { itemId: "andor_sword", count: 1 },
            { itemId: "jabberwock_scale_mat", count: 3 },
          ],
          craftingFee: 50000,
        },
        {
          id: "elixir_of_madness",
          resultItemId: "elixir_of_madness",
          name: "🧪 Elixir of Cosmic Madness",
          requiredMaterials: [
            { itemId: "senka_leaf", count: 5 },
            { itemId: "cthulhu_essence", count: 1 },
          ],
          craftingFee: 250000,
        },
      ],
    },
  },

  // ----------------------------------------
  // 7. ACCURATE BLACK SOULS 1 & 2 ITEM SHOP
  // ----------------------------------------
  items: {
    // Command: /consume
    consume: {
      enabled: true,
      description: "Consume a relic, item, or potion from your inventory to gain Her Majesty's blessing.",
    },

    // Command: /shop (Requires Rebirth 2+)
    shop: {
      enabled: true,
      title: "🏰 Queen Lorina's Royal Treasury",
      description: "*'Offer your Souls, subject, and feast your eyes upon the finest artifacts from the fairytale abyss...'*",
      requiredRebirthLevel: 2,
      items: [
        // ==================================
        // REBIRTH 0: COMMON FAIRYTALE RELICS
        // ==================================
        {
          id: "herb_flask",
          name: "🧪 Herb Flask",
          price: 2500,
          type: "consumable",
          buff: { hpRestore: 100 },
          requiredRebirth: 0,
          description: "Restores 50% HP in battle. Bitter healing alchemy distilled in Vinheim.",
        },
        {
          id: "dung_pie",
          name: "💩 Dung Pie",
          price: 1500,
          type: "consumable",
          buff: { poisonEnemy: true, poisonDamagePerTurn: 50 },
          requiredRebirth: 0,
          description: "Foul thrown projectile that poisons target enemies for 50 dmg/turn.",
        },
        {
          id: "andor_sword",
          name: "⚔️ Knight's Sword of Andor",
          price: 25000,
          type: "weapon",
          stats: { atk: 25, def: 10 },
          requiredRebirth: 0,
          description: "Standard issue blade of Andor's royal sentinels. Grants +25 ATK and +10 DEF.",
        },
        {
          id: "senka_leaf",
          name: "🍃 Senka Leaf",
          price: 10000,
          type: "consumable",
          buff: { mpRestore: 50 },
          requiredRebirth: 0,
          description: "Fragrant leaf that calms the mind and restores 50 MP.",
        },

        // ==================================
        // REBIRTH 1-2: MID-TIER BLACK SOULS ARTIFACTS
        // ==================================
        {
          id: "erins_remedy",
          name: "🍄 Erin's Remedy",
          price: 75000,
          type: "consumable",
          buff: { fullHeal: true, atkBoost: 1.2, durationTurns: 3 },
          requiredRebirth: 1,
          description: "Secret concoction crafted by Softy Erin. Fully restores HP and boosts ATK by 20% for 3 turns.",
        },
        {
          id: "vorpal_blade",
          name: "🗡️ Vorpal Sword",
          price: 250000,
          type: "weapon",
          stats: { atk: 65, critRate: 0.15 },
          requiredRebirth: 2,
          description: "Iconic keen blade from Wonderland. *Snicker-snack!* Grants +65 ATK and +15% Crit Chance.",
        },
        {
          id: "alices_red_dress",
          name: "👗 Alice's Dress",
          price: 500000,
          type: "armor",
          stats: { maxHp: 200, def: 45 },
          requiredRebirth: 2,
          description: "Crimson-stained dress worn by Alice. Grants +200 Max HP and +45 DEF.",
        },
        {
          id: "cheshire_lantern",
          name: "🏮 Cheshire Cat's Lantern",
          price: 350000,
          type: "accessory",
          stats: { evasion: 0.15, magicAtk: 40 },
          requiredRebirth: 2,
          description: "Mystical light carried by the grinning Cheshire Cat. Grants +15% Evasion and +40 Magic Power.",
        },

        // ==================================
        // REBIRTH 3-4: HIGH-TIER BLACK SOULS 2 WEAPONS & ARMOR
        // ==================================
        {
          id: "jabberwock_scale",
          name: "🐉 Jabberwock Scale Armor",
          price: 1500000,
          type: "armor",
          stats: { def: 110, damageReduction: 0.15 },
          requiredRebirth: 3,
          description: "Forged from the hide of the Jabberwock. Grants +110 DEF and 15% Damage Reduction.",
        },
        {
          id: "red_hood_cleaver",
          name: "🪓 Red Hood's Cleaver",
          price: 3000000,
          type: "weapon",
          stats: { atk: 140, lifesteal: 0.12 },
          requiredRebirth: 4,
          description: "Heavy bloodstained axe of Red Hood. Grants +140 ATK and heals 12% of damage dealt.",
        },
        {
          id: "humpty_dumpty_shield",
          name: "🛡️ Humpty Dumpty's Greatshield",
          price: 2500000,
          type: "shield",
          stats: { def: 180, reflectDamage: 0.10 },
          requiredRebirth: 4,
          description: "Massive eggshell barrier. Grants +180 DEF and reflects 10% incoming damage.",
        },

        // ==================================
        // REBIRTH 5-6: TOP TIER OUTER GOD RELICS
        // ==================================
        {
          id: "black_fairy_ring",
          name: "💍 Band of the Black Fairy",
          price: 15000000,
          type: "accessory",
          stats: { atk: 220, def: 140, critRate: 0.25 },
          requiredRebirth: 5,
          description: "Twisted ring of the Black Fairy. Grants +220 ATK, +140 DEF, and +25% Crit Rate.",
        },
        {
          id: "bandersnatch_claws",
          name: "🐾 Claws of the Bandersnatch",
          price: 25000000,
          type: "weapon",
          stats: { atk: 310, doubleAttackChance: 0.30 },
          requiredRebirth: 6,
          description: "Savage claws harvested from the Bandersnatch. Grants +310 ATK and a 30% double attack chance.",
        },
        {
          id: "book_of_nod",
          name: "📖 Grimoire of Nod",
          price: 50000000,
          type: "artifact",
          stats: { magicAtk: 450, maxMp: 500 },
          requiredRebirth: 6,
          description: "Forbidden tome containing dark abyssal incantations. Grants +450 Magic ATK.",
        },

        // ==================================
        // REBIRTH 8+: GOD TIER / MOST OP ITEM
        // ==================================
        {
          id: "crown_of_the_red_king",
          name: "👑 Crown of the Red King (Cthulhu's Madness)",
          pricePercentage: 1.0,
          minimumPrice: 100000000000000,
          type: "god_artifact",
          stats: { maxHp: 5000, atk: 1200, def: 800, lifesteal: 0.25, critRate: 0.50 },
          requiredRebirth: 8,
          description: "★ THE ULTIMATE GOD ITEM ★ The supreme crown of absolute madness and cosmic dominion. Costs 100% of your Souls (minimum 100 Trillion). Grants +5000 HP, +1200 ATK, +800 DEF, 25% Lifesteal, and +50% Crit Chance.",
        },
      ],
    },

    // Command: /gacha (Relic Lootbox / Gacha System)
    gacha: {
      enabled: true,
      description: "Pull a mystery fairytale relic crate for Souls! High chance for rare equipment.",
      costPerPull: 25000,
      rates: {
        common: 0.60,    // 60% Common Consumables / Gear
        rare: 0.30,      // 30% Rare Weapons / Armor
        epic: 0.08,      // 8% Epic Outer Relics
        legendary: 0.02, // 2% Legendary / God Items
      },
    },
  },

  // ----------------------------------------
  // 8. ADVANCED PROFILE & CHARACTER CARDS
  // ----------------------------------------
  profiles: {
    // Command: /profile (Redesigned Rich Embed Showcase)
    profileEmbed: {
      enabled: true,
      description: "Display a subject's complete royal file, equipped gear, titles, and stats.",
      customizationOptions: {
        titles: [
          { id: "peasant", name: "🧱 Lowly Peasant", condition: "Default" },
          { id: "slayer", name: "🗡️ Abyssal Beast Slayer", condition: "Defeat 50 Monsters" },
          { id: "high_roller", name: "🍷 Court High Roller", condition: "Win 1,000,000 Souls in Gambling" },
          { id: "hand_of_queen", name: "👑 Hand of Her Majesty", condition: "Reach Rebirth Level 5" },
          { id: "outer_god", name: "🐙 Cosmic Sovereign", condition: "Own Crown of the Red King" },
        ],
        badgeShowcase: true, // Shows badges earned through achievements
        customBioEnabled: true, // Command: /set-bio <text>
      },
    },

    // Command: /market (Player-to-Player Auction House / Trading)
    marketplace: {
      enabled: true,
      description: "Trade or sell rare items to other server subjects for Souls.",
      taxRate: 0.05, // 5% royal court tax on successful marketplace sales
      maxActiveListingsPerUser: 5,
    },
  },

  // ----------------------------------------
  // 9. PVE COMBAT & QUESTING SYSTEM
  // ----------------------------------------
  combat: {
    // Command: /fight
    pve: {
      enabled: true,
      description: "Enter the abyss and fight nightmare monsters from Black Souls 1 & 2!",
      playerBaseStats: {
        hp: 200,
        atk: 20,
        def: 5,
      },
      monsters: [
        {
          id: "bandersnatch",
          name: "🐺 Frantic Bandersnatch",
          hp: 150,
          atk: 18,
          rewardCoins: 1500,
          rewardXp: 50,
          location: "Gloomdross Forest",
          dropMaterials: [{ id: "bandersnatch_claw_mat", chance: 0.40 }],
        },
        {
          id: "jabberwock",
          name: "🐉 Jabberwock",
          hp: 500,
          atk: 45,
          rewardCoins: 12000,
          rewardXp: 250,
          location: "Library of Babel",
          minRebirthRequired: 1,
          dropMaterials: [{ id: "jabberwock_scale_mat", chance: 0.25 }],
        },
        {
          id: "queen_lorina",
          name: "👑 Queen Lorina, Sovereign of Hearts",
          hp: 1200,
          atk: 85,
          rewardCoins: 100000,
          rewardXp: 1000,
          location: "Heart Castle Royal Court",
          minRebirthRequired: 3,
        },
        {
          id: "cthulhu_god",
          name: "🐙 Cthulhu, The Star-Spawned Outer God",
          hp: 5000,
          atk: 250,
          rewardCoins: 1000000,
          rewardXp: 5000,
          location: "The Depths of R'lyeh",
          minRebirthRequired: 5,
          dropMaterials: [{ id: "cthulhu_essence", chance: 0.10 }],
        },
      ],
      buttons: {
        attackLabel: "⚔️ Strike",
        defendLabel: "🛡️ Guard",
        itemLabel: "🎒 Use Relic",
        fleeLabel: "🏃 Flee Court",
      },
    },

    // Command: /quest
    quest: {
      enabled: true,
      description: "Send your character on passive abyssal expeditions for Souls and loot.",
      cooldown: 14400, // 4 hours
      rewardMin: 15000,
      rewardMax: 60000,
      rareDropChance: 0.10,
    },

    // Command: /boss-raid (Server World Boss Event)
    bossRaid: {
      enabled: true,
      description: "Join forces with all server subjects to defeat colossal World Bosses for massive Soul payouts!",
      bosses: [
        {
          name: "🐉 Ancient Jabberwock World Boss",
          totalHp: 1000000,
          rewardPool: 50000000, // 50 Million Souls distributed proportionally by damage
        },
      ],
    },

    // --------------------------------------
    // PVP TURN-BASED DUEL SYSTEM (/duel)
    // --------------------------------------
    // Command: /duel @player [wager]
    pvp: {
      enabled: true,
      description: "Challenge another peasant to a turn-based duel for Souls in front of the throne!",
      turnTimeoutSeconds: 45,
      allowWagers: true,
      maxWager: 10000000,
      buttons: {
        attackLabel: "⚔️ Attack",
        defendLabel: "🛡️ Defend",
        specialLabel: "⚡ Royal Skill",
        surrenderLabel: "🏳️ Yield",
      },
    },
  },

  // ----------------------------------------
  // 10. PROFILE, STATS & LEADERBOARDS
  // ----------------------------------------
  stats: {
    // Command: /my-stats
    myStats: {
      enabled: true,
      description: "View your standing, Souls balance, and combat record in Her Majesty's court.",
    },

    // Command: /inventory
    inventory: {
      enabled: true,
      description: "Check your current items, weapons, and equipped gear.",
    },

    // Command: /leaderboard
    leaderboard: {
      enabled: true,
      displayCount: 45,
      pages: 15,
    },

    // Command: /achievements
    achievements: {
      enabled: true,
      description: "Track your royal milestones, monster slays, and gambling wins for bonus rewards.",
    },
  },

  // ----------------------------------------
  // 11. SOCIAL & FAMILY INTERACTIONS
  // ----------------------------------------
  family: {
    enabled: true,
    add: { description: "Form a sworn alliance or lineage (requires confirmation)" },
    remove: { description: "Sever a sworn lineage" },
    interactions: { description: "Inspect sworn relationships of yourself or another subject" },
  },

  // ----------------------------------------
  // 12. ADMIN COMMANDS
  // ----------------------------------------
  admin: {
    // Command: /talk
    talk: {
      adminOnly: true,
      description: "[Admin] Speak directly through Her Majesty Queen Lorina in this channel.",
    },
  },
};
