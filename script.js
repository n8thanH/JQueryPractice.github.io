const desc1 = document.getElementById('desc1');
const desc2 = document.getElementById('desc2');
const desc3 = document.getElementById('desc3');
const photo1 = document.getElementById('photo1');
const photo2 = document.getElementById('photo2');
const photo3 = document.getElementById('photo3');

$(photo1).click(function(){
    $(photo1).fadeOut();
  });
  $(photo2).click(function(){
    $(photo2).fadeOut();
  });
  $(photo3).click(function(){
    $(photo3).fadeOut();
  });
  $(desc1).click(function(){
    $(photo1).fadeIn();
  });
  $(desc2).click(function(){
    $(photo2).fadeIn();
  });
  $(desc3).click(function(){
    $(photo3).fadeIn();
  });