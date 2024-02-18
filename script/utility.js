function getElementId(element) {
  const elementId = document.getElementById(element);
  return elementId;
}
// convrert number function
function convertNumber(element) {
  const value = getElementId(element).innerText;
  const convertValue = parseFloat(value);
  return convertValue;
}

// setText element function

function setTextElement(element, value) {
  const textValue = getElementId(element);
  textValue.innerText = value;
}
