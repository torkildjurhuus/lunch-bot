const { App } = require('@slack/bolt');
const { scrapeFkMenu } = require('./scrapers/fk');
const { scrapeMiklagardurMenu } = require('./scrapers/miklagardur.js');
const { scrapeSiloMenu } = require('./scrapers/silo.js');

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET
});

app.command('/lunch-fk', async ({ ack, say }) => {
    await ack();
    const fkMenu = await scrapeFkMenu();
    await say(fkMenu ? `*FK Restaurant:*\n${fkMenu}` : '*FK Restaurant: No information available*');
});

app.command('/lunch-miklagardur', async ({ ack, say }) => {
    await ack();
    const miklagardurMenu = await scrapeMiklagardurMenu();
    await say(miklagardurMenu ? `*Miklagardur:*\n${miklagardurMenu}` : '*Miklagardur: No information available*');
});

app.command('/lunch-silo', async ({ ack, say }) => {
    await ack();
    const siloMenu = await scrapeSiloMenu();
    await say(siloMenu ? `*Silo:*\n${siloMenu}` : '*Silo: No information available*');
});

(async () => {
    await app.start();
    console.log('⚡️ Bolt app is running!');
})();
