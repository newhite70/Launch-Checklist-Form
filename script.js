let planet;
//Fetches the Json and displays random planet on load.  Also Satifies the Bonus
fetch('https://handlers.education.launchcode.org/static/planets.json')
.then(function (response) {
    response.json().then(function (json) {
       planet = json;
       let randomPlanet = Math.floor(Math.random() * 6);
       missionTarget.innerHTML = `
       <h2>Mission Destination</h2>
       <ol>
          <li>Name: ${planet[randomPlanet].name}</li>
          <li>Diameter: ${planet[randomPlanet].diameter}</li>
          <li>Star: ${planet[randomPlanet].star}</li>
          <li>Distance from Earth: ${planet[randomPlanet].distance}</li>
          <li>Number of Moons: ${planet[randomPlanet].moons}</li>
       </ol>
    <img src="${planet[randomPlanet].image}">`;
    });
});

// Event listenter waiting for submission of form to execuete theMeat function.
window.addEventListener("load", function() {
formSubmit.addEventListener("click", theMeat );
});


function theMeat(event){
   
   event.preventDefault();

   let minFuel = 10000;
   let maxCargo = 10000;
   let pilotName = document.querySelector("input[name=pilotName]").value;
   let copilotName = document.querySelector("input[name=copilotName]").value;
   let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
   let cargoMass = document.querySelector("input[name=cargoMass]").value;

   if (pilotName === "" || copilotName === "" || fuelLevel === "" || cargoMass === "") {
      alert("All fields are required!");
      // stop the form submission
      event.preventDefault();
      return;
      
      
   }else{

   //pilotName validation and not a num
   for (let i = 0; i < pilotName.length; i++){
      if(isNaN(pilotName[i]) === false){
         console.log(pilotName[i])
         alert("Pilot Name must not contain numbers")
         pilotStatus.innerHTML = `Pilot is not ready.`;
         // launchStatus.innerHTML = `Shuttle not ready for launch.`;
         // launchStatus.style.color = 'red';
         // faultyItems.style.visibility = 'hidden';
         return;
      }else{
         // FIXED THIS for RESUB
         document.getElementById("pilotStatus").innerHTML = `${pilotName} is ready.`;
         }
      
   };
   //Co-Pilot validation and not a num
   for (let i = 0; i < copilotName.length; i++){
      if(isNaN(copilotName[i]) === false){
         console.log(copilotName[i])
         alert("Co-pilot Name must not contain numbers")
         document.getElementById("copilotStatus").innerHTML = `Co-Pilot is not ready.`;
         // launchStatus.innerHTML = `Shuttle not ready for launch.`;
         // launchStatus.style.color = 'red';
         // faultyItems.style.visibility = 'hidden';
         return;
      }else{
         // FIXED THIS for RESUB
         document.getElementById('copilotStatus').innerHTML = `${copilotName} is ready.`;
      }
      
   };
   // ensures fields are filled

   // ensures cargo is a number
   if(isNaN(cargoMass) === true){
      alert("Cargo Mass must be a number");
      cargoStatus.innerHTML = `Cargo Mass must be a number.`;
      event.preventDefault();
      return;
   }
   // ensures fule is a num
   if(isNaN(fuelLevel) === true){
      alert("Fuel Level must be a number");
      fuelStatus.innerHTML = `Fuel level must be a number`;
      event.preventDefault();
      return;
   }
   }

   
   // ensures min fuel
   if (fuelLevel < minFuel) {
      fuelStatus.innerHTML = `Not enough fuel for the journey.`;
   }
   else {
      fuelStatus.innerHTML = `Fuel level high enough for launch`;
   }
   // ensures max cargo
   if (cargoMass > maxCargo) {
      cargoStatus.innerHTML = `There is too much mass for take off.`;
   }
   else {
      cargoStatus.innerHTML = `Cargo mass low enough for launch.`;
   }
   // check shuttle status
   if (fuelLevel >= minFuel && cargoMass <= maxCargo) {
      launchStatus.innerHTML = 'Shuttle is ready for launch.';
      launchStatus.style.color = 'green';
      faultyItems.style.visibility = 'hidden';
      

   }
   else {
   launchStatus.innerHTML = 'Shuttle not ready for launch.';
   launchStatus.style.color = 'red';
   faultyItems.style.visibility = 'visible';
   }
};
