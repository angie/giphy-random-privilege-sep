// Initial Search Buttons
var topics = ["Internet Cats", "Meme's", "Typing", "Space", "Rick and Morty"];
function addSearchBtns() {
  $("#buttons").html("");
  for (i = 0; i < topics.length; i++) {
    var $button = $("<input type='button' class='btn btn-sm search-btn' />");
    $button.val(topics[i]);
    $("#buttons").append($button);
  }
}
addSearchBtns();

$(document).on("click", ".btn", function () {
  $("#results").html("");
  // Beginning API call
  var queryURL =
    "https://api.giphy.com/v1/gifs/random?api_key=VWl29HIwjskH9EhAobu08CcTSWUKyDH0&tag=beyonce&rating=pg";

  $.ajax({
    url: queryURL,
    method: "GET",
    success: function (r) {
      var $img = $("<img>");
      var $div = $("<div>");
      var gifObj = r.data;
      var gif = gifObj.images;

      // Image builder object
      $img.attr({
        // "width": "200px",
        src: gif.fixed_height.url,
        "data-animate": gif.fixed_height.url,
        "data-still": gif.fixed_height_still.url,
        "data-state": "animate",
        class: "gif",
      });
      // $div.attr("id", "gif-" + i);
      $div.addClass("gif-box");
      $div.append($img);
      $("#results").append($div);
    },
  });
});
