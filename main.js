let NEW_LIMIT = 6

//Function to fetch gifs from giphy using the giphy API.

function load_gifs(num_of_gifs) {
  let api_key = "8s65PwK5uN7OqwCC9doyr2CJd8XU7Uv4";
  //if no parameter is passed,then num_of_gifs is set to the default value 6, otherwise the value passed is added to  new_limit, and new_limit is updated 
  let limit = (typeof num_of_gifs !== 'undefined') ?  num_of_gifs + NEW_LIMIT : NEW_LIMIT;
  NEW_LIMIT = limit
  //bootstrap loading icon
  let loader_html = `
    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
    <span class="sr-only">Loading...</span>`
  $("#button-addon2").html(loader_html)
  //get the value from the search bar, save it in the variable query.
  let query = $(".form-control").val();
  let xhr = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${api_key}&limit=${limit}`;
  //get the data using the fetch api and return it as a JSON object
  fetch(xhr).then((response) => {
    return response.json()
  }).then((data) => {
    //console.log(data)
    $('.search_row').empty()
    //Loop through each of the object, create an image tag and set the src equal to the gif url then append it to the parent div.
    data.data.forEach(function (gif) {
      gif_html = `
      <div class="col-sm-4 img-container">
        <img src="${gif.images.downsized.url}" />
      </div>`
      $('.search_row').append(gif_html)
    })
    //Change the bootstrap loading icon back to text immediately fetch is done.
    $("#button-addon2").text('Search')
  })
}

// Ensure the DOM is done loading before running any jquery
$(document).ready(() => {
  //listen for the click event on the search button, then run the load_gifs
  $("#button-addon2").click(function() {
    load_gifs()
  })
  //listen for the click event on the see more button, run the load_gifs function passing in a value for num_of_gifs
  $("#see_more").click(function() {
    load_gifs(4)
  })
});

