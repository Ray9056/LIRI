# LIRI-Bot CLI

As the name suggests, LIRI is analagous to the iPhone's SIRI assistant, but rather than using speech, LIRI is controlled through written text.

The LIRI app uses Node.js in the command line of your computer and has dependencies for the request, spotify, and twitter Node packages. It also used the built-in fs package to read and write to text files.

The app features 4 different features using the node liri.js [command-here] syntax. Below are the command types...

* my-tweets returns your Twitter account's 20 most recent tweets using the Twitter API.
* spotify-this-song [song-title-here] returns the artist, album, and preview URL for a specific song using the Spotify API.
* movie-this [movie-title-here] returns the year, rating, plot summary, reviews of a specific movie using the IMDb API.
* do-what-it-says returns the result of a "random" result by reading the random.txt file and performing the command written in that file. This command can be changed to any one of the 3 types listed above.

## Instructions ##

Unfortunately, since this is a command line application, it must be cloned down to your machine to be demoed. After cloning down the repo to your computer, cd into the liri-node-app folder and run npm install to download all the node dependencies mentioned above.

After the node packages, are installed...

* You will need to set up the Twitter API (if you do not wish to demo the my-tweets command, you can skip this part)
  * You will need to get API keys for Twitter. Please refer to the [Twitter Apps page](https://developer.twitter.com/en/apps) to get a consumer_key, consumer_secret, access_token_key, and access_token_secret. You can also see the [npm page](https://www.npmjs.com/package/twitter) for more information.
  * After you get the API keys, open the keys.js file and paste them into the correpsonding locations in the exports.twitterKeys object.
  * Finally, you can open the liri.js file and change the myTwitterUserName variable to your twitter handle.
* Note that the Spotify API and IMDb do not need special keys, so you can run the app with minimal setup if you wish to skip over the Twitter API functionality.

To run the app, simply use the node liri.js [command-here] format discussed above. Please refer to the screenshots for specific examples. Be sure that you cd into the liri-node-app folder before running the commands.

# Command Examples

## Spotify Search ##

The `spotify-this-song` command will log the artist(s), the name of the track, the URL for a preview on Spotify, and the album.

Example Use Case: `node liri.js spotify-this-song Billie Jean`

[![Image from Gyazo](https://i.gyazo.com/1fc9f0276df4e9625d98b059bbe1822d.gif)](https://gyazo.com/1fc9f0276df4e9625d98b059bbe1822d)

## Tweet Logs ##

The `my-tweets` command will log the 4 most recent tweets from a twitter account. Each tweet's content and the time it was created are logged.

Example Use Case: `node liri.js my-tweets`

[![Image from Gyazo](https://i.gyazo.com/5c75bd447be1e92751dc7ad0325a61ce.gif)](https://gyazo.com/5c75bd447be1e92751dc7ad0325a61ce)

## Movie Search ##

The `movie-this` command will log the title, the release year, the IMDB rating, the Rotten Tomatoes rating, the country of origin, the language, a brief plot snippet, and the actors.

Example Use Case: `node liri.js movie-this John Wick`

[![Image from Gyazo](https://i.gyazo.com/4feb7d6b10eab3b7a4e6404f74fc3811.gif)](https://gyazo.com/4feb7d6b10eab3b7a4e6404f74fc3811)

## Random Command ##
The `do-what-it-says` command will read the `random.txt` file and run the commands on each line, and log their output in the order they're listed in the file.

Example Use Case: `node liri.js do-what-it-says` 

[![Image from Gyazo](https://i.gyazo.com/f57d908a1ed20db4bb52b24109203851.gif)](https://gyazo.com/f57d908a1ed20db4bb52b24109203851)

Copyright © 2019 [Suraj Patel](https://jernical.github.io/Suraj-Patel/)
