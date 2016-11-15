$('.grid').masonry({
  // options
  itemSelector: '.grid-item',
  columnWidth: 1
});

$(document).ready(function(){

  $('.grid-item').hover(function(){
    var self = $(this);
    // self.animate({width:'0px'},1400)
    // self.toggleClass('hidden')
    self.addClass('hidden')
  })
})
