$(function(){
	$(":input[name='calc']").click(function(){
		var kikan, rishi, gankin;
		// 元金
		gankin = parseInt($(":input[name='gankin']").val());
		// 利子
		rishi = parseFloat($(":input[name='rishi']").val());
		// 期間
		kikan = parseFloat($(":input[name='kikan']").val());
		// 受取金額を計算
		var uketori = kinri(gankin, kikan, rishi);
		// 受け取り金額を表示
		$(":input[name='uketori']").val(uketori);
	});
});

//複利計算を行う
function kinri(gankin, kikan, rishi) {
	var uketori;
	uketori = gankin;
	for (var i=1; i <= kikan; i++ ) {
		uketori = uketori * (1 + rishi / 100);
	}
	return Math.round(uketori);
}
