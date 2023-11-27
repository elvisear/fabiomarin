window.onscroll = function () {
  scroll();
};
function scroll() {
  const btn = document.getElementById("btn-topo");
  if (document.documentElement.scrollTop > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}
function backToTop() {
  document.documentElement.scrollTop = 0;
}
