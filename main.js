$('head style[type="text/css"]').attr('type', 'text/less');
var transform_styles = ['-webkit-transform', '-ms-transform', 'transform'];

window.randomize = function () {
    var rotation = 180;
    var fill_rotation = rotation;
    var fix_rotation = rotation * 2;
    for (i in transform_styles) {
        $('.circle .fill, .circle .mask.full').css(transform_styles[i], 'rotate(' + fill_rotation + 'deg)');
        $('.circle .fill.fix').css(transform_styles[i], 'rotate(' + fix_rotation + 'deg)');
    }
}
setTimeout(window.randomize, 200);

let start = 0;

function loop() {
  setTimeout(function() {
    if (start <= 100) {
      document.querySelector('#gpa').textContent = start;
    }
    start++;
    loop();
  }, 18)
}
loop();