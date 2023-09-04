const peopleInSpace = document.querySelector("[data-js='people-in-space']");

const nameOfPeople = document.querySelector("[data-js='name-of-people']");

async function getPeopleInSpace() {
  const response = await fetch("http://api.open-notify.org/astros.json");
  const data = await response.json();
  console.log("data", data);

  return data;
}

getPeopleInSpace();

async function init() {
  const data = await getPeopleInSpace();
  peopleInSpace.innerText = data.number;
}

init(); // don't forget to call the function

function whoIsInAll() {
  const data = getPeopleInSpace();
  nameOfPeople.innerText = data.people.name;
}

whoIsInAll();

// As a bonus feature you could add a ul to the page that gets updated with the names of the people currently in space (this information is also included in the response from the API). You will need to think about looping over an array, creating dom elements and updating their content. As well as appending dom elements to the page.

// As an extra bonus you could add 3 buttons to the page. All, ISS and Tiangong. Then when you click on one of the buttons you update the list of people displayed on the page based on which space craft they are on. i.e. if you click on the ISS button, your list of people should only include those on the ISS. We learnt about an array method that would be particularly helpful in this scenario.
