$(function(){
  $('#list a').hover(
    function(){
      $(this).css({
        'color':'red',
        'text-decoration':'underline'
      });
    },
    function(){
      $(this).css({
        'color':'gray',
        'text-decoration':'none'
      });
    }
  );
});
