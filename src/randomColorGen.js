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

  var randomRadian = function (minRadian, maxRadian) {
    return Math.random() * (maxRadian - minRadian + 1) + minRadian;
  };

  var radianToDegree = function (radians) {
    return Math.floor(radians * (180 / Math.PI));
  };

  var degreeToRadians = function (degrees) {
    return degrees * (Math.PI / 180);
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

  var minMaxFromValue = function (value) {
    var min;
    var max;
    var diff;
    if (value <= 90 && value >= 10) {
      min = value - 10;
      max = value + 10;
    } else if (value > 90) {
      diff = 100 - value;
      min = value - (20 - diff);
      max = 100;
    } else if (value < 10) {
      min = 0;
      max = value + (20 - value);
    }
    return [min, max];
  };

  var randomColorFromGiven = function (hexValue) {
    var hsl = app.colorConverter.hexToHsl(hexValue);
    var hueInRad = degreeToRadians(hsl[0]);
    var hueMinRad = hueInRad - 0.1;
    var hueMaxRad = hueInRad + 0.1;
    var satMinMax = minMaxFromValue(hsl[1]);
    var satMin = satMinMax[0];
    var satMax = satMinMax[1];
    var lumMinMax = minMaxFromValue(hsl[2]);
    var lumMin = lumMinMax[0];
    var lumMax = lumMinMax[1];

    var hRad = randomRadian(hueMinRad, hueMaxRad);
    var h = radianToDegree(hRad);
    var s = randomNumber(satMin, satMax);
    var l = randomNumber(lumMin, lumMax);

    return app.colorConverter.hslToRgb(h, s, l);
  };

  var generateRandomColor = function (type) {
    var color = '';
    var rgb;
    if (type.charAt(0) === '#' && type.length === 7) {
      rgb = randomColorFromGiven(type);
    } else if (type === 'red') {
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
