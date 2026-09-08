/**
 * Queen of the Heart Lorina - Core Bot Configuration
 * Matches application.js expectations, including shop hierarchy, validateConfig, and Souls economy.
 */

export const botConfig = {
  name: 'Queen of the Heart Lorina',
  version: '3.0.0',
  prefix: '!',

  // System Settings
  environment: process.env.NODE_ENV || 'production',
  debug: process.env.DEBUG === 'true',

  // API Credentials
  discord: {
    token: process.env.DISCORD_TOKEN || process.env.TOKEN,
    clientId: process.env.CLIENT_ID,
    guildId: process.env.GUILD_ID,
  },

  // Visual Theme & Persona
  theme: {
    color: '#800020',
    embedFooter: 'Queen of the Heart Lorina • All Hearts Belong to the Queen',
  },

  // Economy & Rebirth Progression (Souls)
  economy: {
    currencyName: 'Souls',
    currencySymbol: '🩸',
    startingBalance: 500,
    dailyReward: 300,
    taxRate: 0.05,
    maxRebirthLevel: 10,
    allowStealing: false,
  },

  // Gambling Suite
  gambling: {
    minBet: 50,
    maxBet: 500000,
    coinflipMultiplier: 2.0,
    slotsMultiplier: 5.0,
    blackjackPayout: 2.5,
  },

  // Feature Flags
  features: {
    enableShop: true,
    enableEconomy: true,
    enableLogging: true,
    music: true,
  },

  // Nested Shop Object expected by application.js line 29 (...botConfig.shop)
  shop: {
    enabled: true,
    currencySymbol: '🩸',
    taxRate: 0.05,
    categories: [
      { id: 'consumables', name: 'Consumables & Alchemy' },
      { id: 'weapons', name: 'Black Souls Weapons' },
      { id: 'armor', name: 'Gothic Armor & Gear' },
      { id: 'artifacts', name: 'Relics & God-Tier Artifacts' },
    ],
    items: [
      // Consumables
      {
        id: 'herb_flask',
        name: 'Herb Flask',
        price: 50,
        category: 'consumables',
        rebirthRequired: 0,
        description: 'Restores 60 HP during combat.',
        stats: { healHp: 60 },
      },
      {
        id: 'dung_pie',
        name: 'Dung Pie',
        price: 120,
        category: 'consumables',
        rebirthRequired: 0,
        description: 'Throws foul toxic bile dealing immediate passive damage.',
        stats: { poisonDamage: 40 },
      },
      {
        id: 'soul_elixir',
        name: 'Elixir of the Lost Souls',
        price: 600,
        category: 'consumables',
        rebirthRequired: 1,
        description: 'Increases attack power by 30 for 3 encounters.',
        stats: { tempAttack: 30, durationBattles: 3 },
      },
      // Weapons
      {
        id: 'vorpal_sword',
        name: 'Vorpal Sword',
        price: 1500,
        category: 'weapons',
        rebirthRequired: 0,
        description: 'Snicker-snack! High critical strike lethality.',
        stats: { attack: 45, critChance: 0.15 },
      },
      {
        id: 'red_hood_cleaver',
        name: "Red Hood's Cleaver",
        price: 6500,
        category: 'weapons',
        rebirthRequired: 2,
        description: 'A bloodstained heavy cleaver that rends flesh.',
        stats: { attack: 110, lifesteal: 0.08 },
      },
      {
        id: 'jabberwock_blade',
        name: 'Jabberwock Greatsword',
        price: 25000,
        category: 'weapons',
        rebirthRequired: 4,
        description: 'Forged from the severed claws of the nightmare beast.',
        stats: { attack: 280, defense: 20 },
      },
      // Armor
      {
        id: 'gothic_cloak',
        name: 'Tattered Gothic Cloak',
        price: 400,
        category: 'armor',
        rebirthRequired: 0,
        description: 'Protects against minor skirmishes.',
        stats: { defense: 15, maxHp: 30 },
      },
      {
        id: 'executioner_plate',
        name: "Executioner's Steel Plate",
        price: 5000,
        category: 'armor',
        rebirthRequired: 2,
        description: 'Heavy dark plate capable of deflecting mortal blows.',
        stats: { defense: 80, maxHp: 180 },
      },
      // Artifacts
      {
        id: 'black_fairy_ring',
        name: 'Black Fairy Ring',
        price: 75000,
        category: 'artifacts',
        rebirthRequired: 5,
        description: 'Corrupted fairy magic that turns incoming damage into Souls.',
        stats: { attack: 200, defense: 150, maxHp: 400, soulGainBonus: 0.25 },
      },
      {
        id: 'crown_red_king',
        name: 'Crown of the Red King',
        price: 500000,
        category: 'artifacts',
        rebirthRequired: 8,
        description: 'The supreme artifact of absolute dominion.',
        stats: { attack: 750, defense: 500, maxHp: 1500, lifesteal: 0.15 },
      },
    ],
  },
};

/**
 * Validation function expected by application.js import
 */
export function validateConfig(config = botConfig) {
  const token = config.discord?.token || process.env.DISCORD_TOKEN || process.env.TOKEN;
  if (!token) {
    console.warn('[Config Warning] Missing DISCORD_TOKEN in environment variables.');
  }
  return true;
}

export default botConfig;
