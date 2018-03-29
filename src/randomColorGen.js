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

  /**
   * @param {array} colorSetting - color settings to be used for generating the rgb value
   *    - must contain and hueMin, hueMax, satMin, satMax, lumMin, lumMax
   * @return {array} - rgb color array
   */
  var randomHslValueSet = function (colorSettings) {
    var h = randomNumber(colorSettings.hueMin, colorSettings.hueMax);
    var s = randomNumber(colorSettings.satMin, colorSettings.satMax);
    var l = randomNumber(colorSettings.lumMin, colorSettings.lumMax);

    return app.colorConverter.hslToRgb(h, s, l);
  };

  var randomColorDefault = function () {
    var color = '';
    var rgb = randomHslValueSet(app.colorSettings.default);
    color += app.colorConverter.rgbToHex(rgb);
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
    var rgb = randomHslValueSet(app.colorSettings.light);
    color += app.colorConverter.rgbToHex(rgb);
    return '#' + color;
  };

  var randomColorSaturated = function () {
    var color = '';
    var rgb = randomHslValueSet(app.colorSettings.saturated);
    color += app.colorConverter.rgbToHex(rgb);
    return '#' + color;
  };

  var randomColorDark = function () {
    var color = '';
    var rgb = randomHslValueSet(app.colorSettings.dark);
    color += app.colorConverter.rgbToHex(rgb);
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
    } else if (type === 'dark') {
      return randomColorDark();
    }
    return randomColorDefault();
  };

  app.randomColor = randomColor;
})(window.app = window.app || {});
