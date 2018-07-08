var proverbs = new Array(5);
proverbs[0] = "急がば回れ";
proverbs[1] = "<em><弘法/em>も筆の誤り";
proverbs[2] = "<em>時</em>は金なり";
proverbs[3] = "飼い<em>犬</em>に手をかまれる";
proverbs[4] = "義を見てせざるは<em>勇無き</em>なり";

$(function(){
  $('#btn1').click(function(){
    var num = Math.floor(proverbs.length * Math.random());
    $('#kotowaza').html(proverbs[num]);
  })
})
