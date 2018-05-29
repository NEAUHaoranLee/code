// this.addEventListener('install', function (event) {
//     console.log('Service Worker install');
// });
// this.addEventListener('activate', function (event) {
//   console.log('Service Worker activate');
// });
// this.addEventListener('message',function(event){
// 	console.log(event.data);
// });
this.addEventListener('message', function (event) {
  event.source.postMessage('this message is from test1.js, to page');
});