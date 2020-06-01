let row = $('.row'),
item = $('.item'),
red = $('.red'),
blue = $('.blue'),
green = $('.green')
row.masonry({
  itemSelector: '.item',
  columnWidth: '.grid-sizer',
  gutter: '.gutter-sizer' });


$('#filter').on('click', () => {
  item.addClass('hide');
  red.removeClass('hide');

  row.masonry();
});

$('#filte').on('click', () => {
  item.addClass('hide');
  blue.removeClass('hide');
    

  row.masonry();
});
$('#filt').on('click', () => {
  item.addClass('hide');
  blue.removeClass('hide');
    red.removeClass('hide');
    green.removeClass('hide');
    

  row.masonry();
});