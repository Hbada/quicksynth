document.querySelectorAll("h3").forEach(function(el) {
  el.addEventListener("mouseenter", function() {
    this.style.color = "green";
  });
});
