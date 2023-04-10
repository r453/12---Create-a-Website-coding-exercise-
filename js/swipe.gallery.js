// Sivun vaihto pyyhkäisemällä //
// https://stackoverflow.com/questions/45648886/swipe-left-right-for-a-webpage

var start = null;
window.addEventListener("touchstart",function(event){
  if(event.touches.length === 1){
     start = event.touches.item(0).clientX;
   }else{
     start = null;
   }
 });

window.addEventListener("touchend",function(event){
  // tähän ehdotettiin stackoverflow:ssa relatiivista arvoa mutta en saanut siihen oikein järkevää toiminnallisuutta eri näytöillä //
  var offset = 100;
    if(start){
      var end = event.changedTouches.item(0).clientX;
      if(end > start + offset){
        location.replace("./about.html")
      }
      if(end < start - offset ){
        location.replace("./contact.html")
      }
   }
 });