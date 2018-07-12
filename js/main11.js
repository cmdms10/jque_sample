$(document).ready(function() {
  $("input.label_better").label_better({
    position: "top", //表示位置を上下左右指定できます
    animationTime: 500, //アニメーション時間をミリ秒単位で指定できます
    easing: "ease-in-out", //アニメーションの方法を指定できます
    offset: 7, //ラベルの表示位置を調整できます
    hidePlaceholderOnFocus: true //フォーカス時の初期テキスト表示の有無
  });
});
