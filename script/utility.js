function getElementId(element) {
  const elementId = document.getElementById(element);
  return elementId;
}
// convrert number function
function convertNumber(element, leftValue) {
  const value = getElementId(element).innerText;
  const convertValue = parseFloat(value);
  value.innerText = leftValue;
  return convertValue;
}

// setText element function

// function setTextElement (element, value){
//      const textValue =
// }
