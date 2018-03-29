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
  };
})(window.app = window.app || {});
