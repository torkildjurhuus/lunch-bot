const { App } = require('@slack/bolt');
const { scrapeFkMenu } = require('./scrapers/fk');
const { scrapeMiklagardurMenu } = require('./scrapers/miklagardur.js');
const { scrapeSiloMenu } = require('./scrapers/silo.js');

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET
});


app.command('/lunch-all', async ({ ack, say }) => {
    await ack();
    const fkMenu = await scrapeFkMenu();
    await say(fkMenu ? `:FK: *Føroya Keypsamtøka* \n${fkMenu}` : ':FK: No information available*');
    await ack();
    const miklagardurMenu = await scrapeMiklagardurMenu();
    await say(miklagardurMenu ? `:miklagardur: *Miklagarður* \n${miklagardurMenu}` : ':miklagardur: No information available*');
    await ack();
    const siloMenu = await scrapeSiloMenu();
    await say(siloMenu ? `:silo:\n${siloMenu}` : ':silo: No information available*');
});
app.command('/lunch-fk', async ({ ack, say }) => {
    await ack();
    const fkMenu = await scrapeFkMenu();
    await say(fkMenu ? `:FK: Restaurant:\n${fkMenu}` : ':FK: No information available*');
});

app.command('/lunch-miklagardur', async ({ ack, say }) => {
    await ack();
    const miklagardurMenu = await scrapeMiklagardurMenu();
    await say(miklagardurMenu ? `:miklagardur:\n${miklagardurMenu}` : ':miklagardur: No information available*');
});

app.command('/lunch-silo', async ({ ack, say }) => {
    await ack();
    const siloMenu = await scrapeSiloMenu();
    await say(siloMenu ? `:silo:\n${siloMenu}` : ':silo: No information available*');
});

(async () => {
    await app.start();
    console.log('⚡️ Lunch app is running!');
})();
