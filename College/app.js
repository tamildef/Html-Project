let burger =  document.querySelector(".burger"),
 links = document.querySelector(".nav-links");
 TextArea = document.querySelector(".text-center");

 burger.addEventListener("click", () => {
    links.classList.toggle("nav-show");
    TextArea.classList.toggle("textareahide");
})