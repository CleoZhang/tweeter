$('.new-tweet textarea').on('input', function () {
  const len = $(this).val().length;
  const remaining = 140 - len;
  console.log(len);
  $('.counter').text(remaining);
});