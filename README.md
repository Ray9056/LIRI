# LIRI-Bot
L.I.R.I. stands for Language Interpretation and Recognition Interface. It is a command line node app that takes in parameters and gives back data from various APIs.

As the name suggests, LIRI is analagous to the iPhone's SIRI assistant, but rather than using speech, LIRI is controlled through written text.

The LIRI app uses Node.js in the command line of your computer and has dependencies for the request, spotify, and twitter Node packages. It also used the built-in fs package to read and write to text files.

The app features 4 different features using the node liri.js [command-here] syntax. Below are the command types...

my-tweets returns your Twitter account's 20 most recent tweets using the Twitter API.
spotify-this-song [song-title-here] returns the artist, album, and preview URL for a specific song using the Spotify API.
movie-this [movie-title-here] returns the year, rating, plot summary, reviews of a specific movie using the IMDb API.
do-what-it-says returns the result of a "random" result by reading the random.txt file and performing the command written in that file. This command can be changed to any one of the 3 types listed above.

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

The `spotify-this-song` command will log the artist(s), the name of the track, the URL for a preview on Spotify, and the album.

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
