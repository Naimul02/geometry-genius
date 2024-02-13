function calculatePantagonArea() {
  const perimeter = getInputValueById("pantagon-perimeter");
  const apothem = getInputValueById("pantegon-apothem");

  const area = 0.5 * perimeter * apothem;
  setInnerTextById("pantagon-area", area);
}

function getInputValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputValueText = inputField.value;
  const value = parseFloat(inputValueText);
  return value;
}
function setInnerTextById(elementId, area) {
  const element = document.getElementById(elementId);
  element.innerText = area;
}
