// Login button redirects authorization to spotify login page
export const authEndpoint = "https://accounts.spotify.com/authorize";

/* Spotify sends the response which is redirected to the LocalHost
    home page once logged in*/
const redirectUri = "http://localhost:3000";

// Client Id of Spotify Api
const clientId = "0aefb6706e494413aab0cdfd6a316bd3";

// Scopes
// allowed by spotify how to interact with the clone app
// what can we do or not.
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl = () =>{
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) =>{
        var parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
    }, {});
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
