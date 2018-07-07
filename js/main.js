$(function(){
  $('h1').css('background-color','yellow');

  $('strong,em').css({
    'font-size':'50px',
    'font-style':'italic',
    'font-weight':'200',
    'color':'blue'
  });

  $('div#footer').css('text-align','right');

  $('li.str1').css('font-weight','bold');

  $('ul#list strong').css('font-size','70px');

  $('li *').css('text-decoration','underline');
});
