//variables to require fs, request, twitter, spotify
var fs = require("fs");
var request = require('request');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');

//variable for switch call
var command = process.argv[2];

//grab twitter & spotify keys from key.js
var myTwitterKeys = require("./keys.js");
var mySpotifyKeys = require("./keys.js")

//set variable for twitter & spotify keys from keys.js
var twitterKeyList = myTwitterKeys.twitterKeys;
var spotifyKeyList = mySpotifyKeys.spotifyKeys;

var client = new Twitter(twitterKeyList);
var spotify = new Spotify(spotifyKeyList);

//create switch call for node input commands
switch (command) {
    case "my-tweets":
        twitterLog();
        break;

    case "spotify-this-song":
        var song = '';
        song = process.argv[3];
        if (process.argv[3] === undefined) {
            var song = "The Sign Ace of Base"
        }
        spotifyLog(song);
        break;

    case "movie-this":
        var restOfArgs = process.argv.splice(3, process.argv.length);
        var movieName = restOfArgs.join(" ");
        console.log(restOfArgs);
        if (movieName === "") {
            movieName = "Mr. Nobody"
        }
        movieLog();
        break;

    case "do-what-it-says":
        addLog();
        break;
    case "commands":
        console.log("\nmy-tweets\nspotify-this-song\nmovie-this\ndo-what-it-says");
        break;
}

//create function for twitter command
function twitterLog() {
    var params = { screen_name: 'artprofi_liri', count: 20 };
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            for (i = 0; i < tweets.length; i++) {
                console.log("\nTweet: " + tweets[i].text);
                console.log("Created On: " + tweets[i].created_at + "\n");

                //append data to log.txt file
                fs.appendFileSync('log.txt', `\nTweet: ${tweets[i].text}\n  Created On:${tweets[i].created_at}\n\n`)
            }
        } else {
            console.log(error);
        }
    })

}

//create function for spotify command 
function spotifyLog(song) {
    spotify.search({ type: 'track', query: song }, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        } else {
            var songInfo = data.tracks.items[0]
            var songResult = console.log("\nArtist(s): " + songInfo.artists[0].name)
            console.log("Song Name: " + songInfo.name)
            console.log("Preview Url: " + songInfo.preview_url)
            console.log("Album Name: " + songInfo.album.name + "\n")

            //append data to log.txt file
            fs.appendFileSync('log.txt', `\nArtist(s): ${songInfo.artists[0].name}\n Song Name: ${songInfo.name}\n Preview Url: ${songInfo.preview_url}\n Album Name: ${songInfo.album.name}\n\n`)
        }

    });
}

//create function for movie command 
function movieLog() {
    // use request package to grab data from omd api
    request("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&tomatoes=true&apikey=40e9cece", function(error, response, body) {

        // if the request was successful 
        if (!error && response.statusCode === 200) {

            // log body from the omdb
            console.log("\nTitle of the movie: " + JSON.parse(body).Title);
            console.log("Year the movie came out: " + JSON.parse(body).Year);
            console.log("IMDB Rating of the movie: " + JSON.parse(body).imdbRating);
            console.log("Country where the movie was produced: " + JSON.parse(body).Country);
            console.log("Language of the movie: " + JSON.parse(body).Language);
            console.log("Plot of the movie: " + JSON.parse(body).Plot);
            console.log("Actors in the movie: " + JSON.parse(body).Actors);
            console.log("Rotten Tomatoes URL: " + JSON.parse(body).tomatoURL + "\n");


            //append data to log.txt file
            fs.appendFileSync('log.txt', `\nTitle of the movie: ${JSON.parse(body).Title}\n Year the movie came out: ${JSON.parse(body).Year}\n IMDB Rating of the movie: ${JSON.parse(body).imdbRating}\n Country where the movie was produced: ${JSON.parse(body).Country}\n Language of the movie:  ${JSON.parse(body).Language}\n Plot of the movie:  ${JSON.parse(body).Plot}\n Actors in the movie:  ${JSON.parse(body).Actors}\n Rotten Tomatoes URL: ${JSON.parse(body).tomatoURL}\n\n`)
        }
    });
}

function addLog() {
    //run readFile and store the read information into the variable "data"
    fs.readFile("random.txt", "utf8", function(err, data) {
        if (err) {
            return console.log(err);
        } else {
            var dataArr = data.split(",")
            var command = dataArr[0];
            var song = dataArr[1];

            spotifyLog(song);
        }

    })
}