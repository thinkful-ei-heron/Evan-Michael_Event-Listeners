function handleThumbnailClicks() {
$('.thumbnail').on('click', e => {
    console.log(e.target);
    $('.hero img').attr('src',$(e.target).attr('src'));
    $('.hero img').attr('alt',$(e.target).attr('alt'));
  });
}
$(handleThumbnailClicks);