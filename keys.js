console.log('this is loaded');

var twitterKeys = {
  consumer_key: '<Mf6458kf1EpgW9wnWCj6l3n8B>',
  consumer_secret: '<xsG3vbCa43ilEPlToUsPU73lDdHodxyToRsKn9WTqpW3OVwq1o>',
  access_token_key: '<429425317-6jYM0YvVB8IKEfVHl7BjaWzLfTJLcVPzk7ORGviA>',
  access_token_secret: '<9TWbv4ZztUae2jt2NUTQgqPnYL7V3Nzt4OVZOYPKgmAPG>',
}

module.exports = twitterKeys;

//---------------------

var Spotify = require('node-spotify-api');

var spotify = new Spotify({
 id: '7d690525a14f4c7d99727767a2fb84a1d',
 secret: '710c11aab591439485293419d1d3f69d'
});

// spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//  if (err) {
//    return console.log('Error occurred: ' + err);
//  }

// console.log(data); 
// });



spotify
.request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
.then(function(data) {
  console.log(data); 
})
.catch(function(err) {
  console.error('Error occurred: ' + err); 
});


//----------------------



