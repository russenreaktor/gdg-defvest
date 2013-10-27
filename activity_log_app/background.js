// Copyright (c) 2013 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function recordDevice(device) {
  console.log("recordDevice", device);
}

chrome.app.runtime.onLaunched.addListener(function() {
  console.log("onLaunched:begin");
chrome.app.window.create('window.html', {'width': 400,'height': 500});
  chrome.bluetooth.startDiscovery({deviceCallback: recordDevice});
  //chrome.bluetooth.stopDiscovery();
console.log("onLaunched:end");
});
