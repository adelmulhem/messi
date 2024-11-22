let sab = document.querySelector(".sab");
let list = document.querySelector(".list--header");
let close = document.querySelector(".close");
let nav = document.querySelector(".nav--header");

sab.onclick = function() {
    list.classList.add("open");
};

close.onclick = function() {
    this.parentElement.classList.remove("open");
};