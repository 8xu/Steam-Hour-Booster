const SteamUser = require("steam-user");

const client = new SteamUser(); // Creates a new Steam instance

const games = ['730']; // Modify GAMEID1 / GAMEID2 to match the ID's of the games you want to farm

username = process.env['username'];
password = process.env['password'];
const logInOptions = { 
    accountName: username, 
    password: password
};

client.logOn(logInOptions); // Logs into the Steam account

client.on("loggedOn", () => {
    console.log(`User account with ID: ${username} has been logged succesfully.`);
    console.log(`View the account here: ${client.vanityURL}`);
    client.setPersona(SteamUser.EPersonaState.Online);
    client.gamesPlayed(games);
});