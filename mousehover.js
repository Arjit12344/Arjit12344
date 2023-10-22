// in  order to run this code, you need to create to div with id center in html file and connect this js file with that html file
/* write the folllowing css code in the html file via external linking or internal linking
   #center{
  border: 2px red solid;
  height: 100px;
  width: 250px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
   }
*/
let a = document.querySelector("#center");
let b = a.getBoundingClientRect();

a.addEventListener("mousemove", function(details){
  
  let rect = a.getBoundingClientRect();
  if (details.clientX - rect.left < rect.width/2 && details.clientX - rect.left> rect.width/3){
    gsap.to(a, {
      backgroundColor : "green",
      ease : Power4,
    })
  }
  else if (details.clientX - rect.left < rect.width/2){
    let redcolor = gsap.utils.mapRange(0, rect.width/2, 255, 0, details.clientX - rect.left)
    gsap.to(a, {
      backgroundColor : `rgb(${redcolor}, 0, 0)` ,
      ease : Power4
    })
  
  } 
  
  else {
    let bluecolor = gsap.utils.mapRange( rect.width/2, rect.right, 0, 255, details.clientX - rect.width)
    gsap.to(a, {
      backgroundColor : `rgb(0, 0, ${bluecolor})` ,
      ease : Power4
    })
  }
})
a.addEventListener("mouseleave", function(){
  gsap.to(a, {
    backgroundColor : "white",
    // ease : P,
  })
})
