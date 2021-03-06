"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showLoading = showLoading;
exports.hideLoading = hideLoading;
exports.connectServer = connectServer;

/* eslint-disable */
var el = null;

function showLoading() {
  el = document.createElement('div');
  el.style.position = 'absolute';
  el.style.left = 0;
  el.style.top = '50%';
  el.style.marginTop = '-10px';
  el.style.width = '100%';
  el.style.background = '#fff1b8';
  el.style.zIndex = 2147483647000000;
  el.style.color = '#613400';
  el.style.textAlign = 'center';
  el.style.fontSize = '18px';
  el.style.fontFamily = 'Consolas, Menlo, Courier, monospace';
  el.style.padding = '8px 0';
  el.style.boxShadow = '0px 4px 8px rgba(254, 241, 184, 0.3)';
  el.innerHTML = 'Disconnected from the devServer, trying to reconnect...';
  document.body.appendChild(el);
}

function hideLoading() {
  el.parentNode.removeChild(el);
}

function connectServer(onSuccess) {
  var count = 0;

  function retry() {
    if (++count > 20) {
      el.innerHTML = 'Disconnected from the devServer.';
      return;
    }

    fetch(window.location.href).then(onSuccess).catch(function () {
      setTimeout(retry, 1000);
    });
  }

  retry();
}