const fetch = require('node-fetch');

function jsonWebAPI(webapiURL) {
// Returns an image from JSON WebAPI
  fetch(webapiURL)
  .then(res => res.json())
  .then(json => {
    console.log(json);
    console.log("json.url = " + json.lyrics);
    msg.channel.send(json.lyrics);
  })
  // Uncomment code below to show error
  // .catch(err => { throw err });
}

webURL = "https://some-random-api.ml/lyrics?title=numb"; 
jsonWebAPI(webURL );
