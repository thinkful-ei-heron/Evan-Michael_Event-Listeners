function handleThumbnailClicks() {
$('.thumbnail').on('click', e => {
    console.log(e.target);
    $('.hero img').attr('src',$(e.target).find('img').attr('src'));
    $('.hero img').attr('alt',$(e.target).attr('alt'));
  });
}
$(handleThumbnailClicks);