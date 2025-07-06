let title = document.getElementById("h1");
title.textContent = "JavaScript Learning Process";

let pStyle = document.querySelectorAll("p.intro");
pStyle.textContent = "I'm currently learning JavaScript as a FrontEnd Developer";

let click = document.getElementById("signup");
click.addEventListener(
  "click",
  function() {
    alert("You've successfully signed up!");
  });
  
  let h1 = document.getElementById("h1");
  h1.addEventListener("mouseover", function() {h1.style.background = "yellow";});
  h1.addEventListener("mouseleave", function() {h1.style.background = "white";})