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
  ).click(function(){
    msg = $(this).attr('href');
    var ans = confirm(msg + "に移動してもいいですか？");
    if (!ans){
      return false;
    }
  });
});
