'use strict';
function handleThumbnailClicks() {
$('.thumbnail').on('click', function(e) {
    console.log(e.target);
    $('.hero img').attr('src',$(e.currentTarget).find('img').attr('src'));
    $('.hero img').attr('alt',$(e.currentTarget).find('img').attr('alt'));
  });
}
$(handleThumbnailClicks);
