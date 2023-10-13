const { scrapeFkMenu } = require('./scrapers/fk.js');
const { scrapeMiklagardurMenu } = require('./scrapers/miklagardur.js');
const { scrapeSiloMenu } = require('./scrapers/silo.js');

const testScrapers = async () => {
    console.log("Testing FK Restaurant Scraper:");
    const fkMenu = await scrapeFkMenu();
    console.log(fkMenu ? `*FK Restaurant:*\n${fkMenu}` : '*FK Restaurant: No information available*');

    console.log("\nTesting Miklagardur Restaurant Scraper:");
    const miklagardurMenu = await scrapeMiklagardurMenu();
    console.log(miklagardurMenu ? `*Miklagardur:*\n${miklagardurMenu}` : '*Miklagardur: No information available*');

    console.log("\nTesting Silo Restaurant Scraper:");
    const siloMenu = await scrapeSiloMenu();
    console.log(siloMenu ? `*Silo:*\n${siloMenu}` : '*Silo: No information available*');
};

testScrapers().catch((err) => {
    console.error("An error occurred:", err);
});
