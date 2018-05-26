let bt = document.getElementById("pushme");
let image = document.getElementById("icon");
var getLocation = function(href) {
    var l = document.createElement("a");
    l.href = href;
    return l;
};

bt.onclick = function(element)
{
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        var url = tabs[0].url;

        var l = getLocation(url);

        document.getElementById("currectlink").innerHTML=l.hostname;
        document.getElementById("host").innerHTML = l.pathname
       
        getImage(url);
        
      





    });
}

function getImage(url) {
    image.src = url + "/apple-touch-icon.png";
    image.onerror = function() {
        image.src = "https://plus.google.com/_/favicon?domain_url=" + url;
    }
}



