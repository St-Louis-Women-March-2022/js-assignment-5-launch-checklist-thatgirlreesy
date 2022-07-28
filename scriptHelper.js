// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
    missionTarget.innerHTML =
        `<h2>Mission Destination</h2>
            <ol>
                <li>Name: ${missionTarget.name} </li>
                <li>Diameter: ${missionTarget.diameter} </li>
                <li>Star: ${missionTarget.star}</li>
                <li>Distance from Earth: ${missionTarget.distance}</li>
                <li>Number of Moons: ${missionTarget.moons}</li>
            </ol>
            <img src="${missionTarget.imageUrl}">`
}

function validateInput(testInput) {
    if (pilot === "" || copilot === "" || fuelLevel === "" || cargoLevel === "") {
        alert("All fields are required");
        return "Empty"
    }
    if (isNaN(fuelLevel) === true || isNaN(cargoLevel) === true) {
        alert("Make sure to enter valid information for each field");
        return "Not a Number"
    }
    if (isNaN(pilot) === false || isNaN(copilot) === false) {
        alert("Make sure to enter valid information for each field");
        return "Is a Number"
    }
}

function formSubmission(document, pilot, copilot, fuelLevel, cargoLevel) {
   if (pilot.value === validateInput || copilot.value === validateInput || fuelLevel.value === validateInput || cargoLevel === validateInput) {
       window.alert("All fields are required");
    }
    document.getElementByClassName("pilotName") = "Chris";
    document.getElementByClassName("copilotName") = "Blake";


    if (fuelLevel < 10000) {
        document.getElementById(faultyItems) = visible;
        fuelStatus.innerHTML = "There is not enough fuel for the journey.";
        document.getElementById(launchStatus) = "Shuttle not ready for launch"
        launchStatus.style.color = red;
    } else {
        fuelStatus.innerHTML = "Fuel level high enough for launch";
    }
}

function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then(function(response) {
        fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
            response.json().then(function(data) {
            console.log(json[5]);
            });
        });
    });
    return planetsReturned;
}

function pickPlanet(planets) {
    let random = planetsReturned(Math.random() * data.length);
    window.console.log(random);
    return random;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
