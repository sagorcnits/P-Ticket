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
        alert("You all ready 4 Seat selected");
      } else {
        event.target.style.backgroundColor = "#1DD100";
        event.target.style.color = "white";
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
  setTextElement("grand-price", totalPrice);
  // apply btn enable & disable
  if (limitedTicketCount >= 4) {
    getElementId("apply-btn").disabled = false;
    getElementId("cupon-code").disabled = false;
    getElementId("apply-btn").style.backgroundColor = "#1DD100";
  }
  validationNextBtn();
}

// apply cupon function

getElementId("apply-btn").addEventListener("click", function () {
  const cupon = getElementId("cupon-code").value;
  if (cupon === "NEW15") {
    let discountPrice = (totalPrice * 15) / 100;
    getElementId("grand-price").innerText = grandPrice - discountPrice;
    getElementId("cupon-input").classList.add("hidden");
    getElementId("discount-price").innerText = discountPrice;
    getElementId("discount").classList.remove("hidden");
  } else if (cupon === "Couple 20") {
    let discountPrice = (totalPrice * 20) / 100;
    getElementId("grand-price").innerText = grandPrice - discountPrice;
    getElementId("cupon-input").classList.add("hidden");
    getElementId("discount-price").innerText = discountPrice;
    getElementId("discount").classList.remove("hidden");
  } else {
    console.log("You are wrong");
  }
});

// add item function
function addSeatItem(element) {
  const seatItemList = getElementId("seat-item-list");
  const div = document.createElement("div");
  const nameTag = document.createElement("p");
  const economoyTag = document.createElement("p");
  const priceTag = document.createElement("p");
  //  seatvalue
  nameTag.innerText = element;
  nameTag.style.width = "70px";
  economoyTag.innerText = "Economoy";
  priceTag.innerText = 550;
  div.appendChild(nameTag);
  div.appendChild(economoyTag);
  div.appendChild(priceTag);
  seatItemList.appendChild(div);
}

// next btn function
const phoneNumber = getElementId("phone-number");
phoneNumber.addEventListener("keyup", function () {
  validationNextBtn();
});

// next btn  validation
function validationNextBtn() {
  if (getElementId("phone-number").value === "" || limitedTicketCount <= 0) {
    getElementId("next-btn").disabled = true;
  } else {
    getElementId("next-btn").disabled = false;
  }
}

// sucsess modal function

getElementId("next-btn").addEventListener("click", function () {
  added("head");
  added("main");
  added("footer");
  remove("sucsess-modal");
});

// continue function

// getElementId("continue").addEventListener("click", function () {
//   remove("head");
//   remove("main");
//   remove("footer");
//   added("sucsess-modal");
// });
