const seatBtn = document.querySelectorAll(".seat");

// console.log(seatBtn);

let seatLeft = convertNumber("total-seat");
for (let seat of seatBtn) {
  seat.addEventListener("click", function (event) {
    event.target.style.backgroundColor = "#1DD100";
    convertNumber("total-seat", (seatLeft -= 1));
  });
}
