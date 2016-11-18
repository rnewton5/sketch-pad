var boxesPerSide;
var choice = 'black';

$(document).ready(function() {
  boxesPerSide = 30;
  GenerateGrid($('.grid').width());
});

function GenerateGrid(gridSize){
  for(i = 0; i < boxesPerSide * boxesPerSide; i++){
    var $div = $('<div />');
    $div.width(gridSize/boxesPerSide).height(gridSize/boxesPerSide);
    $div.css('background-color', 'white');
    $div.css('display', 'inline-block');
    $div.css('float', 'left');
    $div.css('border-radius', '5px');
    $div.addClass('box');
    $('.grid').append($div);
  }

  $('.box').mouseenter(function() {
    if(choice === 'black'){
      $(this).css('background-color', 'black');
    }
    else if(choice === 'colors'){
      $(this).css('background-color', '#'+(Math.random()*0xFFFFFF<<0).toString(16));
    }
    else if(choice === 'fader'){
      $(this).fadeToggle(400, 'swing', function(){
        $(this).fadeIn('slow');
      });
    }
    else{
      var pos = $(this).offset();
      $(this).css('background-color', 'black');
      var box = document.elementFromPoint(screen.width - pos.left - 310, pos.top);
      $(box).css('background-color', 'black');
    }
  });
}


function resize(){
  boxesPerSide = prompt('How big do you want the grid to be? (1 - 64)');
  if(boxesPerSide < 1 || boxesPerSide > 64 || !(boxesPerSide == parseInt(boxesPerSide))){
    return;;
  }
  $('.grid').empty();
  GenerateGrid($('.grid').width());
}

function black(){
  choice = "black";
}

function clearSketch(){
  $('.box').css('background-color', 'white');
}

function colors(){
  choice = "colors";
}

function fader(){
  choice = "fader";
}

function mirror(){
  choice = "mirror";
}
