$(document).ready(() => {
  //once the DOM is done loading save the api key
  let api_key = "8s65PwK5uN7OqwCC9doyr2CJd8XU7Uv4";
  //listen for the click event on the search button
  $("#button-addon2").click(() => {
    //get the value from the search bar and save it in query and also save the url
    let query = $(".form-control").val();
    let xhr = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${api_key}&limit=6`;
    let url_array = []
    //get the data using the fetch api
    fetch(xhr).then((response) => {
      return response.json()
    }).then((data) => {
      url_array.push(data.data[id]);
      console.log(url_array);
      //document.getElementById("1").src = data.data.images.original.url;
    })
  })
});
