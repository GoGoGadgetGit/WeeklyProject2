// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1 () {
  // Answer:
  let sum = 0;
  for( let i = 0; i < data.length; i++){
    sum += data[i].price
  }
  let avg = sum/(data.length)
  console.log(avg);
}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  // Answer:
  let items = []
  for( let i = 0; i < data.length; i++){
    if((data[i].price >= 14.00) && (data[i].price <= 18.00)){
      items.push(data[i].title)
    }
  }
  console.log(items);
}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  // Answer:
  let coins = '';
  for( let i = 0; i < data.length; i++){
    if(data[i].currency_code === "GBP"){
    coins = data[i].title + " costs " + data[i].price + " pounds."
    }
  }
  console.log(coins);
}


// 4: Display a list of all items who are made of wood.
function question4 () {
  // Answer:
  let made = [];

  for( let i = 0; i < data.length; i++){

    for( let j = 0; j < data[i].materials.length; j++){
    if(data[i].materials[j] === "wood"){
      made.push(data[i].title)
    }
  }
  }
  console.log(made)
}


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
  // Answer:
  for(let i = 0; i < data.length; i++){
  if(data[i].materials.length >= 8){
    console.log(data[i].title);
    console.log(data[i].materials.length);
    console.log(data[i].materials);
  }
  }
}


// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  // Answer:
  let maker = [];
  let sellers = '';

  for( let i = 0; i < data.length; i++){
  if(data[i].who_made === "i_did"){
    maker.push(data[i].title)
    sellers = maker.length + " items were made by their sellers."
  }
}
  console.log(sellers);
}
