function getCookieValue(cookieName) {
	var cookieValue = document.cookie;
	var cookieStartAt = cookieValue.indexOf("" + cookieName + "=");
	if (cookieStartAt == -1) {
		cookieStartAt = cookieValue.indexOf(cookieName + "=");
	}
	if (cookieStartAt == -1) {
		cookieValue = null;
	} else {
		cookieStartAt = cookieValue.indexOf("=", cookieStartAt) + 1;
		cookieEndAt = cookieValue.indexOf(";", cookieStartAt);
		if (cookieEndAt == -1) {
			cookieEndAt = cookieValue.length;
		}
		cookieValue = unescape(cookieValue
				.substring(cookieStartAt, cookieEndAt));// 解码latin-1
	}
	return cookieValue;
}
with (webkit) {
	includeJs("lib/jquery.min.js");
	includeJs("lib/utils.js");
	var start = "2016-09-01";
	var end = "2016-09-15";

	$(document)
			.ready(
					function() {
						var startToend = start + "---" + end;
			             if (window.location.href
										.startsWith("https://")) {
							var mydate = new Date();
							location.href = "http://qzone.qq.com/";
						} else if (window.location.href
										.startsWith("http://qzone.qq.com/")) {
							/**
							 * 执行抓取
							 * https://intl.alipay.com/ihome/account/fund.htm#start=2016-08-31
							 * &end=2016-09-07&bizType=all&currentPage=1&transDirection=all
							 * &_t=1473240276072
							 */
							dollect("USD", 1);

						} else {
							log("进入例外..." + window.location);
						}

					});

	var dollect = function(currency, currentPage) {

		log("进入方法 ===>>" + getCookieValue("ctoken"));
		var mydate = new Date();
		$.ajax({
			url : "https://www.baidu.com/",
			type : 'POST',
			success : function(data) {
			console.log(JSON.stringify(data));
			},
			error : function(error) {
				dollect(currency, currentPage);
				log("出现错误异常" + JSON.stringify(error));
			}
		});
	};
}