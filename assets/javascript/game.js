// 1. on start computer will choose a random number between 1-100
// 2. also random numbers will be assigned to each of the gemStone between 1-15.
// 3. two gem shouldnt have same numbers assigned
// 4. as user clicks on gem it shoul add the value aqssigned to it, with the score. it should go on until score           equals random number or greater than the number.
// 5. if score equals random number user wins
// 6. if score greater than number user looses
// 7. in both conditions computer will pick new number for next round.

$(document).ready(function () {
  var wins = 0;
  var losses = 0;
  var gameIsRunning;
  var ytotal;
  var randomNumber;
  var numberOptions = [1, 8, 4, 2];

  function newGame() {
    // selects random number between 1-100
    randomNumber = (Math.floor(Math.random() * 120)) + 1;
    $("#random").html(randomNumber);
    $(".none").hide();
    gameIsRunning = true;
    $("img").addClass("image_clk");

    //  selects 
    ytotal = 0;

    $(".pink").attr("data_crystalValue", numberOptions[0]);
    $(".yellow").attr("data_crystalValue", numberOptions[1]);
    $(".green").attr("data_crystalValue", numberOptions[2]);
    $(".blue").attr("data_crystalValue", numberOptions[3]);
    $(".instructions").show();
    $('#win').hide();
    $('#loose').hide();
    $("#total").html(ytotal);

  }
  newGame()
  $(".image_clk").on("click", function () {
    if (gameIsRunning) {
      var crystalValue = $(this).attr("data_crystalValue");
      crystalValue = parseInt(crystalValue);
      ytotal += crystalValue;
      $("#total").html(ytotal);
    }
    if ((ytotal == randomNumber)) {
      wins++;
      $(".wins").html(wins);
      $(".instructions").hide();
      $('#win').show();
      $(".first").css({ 'display': 'none' });
      $(".none").css({ 'display': 'inherit' });
      gameIsRunning = false;
      $(".newNum").on("click", function () {
        newGame()
      })

    }
    else if (ytotal > randomNumber) {
      losses++;
      $(".losses").html(losses);
      $(".instructions").hide();
      $('#loose').show();
      gameIsRunning = false;
      $(".newNum").on("click", function () {
        newGame()
      })
    }
  })


})

