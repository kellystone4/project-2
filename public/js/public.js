$(document).on("ready", function(){
$(".saveTripBtn").on("click", function(event){
  const selectedRestaurants = [];
  const selectedSights = [];
  $("#userSelectRestaurant :selected").each((i, selectRestaurant) => {
    if (i > 0) {
      selectedRestaurants.push($(selectRestaurant).val())
    }
  })
  $("#userSelectSight :selected").map((i, selectSight) => {
    if (i > 0) {
      selectedSights.push($(selectSight).val());
    }
  })
  event.preventDefault();
  // const url = window.location.href.split("/")
  // const cityId = url[url.length -1]
  var newTrip = {
      name: $(".userTripName").val(),
      UserId: $(".savedUserName :selected").val(),
      description: $(".userWrittenDescription").val(),
      restaurantId: selectedRestaurants,
      sightId: selectedSights,
      CityId : $(this).data("id")
    }  
      
    console.log(newTrip)
    // console.log(newTrip);

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
// function saveTrip(){
//     $.ajax("/api/trips", {
//       type: "GET",
//     }).then(
//       function() {
//         console.log("added New Trip");
//         // Reload the page to get the updated list
        
//       }

//     );
// }
});


