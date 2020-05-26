// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
// req 1 is complete



let planet;
fetch('https://handlers.education.launchcode.org/static/planets.json')
.then(function (response) {
    response.json().then(function (json) {
       planet = json;
        for (let i = 0; i < planet.length; i++) {
            destination.innerHTML += `<option value="${i}">${planet[i].name}</option>`;
        }
    });
});

window.addEventListener("load", function() {
   console.log("load")
   // faultyItems.style.visibility = 'visible';
   
//  let form = document.querySelector("form");
formSubmit.addEventListener("click", theMeat );
destination.addEventListener('change', theMeat);  
   // faultyItems.style.visibility = 'visible';
   
});


function theMeat(event){
   event.preventDefault();
   console.log("formsub")
   
   let minFuel = 10000;
   let maxCargo = 10000;
   let pilotName = document.querySelector("input[name=pilotName]").value;
   let copilotName = document.querySelector("input[name=copilotName]").value;
   let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
   let cargoMass = document.querySelector("input[name=cargoMass]").value;

   //destination validation and display
   if (destination.value === '') {
      alert("Please select a destination")
      launchStatus.innerHTML = 'Shuttle must have destination for lauch.';
      launchStatus.style.color = 'red';
      return;
   }
   else{
   missionTarget.innerHTML = `
      <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${planet[destination.value].name}</li>
            <li>Diameter: ${planet[destination.value].diameter}</li>
            <li>Star: ${planet[destination.value].star}</li>
            <li>Distance from Earth: ${planet[destination.value].distance}</li>
            <li>Number of Moons: ${planet[destination.value].moons}</li>
         </ol>
      <img src="${planet[destination.value].image}">`;
   }
   
   //pilotName validation and not a num
   for (let i = 0; i < pilotName.length; i++){
      if(isNaN(pilotName[i]) === false){
         console.log(pilotName[i])
         alert("Pilot Name must not contain numbers")
         pilotStatus.innerHTML = 'Pilot is not ready.';
         launchStatus.innerHTML = 'Shuttle not ready for launch.';
         launchStatus.style.color = 'red';
         faultyItems.style.visibility = 'visible';
         return;
      }else{
         document.getElementById("pilotStatus").innerHTML = pilotName + ' is ready.';
         }
      
   };
   //Co-Pilot validation and not a num
   for (let i = 0; i < copilotName.length; i++){
      if(isNaN(copilotName[i]) === false){
         console.log(copilotName[i])
         alert("Co-pilot Name must not contain numbers")
         document.getElementById("copilotStatus").innerHTML = 'Co-Pilot is not ready.';
         launchStatus.innerHTML = 'Shuttle not ready for launch.';
         launchStatus.style.color = 'red';
         faultyItems.style.visibility = 'visible';
         return;
      }else{
         document.getElementById('copilotStatus').innerHTML = copilotName + ' is ready.';
      }
      
   };
   // ensures fields are filled
   if (pilotName === "" || copilotName === "" || fuelLevel === "" || cargoMass === "") {
      alert("All fields are required!");
      // stop the form submission
      event.preventDefault();
   }
   // ensures cargo is a number
   else if(isNaN(cargoMass) === true){
      alert("Cargo Mass must be a number");
      // stop the form submission
      event.preventDefault();
   }
   // ensures fule is a num
   else if(isNaN(fuelLevel) === true){
      alert("Fuel Level must be a number");
      // stop the form submission
      event.preventDefault();
   };
   // ensures min fuel
   if (fuelLevel < minFuel) {
      fuelStatus.innerHTML = 'Not enough fuel for the journey.';
   }
   else {
      fuelStatus.innerHTML = 'Fuel level high enough for launch';
   }
   // ensures max cargo
   if (cargoMass > maxCargo) {
      cargoStatus.innerHTML = 'There is too much mass for take off.';
   }
   else {
      cargoStatus.innerHTML = 'Cargo mass low enough for launch.';
   }
   // check shuttle status
   if (fuelLevel > minFuel && cargoMass < maxCargo) {
      launchStatus.innerHTML = 'Shuttle is ready for launch.';
      launchStatus.style.color = 'green';
      pilotStatus.innerHTML = pilotName + ' is ready.';
      document.getElementById('copilotStatus').innerHTML = copilotName + ' is ready.';
      faultyItems.style.visibility = 'visible';
   }
   else {
   launchStatus.innerHTML = 'Shuttle not ready for launch.';
   launchStatus.style.color = 'red';
   document.getElementById("pilotStatus").innerHTML = pilotName + ' is ready.';
   document.getElementById('copilotStatus').innerHTML = copilotName + ' is ready.';
   faultyItems.style.visibility = 'visible';
   }


   // const launchStatusCheck = document.getElementById("launchStatusCheck");
   // let x = "";
    
   //   x += launchStatusCheck.innerHTML = `
   //       <div >
   //           <div >
   //               <h3>${json[i].firstName} ${json[i].lastName}</h3>
   //                   <ol>
   //                       <li>${pi}</li>
   //                       <li>Active: ${json[i].active}</li>
   //                       <li>Skills: ${json[i].skills}</li>
   //                   </ol>
   //               </div>
   //           <img class = "avatar" src=${json[i].picture}>
   //       </div> `;
   //       document.getElementById("launchStatusCheck").innerHTML = x;
   //       }});
   //   });
 };