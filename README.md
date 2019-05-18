# LIRI-Bot

## Step One (Install Packages!) ##

```
npm install twitter
npm install node-spotify-api
npm install request
```
## Step Two (Check out the Commands!) ##

Liri can accept 5 commands as of right now (More will be added soon)

```
commands
spotify-this-song
my-tweets
movie-this
do-what-it-says
```
Use `node liri.js commands` to see the commands that you can use in the Liri Bot

# Command Examples

## Spotify Search ##

The `spotify-this-song` Will log the artist(s), the name of the track, the URL for a preview on Spotify, and the album.

Example Use Case: `node liri.js spotify-this-song Billie Jean`

## Tweet Logs ##

The `my-tweets` command will log the 4 most recent tweets from a twitter account. Each tweet's content and the time it was created are logged.

Example Use Case: `node liri.js my-tweets`

## Movie Search ##

The `movie-this` command will log the title, the release year, the IMDB rating, the Rotten Tomatoes rating, the country of origin, the language, a brief plot snippet, and the actors.

Example Use Case: `node liri.js movie-this John Wick`

## Random Command ##
The `do-what-it-says` command will read the `random.txt` file and run the commands on each line, and log their output in the order they're listed in the file.

Example Use Case: `node liri.js do-what-it-says` 
