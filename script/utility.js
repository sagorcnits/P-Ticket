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

// added function

function added(element) {
  const elementAdd = getElementId(element);
  elementAdd.classList.add("hidden");
}
// remove function
function remove(element) {
  const elementAdd = getElementId(element);
  elementAdd.classList.remove("hidden");
}
