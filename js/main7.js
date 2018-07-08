var proverbs = new Array(5);
proverbs[0] = "急がば回れ";
proverbs[1] = "<em>弘法</em>も筆の誤り";
proverbs[2] = "<em>時</em>は金なり";
proverbs[3] = "飼い<em>犬</em>に手をかまれる";
proverbs[4] = "義を見てせざるは<em>勇無き</em>なり";

$(function() {
  $("#changeKotowazaBtn").click(function() {
    var num = Math.floor(proverbs.length * Math.random());
    $("#kotowaza").html(proverbs[num]);
  });
  // ことわざの表示/非表示を切り替える
  $("#showHideBtn").toggle(function() {
    $("#kotowaza:not(:animated)").hide("slow");
    $("#showHideBtn").val("ことわざを表示する");
  }, function() {
    $("#kotowaza:not(:animated)").show("slow");
    $("#showHideBtn").val("ことわざを消す");
  })

  // 占いを表示
  $("#showUnsei").click(function() {
    var unseis = ["大吉", "中吉", "凶"];
    unsei = unseis[Math.floor(unseis.length * Math.random())];
    $("body").append("<div class='unsei'>" + unsei + "</div>");
  });

  //最後の占いを消去
  $("#removeUnsei").click(function() {
    $("div.unsei:last").remove();
  })

});
