const handleHamburger = () => {
  document
    .getElementsByClassName("navigation__right")[0]
    .classList.toggle("hamburger__active");
  document.getElementsByClassName("hamburger")[0].classList.toggle("toggle");
};
var modal = document.getElementById("myModal");

const yes = () => {
  modal.style.display = "none";
  document.querySelector("body").classList.remove("no__scroll");
  var date = new Date();
  date.setDate(date.getDate() + 1);
  document.cookie = `username=Shuhin; expires=${date}`;
};

const under = () => {
  modal.style.display = "none";
  document.querySelector("body").classList.remove("no__scroll");
};
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

window.setInterval(() => {
  console.log(document.cookie);
  if (!document.cookie) {
    modal.style.display = "block";
    document.querySelector("body").classList.add("no__scroll");
  }
}, 2000);

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
