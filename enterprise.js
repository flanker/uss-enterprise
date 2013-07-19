$(function () {
  var foreground = $('<div class="foreground slides"></div>');
  $('.slide').each(function () {
    var originalSection = $(this);
    var children = $(originalSection).children();
    var newSection = $('<section class="slide"></section>').append(children);
    foreground.append(newSection);
  });
  $('.page').append(foreground);
});

$(window).scroll(function () {
  var scrollTop = $(window).scrollTop();
  $('.scrollTop').text(scrollTop);
  $('.foreground').css('top', -scrollTop);
});