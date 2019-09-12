$('.new-tweet textarea').on('input', () => {
  const len = $(this).val().length;
  const remaining = 140 - len;
  $('.counter').text(remaining);
});