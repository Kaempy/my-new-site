//json file path
const json_data = "../json/dummy_project.json";

//Defining async function
async function getData(data) {
 
  // Storing response
  const response = await fetch(data);
 
  // Storing data in form of JSON
  var store_data = await response.json();
  console.log(store_data);
}

// Calling that async function
getData(json_data);
