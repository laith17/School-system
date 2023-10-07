const list1 = [];
const list2 = [];
const list3 = [];
const list4 = [];
const list5 = [];
let row = 1;
let index = 0;
let cardInfoArray = [];

//* To Start The Page With The Table Selected
document.getElementById("show").value = "Table";
toggleDisplay();

//* constructor function
function Card(fullName, dateOfBirth, gender, major, phoneNumber, grade) {
  this.fullName = fullName;
  this.dateOfBirth = dateOfBirth;
  this.gender = gender;
  this.major = major;
  this.phoneNumber = phoneNumber;
  this.grade = grade;

  this.createCardElement = function () {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <div class="img-box">
          <img src="images/avatar.png" alt="" class="card-img" />
        </div>
        <div class="text-box">
          <p>Name: ${this.fullName}</p>
          <p>Date Of Birth: ${this.dateOfBirth}</p>
          <p>Gender: ${this.gender}</p>
          <p>Major: ${this.major}</p>
          <p>Phone Number: ${this.phoneNumber}</p>
          <p>Grade: ${this.grade}</p>
        </div>
      `;

    return card;
  };
}

//* Adding User Info
function add() {
  //* Assigning Variables
  const fullName = document.getElementById("fullName").value;
  const dateOfBirth = document.getElementById("dateOfBirth").value;
  let gender = document.getElementsByName("gender");
  let selectedValue = "";
  for (let i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      selectedValue = gender[i].value;
      break;
    }
  }
  const phoneNumber = document.getElementById("phoneNumber").value;
  const grade = document.getElementById("grade").value;
  const major = document.getElementById("major").value;

  //* Check if any of the required fields are empty
  if (
    !fullName ||
    !dateOfBirth ||
    !selectedValue ||
    !major ||
    !phoneNumber ||
    !grade
  ) {
    alert("Please fill out all required fields.");
    return;
  }

  if (document.getElementById("show").value === "Table") {
    //* Show In A Table
    const curRow = document.getElementById("display");
    const newRow = curRow.insertRow(row);

    list1[index] = fullName;
    list2[index] = dateOfBirth;
    list3[index] = selectedValue;
    list4[index] = phoneNumber;
    list5[index] = grade;

    const cel1 = newRow.insertCell(0);
    const cel2 = newRow.insertCell(1);
    const cel3 = newRow.insertCell(2);
    const cel4 = newRow.insertCell(3);
    const cel5 = newRow.insertCell(4);

    cel1.innerHTML = list1[index];
    cel2.innerHTML = list2[index];
    cel3.innerHTML = list3[index];
    cel4.innerHTML = list4[index];
    cel5.innerHTML = list5[index];

    row++;
    index++;
  } else {
    //* Show In A Card
    const card = new Card(
      fullName,
      dateOfBirth,
      selectedValue,
      major,
      phoneNumber,
      grade
    );

    const cardContainer = document.querySelector(".cards");
    cardContainer.appendChild(card.createCardElement());

    //* Save the array to local storage
    cardInfoArray.push(card);
    localStorage.setItem("cardInfoArray", JSON.stringify(cardInfoArray));
  }

  //* Clear the form input fields
  document.getElementById("fullName").value = "";
  document.getElementById("dateOfBirth").value = "";
  for (let i = 0; i < gender.length; i++) {
    gender[i].checked = false;
  }
  document.getElementById("phoneNumber").value = "";
  document.getElementById("grade").value = "";
}

//* Checking If The User Want To Show The Data In A Table Or A Card
function toggleDisplay() {
  const showValue = document.getElementById("show").value;
  const tableDisplay = document.getElementById("display");
  const cardDisplay = document.querySelector(".cards");
  const majorDropdown = document.getElementById("major-box");

  if (showValue === "Table") {
    tableDisplay.style.display = "table";
    cardDisplay.style.display = "none";
    majorDropdown.style.display = "none";
  } else {
    tableDisplay.style.display = "none";
    cardDisplay.style.display = "flex";
    majorDropdown.style.display = "flex";
  }
}

//* Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".main-nav-list");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".list-item").forEach((element) => {
  element.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});
