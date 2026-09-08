// ==========================================
// QUEEN LORINA BOT CONFIGURATION FILE
// ==========================================

const botConfig = {
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
      primary: "#800020", // Royal Crimson / Velvet Red
      secondary: "#1A0006", // Midnight Velvet Obsidian
      gold: "#FFD700", // Legendary / Royal Gold
      mythic: "#A020F0", // Mythic Void Purple
    },
    footer: {
      text: "👑 Lorina's Royal Domain • Pledging absolute loyalty to Her Majesty",
      icon: null,
    },
  },

  // ----------------------------------------
  // 3. CURRENCY & ECONOMY
  // ----------------------------------------
  economy: {
    currencySymbol: "🩸",
    currencyName: "Souls",
    startingBalance: 1000,
    daily: {
      amount: 500,
      streakBonus: 100,
    },
    work: {
      min: 100,
      max: 300,
      cooldownMinutes: 30,
    },
  },

  // ----------------------------------------
  // 4. GAMBLING SUITE
  // ----------------------------------------
  gambling: {
    enabled: true,
    minBet: 10,
    maxBet: 500000,
    jackpot: {
      enabled: true,
      contributionPercentage: 5,
    },
    slots: { enabled: true },
    blackjack: { enabled: true },
    roulette: { enabled: true },
    wheel: { enabled: true },
    coinflip: { enabled: true },
    dice: { enabled: true },
  },

  // ----------------------------------------
  // 5. RPG & COMBAT MECHANICS
  // ----------------------------------------
  rpg: {
    enabled: true,
    maxLevel: 100,
    pvp: { enabled: true },
    bosses: [
      {
        id: "jabberwock",
        name: "Jabberwock",
        hp: 50000,
        rewards: { souls: 10000, exp: 5000 },
      },
      {
        id: "cthulhu",
        name: "Cthulhu",
        hp: 150000,
        rewards: { souls: 35000, exp: 15000 },
      },
      {
        id: "queen_lorina",
        name: "Queen Lorina",
        hp: 500000,
        rewards: { souls: 100000, exp: 50000 },
      },
    ],
  },

  // ----------------------------------------
  // 6. REBIRTH & JOB SYSTEMS
  // ----------------------------------------
  rebirth: {
    enabled: true,
    costMultiplier: 2.5,
    maxRebirths: 10,
  },
  jobs: { enabled: true },

  // ----------------------------------------
  // 7. INVENTORY, CRAFTING & EQUIPMENT
  // ----------------------------------------
  inventory: { maxSlots: 50 },
  crafting: { enabled: true },

  // ----------------------------------------
  // 8. GACHA SYSTEM
  // ----------------------------------------
  gacha: {
    enabled: true,
    costPerPull: 500,
  },

  // ----------------------------------------
  // 9. LEADERBOARD & ACHIEVEMENTS
  // ----------------------------------------
  leaderboard: {
    enabled: true,
    displayCount: 45,
    pages: 15,
  },
  achievements: {
    enabled: true,
    description: "Track your royal milestones, monster slays, and gambling wins for bonus rewards.",
  },

  // ----------------------------------------
  // 10. SOCIAL & FAMILY INTERACTIONS
  // ----------------------------------------
  family: {
    enabled: true,
    add: { description: "Form a sworn alliance or lineage (requires confirmation)" },
    remove: { description: "Sever a sworn lineage" },
    interactions: { description: "Inspect sworn relationships of yourself or another subject" },
  },

  // ----------------------------------------
  // 11. ADMIN COMMANDS
  // ----------------------------------------
  admin: {
    talk: {
      adminOnly: true,
      description: "[Admin] Speak directly through Her Majesty Queen Lorina in this channel.",
    },
  },
};

export { botConfig };
export default botConfig;
