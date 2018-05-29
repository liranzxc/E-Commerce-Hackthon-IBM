// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function setScreenshotUrl(url) {
  document.getElementById('target').src = url;


  var img = document.createElement('img');
  img.src = url;

  var a = document.createElement('a');
  a.setAttribute("download", "mypic.jpeg");
  a.setAttribute("href", url);
  a.appendChild(img);
  a.click();



}
function setTitle(title)
{
  document.getElementById("title").innerHTML ="Title : " + title;
}
function setHostname(hostname) {
  document.getElementById("hostname").innerHTML = "Hostname : " + hostname;
}
function setpath(path) {
  document.getElementById("pathname").innerHTML = "Path : "+ path;
}
function setlogo(logo) {
  document.getElementById("logo").src = logo;
}
window.addEventListener('load', function load(event){
  var createButton = document.getElementById('send');
  createButton.addEventListener('click', function() { 
  
    var sock = new WebSocket("ws://localhost:5001");
    sock.onmessage = function(e){ console.log(e.data); };
    sock.onopen = function(e)
    {
      let obj = {
          hostname : document.getElementById("hostname").innerHTML,
          path : document.getElementById("pathname").innerHTML,
          image : document.getElementById("target").src

      }
      let data = JSON.stringify(obj);  
      sock.send(data);
      

    } 
  });
});
