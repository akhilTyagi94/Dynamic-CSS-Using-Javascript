let textContainer = document.getElementById('text-container');
let colorBox = document.getElementById('colorbox');
let colorChangeButton = document.getElementById('colorchange');
let fontSizeRange = document.getElementById('fontsize');
let underlineButton = document.getElementById('underline');
let italicButton = document.getElementById('italic');
let boldButton = document.getElementById('bold');
let fontList = document.getElementById('list');
let getStyleButton = document.getElementById('getstyle');
let cssPropsParagraph = document.getElementById('css-props');
let fontSizeValue = fontSizeRange.value;
textContainer.style.fontSize = `${fontSizeValue}px`;

colorChangeButton.addEventListener('click', () => {
  let colorValue = colorBox.value;
  textContainer.style.color = colorValue;
});

fontSizeRange.addEventListener('input', () => {
  let fontSizeValue = fontSizeRange.value;
  textContainer.style.fontSize = `${fontSizeValue}px`;
});

underlineButton.addEventListener('click', () => {
  textContainer.style.textDecoration =
    textContainer.style.textDecoration === 'underline' ? 'none' : 'underline';
});

italicButton.addEventListener('click', () => {
  textContainer.style.fontStyle =
    textContainer.style.fontStyle === 'italic' ? 'normal' : 'italic';
});

boldButton.addEventListener('click', () => {
  textContainer.style.fontWeight =
    textContainer.style.fontWeight === 'bold' ? 'normal' : 'bold';
});

fontList.addEventListener('change', () => {
  let fontValue = fontList.value;
  textContainer.style.fontFamily = fontValue;
});

let rangeInputs = document.querySelectorAll('input[type="range"]');

function handleInputChange(e) {
  let target = e.target;
  if (e.target.type !== 'range') {
    target = document.getElementById('range');
  }
  let min = target.min;
  let max = target.max;
  let val = target.value;

  target.style.backgroundSize = ((val - min) * 100) / (max - min) + '% 100%';
}

rangeInputs.forEach(input => {
  input.addEventListener('input', handleInputChange);
});

getStyleButton.addEventListener('click', () => {
  let cssProps = `color: ${textContainer.style.color}; font-size: ${textContainer.style.fontSize}; text-decoration: ${textContainer.style.textDecoration}; font-style: ${textContainer.style.fontStyle}; font-weight: ${textContainer.style.fontWeight}; font-family: ${textContainer.style.fontFamily};`;
  cssPropsParagraph.textContent = cssProps;
});
