(function (app) {
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
    {element: '.color-holder-hex1', color: '#C94436'}
  ];

  var iterateToNum = 18;

  var generateRandomColorBlocks = function () {
    for (var i = 0; i < colorTests.length; i++) {
      var wrapperEl = document.querySelector(colorTests[i].element);
      var colorType = colorTests[i].color;

      for (var j = 0; j < iterateToNum; j++) {
        var colorHex = app.randomColor(colorType);
        var colorEl = document.createElement('div');
        colorEl.classList.add('color-ball');
        colorEl.style.background = colorHex;
        colorEl.innerHTML = '<span class="color-value">' + colorHex + '</span>';
        wrapperEl.append(colorEl);
      }
    }
  };

  generateRandomColorBlocks();
})(window.app = window.app || {});
