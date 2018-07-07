$(function(){
  $('li:first').css('font-size','200%');
  $('li:last').css('font-size','200%');
  //奇数
  $('li:odd').css('background-color','yellow');
  //偶数
  $('li:even').css('background-color','pink');

  $("li:contains('jQuery')").css('text-align','right');

});
