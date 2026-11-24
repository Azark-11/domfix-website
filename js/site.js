document.getElementById('yr').textContent = new Date().getFullYear();
document.querySelectorAll('[data-copy]').forEach(function (b) {
  b.addEventListener('click', function () {
    var el = document.getElementById(b.getAttribute('data-copy'));
    var t = el.textContent.trim();
    var done = function () { var o = b.textContent; b.textContent = 'Kopierat'; setTimeout(function () { b.textContent = o; }, 1600); };
    var fallback = function () { var r = document.createRange(); r.selectNodeContents(el); var s = getSelection(); s.removeAllRanges(); s.addRange(r); };
    try { navigator.clipboard.writeText(t).then(done, fallback); } catch (e) { fallback(); }
  });
});
