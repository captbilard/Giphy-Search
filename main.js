$(document).ready(() => {
<<<<<<< HEAD
  //once the DOM is done loading save the api key
  let api_key = "8s65PwK5uN7OqwCC9doyr2CJd8XU7Uv4";
  //listen for the click event on the search button
  $("#button-addon2").click(() => {
    //get the value from the search bar and save it in query and also save the url
    let query = $("#query").val();
    let xhr = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${api_key}&limit=6`;
    //get the data using the fetch api
    fetch(xhr).then((response) => {
      return response.json()
    }).then((myjson) => {
      //let results = JSON.stringify(myjson);
      //load the data into each of the div
      //Have been able to loop through the gif and get the url to display in the selected box. now i need to get the picture to appear now instead of url
      myjson.data.forEach((gif) => {
        console.log(gif.images.downsized_medium.url);
        let e = gif.images.downsized_medium.url;
        console.log(e);
        $(".col-sm1").html(e);
        //console.log(gif);
      })
    })
=======
  let api_key = "8s65PwK5uN7OqwCC9doyr2CJd8XU7Uv4";
  $("#button-addon2").click(() => {
    let query = $("#query").val();
    let url = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${api_key}`;
    fetch(url).then((response) => {
      return response.json()
    }).then(myjson => {
      return JSON.stringify(myjson);
    }).then(result => {
      for (let i = 0; i<=6; i++){
        
      }
    });
>>>>>>> dc26108ffb7ba7988893d51be75467f2ec70c111
  })
});
