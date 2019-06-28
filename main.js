
// Fill circle border with color function
var transform_styles = ['-webkit-transform', '-ms-transform', 'transform'];

var rotation = 180; //make it global so you can toggle 0 and 180 between two functions
const circleFillAnimation = function () {
    var fill_rotation = rotation;
    var fix_rotation = rotation * 2;
    for (i in transform_styles) {
        $('.circle .fill, .circle .mask.full').css(transform_styles[i], 'rotate(' + fill_rotation + 'deg)');
        $('.circle .fill.fix').css(transform_styles[i], 'rotate(' + fix_rotation + 'deg)');
    }   
}

// Function that displays numbers 0 to 100 in an infinite loop
// At the same time it resets the circle fill animation
const numbers = () => {
  let start = 0;
  let end = rotation * 2 / 360 * 100;
  function loop() {
    setTimeout(function() {
      if (start <= end) {
        circleFillAnimation();
        document.querySelector('#gpa').textContent = start;
        start++;
        loop();
      } else {
        setTimeout(function() {
          rotation = 2;
          circleFillAnimation();
          document.querySelector('#gpa').textContent = 0;
          setTimeout(function() {
            start = 0;
            // rotation = 180;
            rotation = Math.floor(Math.random() * 180);
            end = rotation * 2 / 360 * 100;
            numbers();
          }, 4000)
        }, 2000)
      }
    }, 18)
  }
  loop();
}

numbers();