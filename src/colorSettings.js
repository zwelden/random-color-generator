(function (app) {
  app.colorSettings = {
    default: {
      hueMin: 0,
      hueMax: 359, // in hsl circle 360 = 0
      satMin: 50,
      satMax: 65,
      lumMin: 45,
      lumMax: 60
    },
    saturated: {
      hueMin: 0,
      hueMax: 359, // in hsl circle 360 = 0
      satMin: 70,
      satMax: 100,
      lumMin: 45,
      lumMax: 55
    },
    light: {
      hueMin: 0,
      hueMax: 359, // in hsl circle 360 = 0
      satMin: 60,
      satMax: 75,
      lumMin: 75,
      lumMax: 85
    },
    dark: {
      hueMin: 0,
      hueMax: 359, // in hsl circle 360 = 0
      satMin: 50,
      satMax: 65,
      lumMin: 25,
      lumMax: 40
    },
    ultralight: {
      hueMin: 0,
      hueMax: 359, // in hsl circle 360 = 0
      satMin: 60,
      satMax: 85,
      lumMin: 90,
      lumMax: 95
    },
    desaturated: {
      hueMin: 0,
      hueMax: 359, // in hsl circle 360 = 0
      satMin: 15,
      satMax: 25,
      lumMin: 60,
      lumMax: 70
    },
    red: {
      hueMin1: 350,
      hueMax1: 359, // in hsl circle 360 = 0
      hueMin2: 0,
      hueMax2: 9,
      satMin: 40,
      satMax: 85,
      lumMin: 25,
      lumMax: 85
    },
    green: {
      hueMin: 110,
      hueMax: 130, // in hsl circle 360 = 0\
      satMin: 30,
      satMax: 85,
      lumMin: 20,
      lumMax: 85
    },
    blue: {
      hueMin: 225,
      hueMax: 255, // in hsl circle 360 = 0\
      satMin: 30,
      satMax: 85,
      lumMin: 20,
      lumMax: 85
    }
  };
})(window.app = window.app || {});
