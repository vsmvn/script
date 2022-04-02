function generate() {
  var e, n = document.getElementById("downloadx"),
    l = 65,
    d = document.createElement("span");
  n.parentNode.replaceChild(d, n), e = setInterval(function() {
    --l < 0 ? (d.parentNode.replaceChild(n, d), clearInterval(e), n.style.display = "block") : (d.innerHTML = "<center>Vui lòng chờ " + l.toString() + " giây...</center>")
  }, 1e3)
}
generate();
