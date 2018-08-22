// 1. on start computer will choose a random number between 1-100
// 2. also random numbers will be assigned to each of the gemStone between 1-15.
// 3. two gem shouldnt have same numbers assigned
// 4. as user clicks on gem it shoul add the value aqssigned to it, with the score. it should go on until score           equals random number or greater than the number.
// 5. if score equals random number user wins
// 6. if score greater than number user looses
// 7. in both conditions computer will pick new number for next round.
$(document).ready(function () {
  // selects random number between 1-100
  var randomNumber = (Math.floor(Math.random() * 120)) + 1;
  $("#random").html(randomNumber);

  $("img").addClass("image_clk");

  //  selects 
  var ytotal = 0;
  var numberOptions = [1, 8, 4, 2];

  $(".pink").attr("data_crystalValue", numberOptions[0]);
  $(".yellow").attr("data_crystalValue", numberOptions[1]);
  $(".green").attr("data_crystalValue", numberOptions[2]);
  $(".blue").attr("data_crystalValue", numberOptions[3]);

  $(".image_clk").on("click", function () {
    var crystalValue = $(this).attr("data_crystalValue");
    crystalValue = parseInt(crystalValue);
    ytotal += crystalValue;
    $("#total").html(ytotal);
    console.log("total " + ytotal);
    console.log("crystal val " + crystalValue);

    if (ytotal == randomNumber) {
      console.log("you win");
      $(".instructions").html("You Won!!!");
      $(".first").css({'display':'none'});
      $(".second").css({'display':'none'});
      $(".wi").css({'display':'inline'});
      // $(".winning_screen").css({'background-imge':'url("https://giphy.com/stickers/cute-kawaii-1gP0UvJKH9Hqc4EJAa")'});
    }
    else if (ytotal > randomNumber) {
      $(".instructions").html("You loose...Try Again");
    }
  })

  // how can i make each number selection unique?

})


