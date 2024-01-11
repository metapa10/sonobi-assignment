 export function submitImpressionRequest(aid){
    var url = "https://apex.go.sonobi.com/sbi.js";
    url += '?' + ( new URLSearchParams( { ref: "https://test.com", aid: aid, as: "null"}).toString());
    //console.log(url);
    document.getElementById("impression_request").innerHTML = url;
    return fetch(url, {  credentials: "include", mode: 'cors',  headers: { 'Content-Type': 'text/javascript',} }).then(response => response.text())
  }