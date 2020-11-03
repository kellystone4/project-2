// Make sure we wait to attach our handlers until the DOM is fully loaded.
//ADD CITY TO SAVED LIST on CITY.HTML & SAVED.HTML
$(function(){

$(".saveTripBtn").on("click", function(event){
  event.preventDefault();
  var newTrip = {
      name: $(".savedUserName").val(),
      description: $(".userWrittenDescription").val(),
      RestaurantId: [1],
      SightId: [1]
    }      
    $.ajax("/api/trips", {
      type: "POST",
      data: newTrip
    }).then(
      function() {
        console.log("added New Trip");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
  $(".signUpBtn").on("click", function(event){
    event.preventDefault();
    var newUser = {
        name: $(".savedName").val()
      }    
      $.ajax("/api/user", {
        type: "POST",
        data: newUser
      }).then(
        function() {
          console.log("added New Username");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
function saveTrip(){
    $.ajax("/api/trips", {
      type: "GET",
    }).then(
      function() {
        console.log("added New Trip");
        // Reload the page to get the updated list
        
      }

    );
}
var saved = ($(".savedName").val());  
console.log(saved);

  saveTrip();
});

