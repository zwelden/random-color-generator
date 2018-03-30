(function (app) {
  /**
  * @param {array} args - min (optional) and max value;
  */
  var randomNumber = function (args) {
    var max;
    var min = 0;
    if (arguments.length === 1) {
      max = arguments[0];
    } else if (arguments.length === 4) {
      var min1 = arguments[0];
      var max1 = arguments[1];
      var min2 = arguments[2];
      var max2 = arguments[3];
      var highLow = Math.round(Math.random());
      if (highLow === 0) {
        return Math.floor(Math.random() * (max1 - min1 + 1) + min1);
      } else {
        return Math.floor(Math.random() * (max2 - min2 + 1) + min2);
      }
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

  var randomRedHslValueSet = function (colorSettings) {
    var h = randomNumber(colorSettings.hueMin1, colorSettings.hueMax1, colorSettings.hueMin2, colorSettings.hueMax2);
    var s = randomNumber(colorSettings.satMin, colorSettings.satMax);
    var l = randomNumber(colorSettings.lumMin, colorSettings.lumMax);

    return app.colorConverter.hslToRgb(h, s, l);
  };

  var randomColorFull = function () {
    var color = '';
    for (var i = 0; i < 6; i++) {
      color += randomHexValue();
    }
    return '#' + color;
  };

  var generateRandomColor = function (type) {
    var color = '';
    var rgb;
    if (type === 'red') {
      rgb = randomRedHslValueSet(app.colorSettings.red);
    } else {
      rgb = randomHslValueSet(app.colorSettings[type]);
    }
    color += app.colorConverter.rgbToHex(rgb);
    return '#' + color;
  };

  var randomColor = function (type) {
    type = (type == null) ? 'default' : type.toLowerCase();
    if (type === 'full') {
      return randomColorFull();
    } else {
      return generateRandomColor(type);
    }
  };

  app.randomColor = randomColor;
})(window.app = window.app || {});
