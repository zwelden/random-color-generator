(function (app) {
  /**
  * color conversion functions via: https://stackoverflow.com/questions/2353211/hsl-to-rgb-color-conversion
  */

  var colorConverter = function () {
    /**
     * Converts an HSL color value to RGB. Conversion formula
     * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
     * Assumes h constrained in the set [0, 360] s, and l are contained in the set [0, 100] and
     * returns r, g, and b in the set [0, 255].
     *
     * @param   {number}  h       The hue
     * @param   {number}  s       The saturation
     * @param   {number}  l       The lightness
     * @return  {Array}           The RGB representation
     */
    var hslToRgb = function (h, s, l) {
      h = h / 360;
      s = s / 100;
      l = l / 100;
      var r, g, b;

      if (s === 0) {
        r = g = b = l; // achromatic
      } else {
        var hue2rgb = function hue2rgb (p, q, t) {
          if (t < 0) t += 1;
          if (t > 1) t -= 1;
          if (t < 1 / 6) return p + (q - p) * 6 * t;
          if (t < 1 / 2) return q;
          if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
          return p;
        };

        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
      }

      return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
    };

    /**
     * Converts an RGB color value to HSL. Conversion formula
     * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
     * Assumes r, g, and b are contained in the set [0, 255] and
     * returns h, s, and l in the set [0, 1].
     *
     * @param   {number}  r       The red color value
     * @param   {number}  g       The green color value
     * @param   {number}  b       The blue color value
     * @return  {Array}           The HSL representation
     */
    var rgbToHsl = function (r, g, b) {
      r /= 255;
      g /= 255;
      b /= 255;
      var max = Math.max(r, g, b);
      var min = Math.min(r, g, b);
      var h;
      var s;
      var l = (max + min) / 2;

      if (max === min) {
        h = s = 0; // achromatic
      } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r: h = (g - b) / d + (g < b ? 6 : 0); break;
          case g: h = (b - r) / d + 2; break;
          case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
      }

      return [h, s, l];
    };


    /**
     * @param {array} rgb - an rgb color array
     *
     * @return {string} - a hex code string
     */
    var rgbToHex = function (rgb) {
      var numToHex = function (num) {
        var hexVal = num.toString(16).toUpperCase();
        if (hexVal.length === 1) {
          hexVal = '0' + hexVal;
        }
        return hexVal;
      };

      var hexR = numToHex(rgb[0]);
      var hexG = numToHex(rgb[1]);
      var hexB = numToHex(rgb[2]);

      return hexR + hexG + hexB;
    };

    return {
      hslToRgb: hslToRgb,
      rgbToHsl: rgbToHsl,
      rgbToHex: rgbToHex
    };
  };

  app.colorConverter = colorConverter();
})(window.app = window.app || {});
