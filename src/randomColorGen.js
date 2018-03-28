(function (app) {
  /**
  * @param {array} args - min (optional) and max value;
  */
  var randomNumber = function (args) {
    var max;
    var min = 0;
    if (arguments.length === 1) {
      max = arguments[0];
    } else {
      min = arguments[0];
      max = arguments[1];
    }
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  /**
  * @param {int} num - number to covert to a hex value
  */
  var numToHex = function (num) {
    var hexVal = num.toString(16).toUpperCase();
    return hexVal;
  };

  var randomHexValue = function () {
    var num = randomNumber(0, 15);
    return numToHex(num);
  };

  var randomDefaultHexValue = function () {
    var num = randomNumber(5, 13);
    return numToHex(num);
  };

  var randomLightHexValue = function () {
    var num = randomNumber(8, 14);
    return numToHex(num);
  };

  var randomPeakHexValue = function () {
    var num = randomNumber(13, 15);
    return numToHex(num);
  };

  var randomOffPeakHexValue = function () {
    var num = randomNumber(0, 7);
    return numToHex(num);
  };

  var randomColorDefault = function () {
    var color = '';
    for (var i = 0; i < 6; i++) {
      if (i % 2 === 0) {
        color += randomDefaultHexValue();
      } else {
        color += randomHexValue();
      }
    }
    return '#' + color;
  };

  var randomColorFull = function () {
    var color = '';
    for (var i = 0; i < 6; i++) {
      color += randomHexValue();
    }
    return '#' + color;
  };

  var randomColorLight = function () {
    var color = '';
    for (var i = 0; i < 6; i++) {
      if (i % 2 === 0) {
        color += randomLightHexValue();
      } else {
        color += randomHexValue();
      }
    }
    return '#' + color;
  };

  var randomColorSaturated = function () {
    var color = '';
    var saturatedPosition = randomNumber(3);
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 2; j++) {
        if (saturatedPosition === i + 1) {
          color += randomPeakHexValue();
        } else {
          color += randomOffPeakHexValue();
        }
      }
    }
    return '#' + color;
  };

  var randomColor = function (type) {
    type = (type == null) ? 'defualt' : type.toLowerCase();
    if (type === 'full') {
      return randomColorFull();
    } else if (type === 'light') {
      return randomColorLight();
    } else if (type === 'saturated') {
      return randomColorSaturated();
    }
    return randomColorDefault();
  };

  app.randomColor = randomColor;
})(window.app = window.app || {});
