(function (app) {
  var colorHolderDefaultEl = document.querySelector('.color-holder-default');
  var colorHolderFullEl = document.querySelector('.color-holder-full');
  var colorHolderLightEl = document.querySelector('.color-holder-light');
  var colorHolderSaturatedEl = document.querySelector('.color-holder-saturated');
  var colorHolderDarkEl = document.querySelector('.color-holder-dark');
  var iterateToNum = 24;

  for (var i = 0; i < iterateToNum; i++) {
    var color = app.randomColor();
    var colorEl = document.createElement('div');
    colorEl.classList.add('color-ball');
    colorEl.style.background = color;
    colorEl.innerHTML = '<span class="color-value">' + color + '</span>';
    colorHolderDefaultEl.append(colorEl);
  }

  for (var j = 0; j < iterateToNum; j++) {
    var colorFull = app.randomColor('full');
    var colorFullEl = document.createElement('div');
    colorFullEl.classList.add('color-ball');
    colorFullEl.style.background = colorFull;
    colorFullEl.innerHTML = '<span class="color-value">' + colorFull + '</span>';
    colorHolderFullEl.append(colorFullEl);
  }

  for (var k = 0; k < iterateToNum; k++) {
    var colorLight = app.randomColor('light');
    var colorLightEl = document.createElement('div');
    colorLightEl.classList.add('color-ball');
    colorLightEl.style.background = colorLight;
    colorLightEl.innerHTML = '<span class="color-value">' + colorLight + '</span>';
    colorHolderLightEl.append(colorLightEl);
  }

  for (var m = 0; m < iterateToNum; m++) {
    var colorSaturated = app.randomColor('saturated');
    var colorSaturatedEl = document.createElement('div');
    colorSaturatedEl.classList.add('color-ball');
    colorSaturatedEl.style.background = colorSaturated;
    colorSaturatedEl.innerHTML = '<span class="color-value">' + colorSaturated + '</span>';
    colorHolderSaturatedEl.append(colorSaturatedEl);
  }

  for (var n = 0; n < iterateToNum; n++) {
    var colorDark = app.randomColor('dark');
    var colorDarkEl = document.createElement('div');
    colorDarkEl.classList.add('color-ball');
    colorDarkEl.style.background = colorDark;
    colorDarkEl.innerHTML = '<span class="color-value">' + colorDark + '</span>';
    colorHolderDarkEl.append(colorDarkEl);
  }
})(window.app = window.app || {});
