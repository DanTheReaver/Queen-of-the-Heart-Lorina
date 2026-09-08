/**
 * Bot Configuration Boilerplate Template
 */

export const botConfig = {
  name: 'DiscordBot',
  version: '1.0.0',
  prefix: '!',

  // Environment & Core Settings
  environment: process.env.NODE_ENV || 'development',
  debug: process.env.DEBUG === 'true',

  // API Credentials
  discord: {
    token: process.env.DISCORD_TOKEN || process.env.TOKEN,
    clientId: process.env.CLIENT_ID,
    guildId: process.env.GUILD_ID,
  },

  // Base Economy Settings
  economy: {
    currencyName: 'Coins',
    currencySymbol: '🪙',
    startingBalance: 100,
    dailyReward: 50,
    taxRate: 0.0,
  },

  // Default Feature Flags
  features: {
    enableShop: true,
    enableEconomy: true,
    enableLogging: true,
    music: true,
  },

  // Default Shop Configuration Container
  shop: {
    enabled: true,
    categories: [],
    items: [],
  },
};

/**
 * Validates bot configuration
 * @param {Object} config 
 * @returns {boolean}
 */
export function validateConfig(config = botConfig) {
  const token = config.discord?.token || process.env.DISCORD_TOKEN || process.env.TOKEN;
  if (!token) {
    console.warn('[Config Warning] DISCORD_TOKEN is missing from environment variables.');
  }
  return true;
}

export default botConfig;
