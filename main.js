$(document).ready(() => {
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
  })
});
