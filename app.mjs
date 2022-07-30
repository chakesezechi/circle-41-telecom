// getting the required elements
let form = document.getElementById("form");
let search = document.getElementById("phone");
let results = document.getElementById("result");
let image = document.getElementById("image");

//creating the function
function FindProvider(number) {

  //formatting the number and making it 4 digits long
  let nNumber = number.replace('+234', '0').substring(0, 4);

  // fetching the numbers and providers
  fetch("/data.json")
    .then(response => {
      return response.json();
    })
    //looping through the numbers and providers in the Json to find the one that matches the user input
    .then(data => {
      let newProvider = data.find(item => item.number === nNumber);

      // handling the case where the number is not found
      if (!newProvider) {
        results.innerHTML = "Provider not found";
        image.src = '/img/PHONIE.png';
        document.body.style.background = "#f3f4f6";
      }
      // handling the case where the number is found
      else {
        results.innerHTML = `${number} is a ${newProvider.provider} number`;
        image.src = `/img/${newProvider.provider}.png`;
        document.body.style.background = `${newProvider.color}`;
      }
    });
}
function startApp() {
  // Your entire app should not necessarily be coded inside this 
  // single function (though there's no penalty for that), 
  // so create and use/call additional functions from here


  form.addEventListener('submit', function(e) {
    e.preventDefault();
    let value = search.value;
    return FindProvider(value);
  });

};

// ======= DO NOT EDIT ============== //
export default startApp;
  // ======= EEND DO NOT EDIT ========= //