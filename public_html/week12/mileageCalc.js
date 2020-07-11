let startCity;
let startState;
let endCity;
let endState;

let gate1 = false;
let gate2 = false;
let gate3 = false;
let gate4 = false;

let key = false;

//all gates must be opened before key unlocks calculate button


//allow calculate button to be pressed and data submitted
function getKey() {

  if(gate1 == true && gate2 == true && gate3 == true && gate4 == true) {
    key = true;
  }

  if(key == true) {
    document.getElementById("send-request").disabled = false;
    document.getElementById("send-request").style.background = "white";
    document.getElementById("send-request").style.border = "2px ridge black";
    document.getElementById("send-request").style.borderRadius = "5px"; 
  }

}


function validate(input) {

  let name = input.name;
  console.log(input.value, typeof input.value);

  if(input.checkValidity()) {
    input.style.background = "white";
    input.style.color = "black";

    if(name == "startCity") {
      startCity = input.value;
      gate1 = true;
    }
    else if(name == "startState") {
      startState = input.value;
      gate2 = true;
    }
    else if(name == "endCity") {
      endCity = input.value;
      gate3 = true;
    }
    else if(name == "endState") {
      endState = input.value;
      gate4 = true;
    }
    
  }
  else{
    input.style.background = 'rgba(99,0,0,.7)';
    input.style.color = 'white';
  }
  getKey();
  //console.log(gate1, gate2, gate3, gate4);
}


async function getMileage() {

  
  let requestURL = 'http://localhost:9999/cgi-bin/cs213/mileageAjaxJSON?startCity='+ startCity + '&startState=' + startState +'&endCity=' + endCity +'&endState=' + endState;
  console.log(requestURL);
  let container = document.getElementById('response');
  container.innerHTML = '';
  console.log('sending request call');
  let response = await fetch(requestURL);
  if(response.status == 404) {
    container.appendChild(((document.createElement('h2')).id = "error"));
    document.getElementById('error').style.color = "red";
    document.getElementById('error').innerHTML = "Error in Processing Request";
  }
  else if (response.ok) {
    let jsonObject = await response.json();
    //console.table(jsonObject);

    let h3 = document.createElement('h3');

    //console.log(jsonObject.trip['miles']);
    

    h3.textContent = 'The distance from ' + jsonObject.trip['startcity'] + ', ' + jsonObject.trip['startstate'] + ' to ' + jsonObject.trip['endcity'] + ', ' + jsonObject.trip['endstate'] + ' is ' + jsonObject.trip['miles'] + ' miles.'; 
    
    container.appendChild(h3);

  }

}