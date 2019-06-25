var open = document.querySelector("#mobMenu");
var link = document.querySelector(".top-menu");
var close = document.querySelector(".mobail-menu-close");
var wrapper = document.querySelector(".wrapper-window");


open.addEventListener("click", function () { 
    link.classList.add("responsive"); 
    close.classList.add("mobmenu-close-block");
    open.classList.add("mobail-menuopen");
    wrapper.classList.add("wrapper-window-bg");
  });

close.addEventListener("click", function (){
  link.classList.remove("responsive");
  close.classList.remove("mobmenu-close-block");
  open.classList.remove("mobail-menuopen");
  wrapper.classList.remove("wrapper-window-bg");
});
wrapper.addEventListener("click", function () { 
    link.classList.remove("responsive");
  close.classList.remove("mobmenu-close-block");
  open.classList.remove("mobail-menuopen");
  wrapper.classList.remove("wrapper-window-bg");
  });

