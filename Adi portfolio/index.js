let typed = new Typed(".multiple-text", {
  strings: [
    "Frontend Developer",
    "Backend Developer",
    "Problem Solver",
    "Guitarist",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 100,
  loop: true,
});


let button = document.querySelector("body a");
button.addEventListener("click",()=>{
   const span = document.querySelector("a span");
   button.style.paddingRight = '10px';
   span.style.visibility = "visible";
   setTimeout(()=>{
    span.style.visibility="hidden";
    button.style.transition=".3s ease-in-out";
    button.style.paddingRight="0px";
   },3000);

})