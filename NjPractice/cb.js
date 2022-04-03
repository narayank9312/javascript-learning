//Deep about Event Listner

//Closures Demo with Event listeners

//scope Demo with Event listeners

//garbage collection & removeEventListener
// document.getElementById("clickMe")
// .addEventListener("click",function xyz(){
//     console.log("button clicked")
// })

function attachEventListener() {
  let count = 0;
  document.getElementById("clickMe").addEventListener("click", function xyz() {
    console.log("button clicked", ++count);
  });
}
attachEventListener();
