function preload(ele, imgName) {
  var baseUrl = 'https://wendyowensbooks.com';
  var c = new Image(); // create img element for preload
  var ele = ele;

  // when the image element is loaded, set the background image
  c.onload = function(){
    $(ele).attr("src", baseUrl + '/img/' + imgName);
  }

  // wait for image to load though
  c.src = baseUrl + '/img/' + imgName;
}

function preloadBG(ele, imgName) {
  var baseUrl = 'http://wendyowensbooks.com';
  var c = new Image(); // create img element for preload
  var ele = ele;

  // when the image element is loaded, set the background image
  c.onload = function(){
    $(ele).css('background-image','url(' + baseUrl + '/img/' + imgName + ')');
  }

  // wait for image to load though
  c.src = baseUrl + '/img/' + imgName;
}


function cycleImages() {
  var $title = $('.site-title h1.title');
  var $active = $('.active');
  var $next = ($active.next().length > 0) ? $active.next() : $('.book-covers:first');

  var $lit = $('.lit');
  var $nextlit = ($lit.next().length > 0) ? $lit.next() : $('.indicator:first');

  $title.fadeOut(400,function(){
    $title.html($next.attr("alt"));
    $title.fadeIn(400);
  });

  $next.fadeIn(800);
  $active.delay(100).fadeOut(500);
  $active.removeClass('active');
  $next.addClass('active');
  $lit.removeClass('lit');
  $nextlit.addClass('lit');
}

$(document).ready(function() {
  // preload('.book-covers.stubborn-love ', 'stubborn-love-books.png');
  // preload('.book-covers.sacred-guardians ', 'sacred-guardians-books.png');
  // preload('.book-covers.wash-me-away', 'wash-me-away-books.png');
  preloadBG('.landing-hero', 'background.jpg');

  // run every ??s
  setInterval('cycleImages()', 7000);
});

document.querySelector( "#site-menu" ).addEventListener( "click", function() {
  this.classList.toggle( "active" );
  $('#expanded-menu').fadeToggle(350);
});
