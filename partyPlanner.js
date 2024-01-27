/*
Fetch is used correctly to GET party data from the API.
Fetch is used correctly to POST a new party to the API.
Fetch is used correctly to DELETE a party from the API.
The app contains a list of the names, dates, times, locations, and descriptions of all parties.
Each party in the list has a delete button which removes the party when clicked.
The app contains a form that allows a user to enter information about a party and add it to the list.
The DOM is dynamically rendered according to data stored in state.
The data stored in state is updated to stay in sync with the API.
*/

//store API URL
const cohort = "2311-FSA-ET-WEB-PT-SF";
const APIURL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/${cohort}/events`;

//place to stor party plans
const partyPlans = {
    partyTime: [],
};

const eventList = document.querySelector("#party");

const addEventForm = document.querySelector("#parties");
addEventForm.addEventListener("submit", parties);

