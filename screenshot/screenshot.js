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
function setHostname(hostname) {
  document.getElementById("hostname").innerHTML = hostname;
}
function setpath(path) {
  document.getElementById("pathname").innerHTML = path;
}
function setlogo(logo) {
  document.getElementById("logo").src = logo;
}