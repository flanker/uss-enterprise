$(function () {

  var foreground = $('<div class="foreground slides"></div>');
  var middle = $('<div class="middle slides"></div>');

  $('.slide').each(function () {

    var $originalSection = $(this);

    var illustration = $originalSection.find('.illustration');
    var newMiddleSection = $('<section class="slide"></section>').append(illustration);

    var content = $originalSection.children();
    var newForegroundSection = $('<section class="slide"></section>').append(content);

    foreground.append(newForegroundSection);
    middle.append(newMiddleSection);

  });

  $('.page').append(middle);
  $('.page').append(foreground);

});

$(window).scroll(function () {
  var scrollTop = $(window).scrollTop();
  $('.scrollTop').text(scrollTop);
  $('.foreground').css('top', -scrollTop);
  $('.middle').css('top', -scrollTop * 3);
});