// Question 1

let cat = {
  complain: console.log("Meow!")
};

// Question 2

const heading = document.querySelector("h3");

// Question 3

heading.style.fontSize = "2em";

// QUestion 4

heading.classList.add("subheading");

// Question 5

const paragraphs = document.querySelectorAll("p");

// Question 6

const resultContainer = document.querySelector(".results");

resultContainer.innerHTML = "<p> New paragraph </p>";

// Question 7

const cats = [
  {
    name: "Blob",
    age: 10
  },
  {
    name: "Harold"
  },
  {
    name: "Blurt",
    age: 21
  }
];

function listOfCats(catArray) {
  for (i = 0; i < catArray.length; i++) {
    console.log(catArray[i].name);
  }
}

listOfCats(cats);

// Question 8

function catnames(catArray) {
  let catsNameHTML = "";
  for (i = 0; i < catArray.length; i++) {
    catsNameHTML += `<h5>${catArray[i].name} </h5>`;
  }
  return catsNameHTML;
}

// Question 9

resultContainer.innerHTML = catnames(cats);

// Question 10

function catnames(catArray) {
  let catsNameHTML = "";

  for (i = 0; i < catArray.length; i++) {
    let catAge = "Age unknown";
    if (catArray[i].age) {
      catAge = catArray[i].age;
    }
    catsNameHTML += `<div><h5>${catArray[i].name} </h5>
                        <p>${catAge}</p></div>`;
  }

  return catsNameHTML;
}
