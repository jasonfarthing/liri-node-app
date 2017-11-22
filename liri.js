var Twitter = require('twitter');
var { twitterKeys } = require('./keys.js');
var Spotify = require("node-spotify-api")
var omdb = require('omdbapi');

var spotify = new Spotify({
    id: "7d690525a14f4c7d99727767a2fb84a1",
    secret: "710c11aab591439485293419d1d3f69d"
});
//Twitter------------------- it's working
var getMyTweets = function () {
    var client = new Twitter(twitterKeys);
    var params = {
        screen_name: "thebudrows",
        count: 20
    };
    client.get("statuses/user_timeline", params, function (error, tweets, response) {
        for (var index = 0; index < tweets.length; index++) {
            console.log("-----------------------")
            console.log("Tweet by: ", tweets[index].user.screen_name)
            console.log("Date Tweeted: ", tweets[index].created_at)
            console.log("Read it: ", tweets[index].text)
            console.log("-----------------------")
        }
    })
}
// Spotify ------------------- it's working
var getMeSpotify = function (songName) {
    if (songName === undefined) {
        songName = "The Sign"
    }
    spotify.search(
        {
            type: "track",
            query: songName
        },
        function (error, data) {
            if (error) {
                console.log("error happened : ", error);
                return;
            }
            // console.log("I am song data", data)
            var songs = data.tracks.items
            console.log("-------------------------")
            console.log("Song name: ", songs[0].name)
            console.log("Artist: ", songs[0].artists[0].name)
            console.log("Album: ", songs[0].album.name)
            console.log("Preview URL: ", songs[0].album.external_urls.spotify)
            console.log("-------------------------")
        }
    )
}
//OMDB not working :( --------------------------
// NOTE: if leave this in the code, my other calls won't run???
//-----------------------
// var request = require("request");
// var movieName = process.argv[2];
// var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";
// var getMeMovie = function () {
//     if (movieName == undefined) {
//         movieName = "Mr. Nobody"
//     }
//     omdbSearch(
//         {
//             type: "movie",
//             request: queryUrl
//         },
//         request(queryUrl, function (error, response, body) {
//             if (!error && response.statusCode === 200) {
//             }
//         }));
//     console.log(request);

    var pick = function (caseData, functionData) {
        switch (caseData) {
            case "my-tweets":
                getMyTweets();
                break;
            case "spotify-this-song":
                getMeSpotify(functionData);
                break;
            case "movie-this":
                getMeMovie(functionData);
                break;
            default:
                console.log("LIRI says....Try Again")
        }
    }
    var runThis = function (argOne, argTwo) {
        pick(argOne, argTwo);
    };


    runThis(process.argv[2], process.argv[3]);




    
            // console.log('MOVIE TITLE = ' + JSON.parse(body).Title);
            // console.log("The movie's release date is: " + JSON.parse(body).Year);

