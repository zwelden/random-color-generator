(function (app) {

  var defaultColorSettings = {
    hueMin: 0,
    hueMax: 359, // in hsl circle 360 = 0
    satMin: 50,
    satMax: 65,
    lumMin: 45,
    lumMax: 60
  };

  var saturatedColorSettings = {
    hueMin: 0,
    hueMax: 359, // in hsl circle 360 = 0
    satMin: 70,
    satMax: 100,
    lumMin: 45,
    lumMax: 55
  };

  var lightColorSettings = {
    hueMin: 0,
    hueMax: 359, // in hsl circle 360 = 0
    satMin: 60,
    satMax: 75,
    lumMin: 75,
    lumMax: 85
  };

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

  /**
   * @param {array} colorSetting - color settings to be used for generating the rgb value
   *    - must contain and hueMin, hueMax, satMin, satMax, lumMin, lumMax

   */
  var randomHslValueSet = function (colorSettings) {
    var h = randomNumber(colorSettings.hueMin, colorSettings.hueMax);
    var s = randomNumber(colorSettings.satMin, colorSettings.satMax);
    var l = randomNumber(colorSettings.lumMin, colorSettings.lumMax);

    return app.colorConverter.hslToRgb(h, s, l);
  };

  var randomColorDefault = function () {
    var color = '';
    var rgb = randomHslValueSet(defaultColorSettings);
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
    var rgb = randomHslValueSet(lightColorSettings);
    color += app.colorConverter.rgbToHex(rgb);
    return '#' + color;
  };

  var randomColorSaturated = function () {
    var color = '';
    var rgb = randomHslValueSet(saturatedColorSettings);
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
    }
    return randomColorDefault();
  };

  app.randomColor = randomColor;
})(window.app = window.app || {});
