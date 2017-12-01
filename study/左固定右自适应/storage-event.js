/*
localstorage的监听事件
 */

 var oriSetItem = localStorage.setItem;
 localStorage.setItem = function(k, v) {
 	var se = document.createEvent("StorageEvent");
 	se.initStorageEvent('storage', false, false, k, null, v, null, null);
 	window.dispatchEvent(se);
 	oriSetItem.apply(this, arguments);
 }
