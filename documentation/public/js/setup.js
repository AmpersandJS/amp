/*global window, document*/
/**
 * Fallback implementation.
 */

var prev = new Date().getTime();
function fallback(fn) {
  var curr = new Date().getTime();
  var ms = Math.max(0, 16 - (curr - prev));
  var req = setTimeout(fn, ms);
  prev = curr;
  return req;
}


var raf = window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.oRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  fallback;

// grab all our h* tags
var aTags = document.querySelectorAll('.nav-docs a');
var hTags = document.querySelector('.docs-content').querySelectorAll('a.anchor');

function markActive(selected) {
  var id = selected && selected.name;
  var found;
  if (id) {
    window.selected = selected;
    Array.prototype.forEach.call(aTags, function (a) {
      if (a.hash.slice(1) === id) {
        found = a;
        a.classList.add('active');
      } else {
        a.classList.remove('active');
      }
    });
  }
}

function selectCurrent() {
  var found;
  var i = 0;
  var l = hTags.length;
  var scroll = document.body.scrollTop || window.scrollY;
  if (scroll < hTags[0].offsetTop) {
    found = hTags[0];
  } else {
    for (; i < l; i++) {
      if (hTags[i].offsetTop > scroll) {
        found = hTags[i - 1];
        break;
      }
    }
  }
  if (found) markActive(found);
}

window.onscroll = function () {
  raf(selectCurrent);
};

selectCurrent();
