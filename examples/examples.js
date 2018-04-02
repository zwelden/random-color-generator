(function (app) {
  var hexInputField = document.querySelector('.hex-input-field');
  var hexInputSubmit = document.querySelector('.hex-input-submit');
  var colorTests = [
    {element: '.color-holder-default', color: 'default'},
    {element: '.color-holder-full', color: 'full'},
    {element: '.color-holder-light', color: 'light'},
    {element: '.color-holder-saturated', color: 'saturated'},
    {element: '.color-holder-desaturated', color: 'desaturated'},
    {element: '.color-holder-dark', color: 'dark'},
    {element: '.color-holder-ultralight', color: 'ultralight'},
    {element: '.color-holder-red', color: 'red'},
    {element: '.color-holder-green', color: 'green'},
    {element: '.color-holder-blue', color: 'blue'},
    {element: '.color-holder-yellow', color: 'yellow'},
    {element: '.color-holder-grayscale', color: 'grayscale'}
  ];

  var iterateToNum = 18;

  var createColorBlockElement = function (colorType, wrapperEl) {
    var colorHex = app.randomColor(colorType);
    var colorEl = document.createElement('div');
    colorEl.classList.add('color-ball');
    colorEl.style.background = colorHex;
    colorEl.innerHTML = '<span class="color-value">' + colorHex + '</span>';
    wrapperEl.append(colorEl);
  };

  var generateRandomColorBlocks = function () {
    for (var i = 0; i < colorTests.length; i++) {
      var wrapperEl = document.querySelector(colorTests[i].element);
      var colorType = colorTests[i].color;

      for (var j = 0; j < iterateToNum; j++) {
        createColorBlockElement(colorType, wrapperEl);
      }
    }
  };

  var createHexInputColors = function (colorValue) {
    if (colorValue.charAt(0) !== '#' || colorValue.length !== 7) { return; }

    var wrapperEl = document.querySelector('.color-holder-hex1');
    wrapperEl.innerHTML = '';
    var colorType = colorValue;
    for (var j = 0; j < iterateToNum; j++) {
      createColorBlockElement(colorType, wrapperEl);
    }
  };

  hexInputSubmit.addEventListener('click', function () {
    var value = hexInputField.value;
    createHexInputColors(value);
  });

  hexInputField.addEventListener('keyup', function (e) {
    if (e.keyCode !== 13) { return; }

    var value = hexInputField.value;
    createHexInputColors(value);
  });

  generateRandomColorBlocks();
})(window.app = window.app || {});
