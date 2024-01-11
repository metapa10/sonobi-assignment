
export function submitBidRequest(placement_id, csv_of_sizes) {
        let url = "https://apex.go.sonobi.com/trinity.json";
        var key_maker = "{\"dom_1\":\"" + placement_id;

        if (csv_of_sizes !== "")
        {
          key_maker += "|" +  csv_of_sizes;
        }

        key_maker += "\"}"

        url += '?' + ( new URLSearchParams( {key_maker: key_maker, s: Math.floor(Math.random() * 100), ref: window.location.href, pv: "metapa" } ).toString());

         console.log(url);
         document.getElementById("bid_request").innerHTML = url;
         return fetch(url, {  credentials: "include", mode: 'cors' }).then(response => response.json())
    };