const seatBtn = document.querySelectorAll(".seat");
// limitedcounter
let limitedTicketCount = 0;
// convert number
let seatLeft = convertNumber("total-seat");
let seatCount = convertNumber("seat-count");
let totalPrice = convertNumber("total-price");
let grandPrice = convertNumber("grand-price");
// seat looping
for (let seat of seatBtn) {
  seat.addEventListener("click", function (event) {
    const targetValue = event.target;
    if (!targetValue.style.backgroundColor) {
      limitedTicketCount += 1;
      if (limitedTicketCount > 4) {
        console.log("sorry");
      } else {
        event.target.style.backgroundColor = "#1DD100";
        updatCount();
        addSeatItem(event.target.innerText);
      }
    }
  });
}

// count updating function

function updatCount() {
  // counting
  seatLeft -= 1;
  seatCount += 1;
  totalPrice += 550;
  grandPrice += 550;
  // setText call
  setTextElement("total-seat", seatLeft);
  setTextElement("seat-count", seatCount);
  setTextElement("total-price", totalPrice);
  setTextElement("grand-price", grandPrice);
  // apply btn enable & disable
  if (limitedTicketCount >= 4) {
    getElementId("apply-btn").disabled = false;
    getElementId("apply-btn").style.backgroundColor = "#1DD100";
  }
}

// add item function
function addSeatItem(element) {
  const seatItemList = getElementId("seat-item-list");
  const div = document.createElement("div");
  const nameTag = document.createElement("p");
  const economoyTag = document.createElement("p");
  const priceTag = document.createElement("p");
  // setvalue
  nameTag.innerText = element;
  economoyTag.innerText = "Economoy";
  priceTag.innerText = 550;
  div.appendChild(nameTag);
  div.appendChild(economoyTag);
  div.appendChild(priceTag);
  seatItemList.appendChild(div);
}
