const SteamUser = require("steam-user");

const username = process.env['username'];
const password = process.env['password'];
const games = ['GAMEID1', 'GAMEID2'] // Modify GAMEID1 / GAMEID2 to match the ID's of the games you want to farm

const client = new SteamUser(); // Creates a new Steam instance

const logInOptions = { accountName: username, password: password }

client.logOn(logInOptions); // Logs into the Steam account

client.on("loggedOn", () => {
    console.log(`User account with ID: ${username} has been logged succesfully.`);
    client.setPersona(SteamUser.EPersonaState.Online); 
    client.gamesPlayed(games);
});