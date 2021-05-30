// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Tomate non-organique",
		vegetarian: true,
		glutenFree: true,
		lactoseFree: true,
		peanutFree: true,
		organic: false,
		price: 1.09
	},
	{
		name: "Tomate organique",
		vegetarian: true,
		glutenFree: true,
		lactoseFree: true,
		peanutFree: true,
		organic: true,
		price: 1.49
	},
	{
		name: "Carotte",
		vegetarian: true,
		glutenFree: true,
		lactoseFree: true,
		peanutFree: true,
		organic: true,
		price: 1.59
	},
	{
		name: "Croissant",
		vegetarian: true,
		glutenFree: false,
		lactoseFree: true,
		peanutFree: true,
		organic: false,
		price: 2.49
	},
	{
		name: "Laitue",
		vegetarian: true,
		glutenFree: true,
		lactoseFree: true,
		peanutFree: true,
		organic: true,
		price: 3.49
	},
	{
		name: "Canette de thon",
		vegetarian: false,
		glutenFree: true,
		lactoseFree: true,
		peanutFree: true,
		organic: false,
		price: 3.99
	},
	{
		name: "Fromage",
		vegetarian: true,
		glutenFree: true,
		lactoseFree: false,
		peanutFree: true,
		organic: false,
		price: 4.99
	},
	{
		name: "Barres granola aux noix",
		vegetarian: true,
		glutenFree: false,
		lactoseFree: true,
		peanutFree: false,
		organic: false,
		price: 7.99
	},
	{
		name: "Beurre d'arachide",
		vegetarian: true,
		glutenFree: true,
		lactoseFree: true,
		peanutFree: false,
		organic: true,
		price: 7.99
	},
	{
		name: "Viande hachée",
		vegetarian: false,
		glutenFree: true,
		lactoseFree: true,
		peanutFree: true,
		organic: false,
		price: 8.99
	},
	{
		name: "Quinoa",
		vegetarian: true,
		glutenFree: true,
		lactoseFree: true,
		peanutFree: true,
		organic: true,
		price: 9.99
	},
	{
		name: "Douzaine d'oeufs",
		vegetarian: false,
		glutenFree: true,
		lactoseFree: true,
		peanutFree: true,
		organic: false,
		price: 10.99
	},
	{
		name: "Lait",
		vegetarian: true,
		glutenFree: true,
		lactoseFree: false,
		peanutFree: true,
		organic: false,
		price: 11.99
	},
	{
		name: "Pizza au pepperoni",
		vegetarian: false,
		glutenFree: false,
		lactoseFree: true,
		peanutFree: true,
		organic: false,
		price: 17.99
	},
	{
		name: "Gateau au chocolat et noix",
		vegetarian: true,
		glutenFree: false,
		lactoseFree: false,
		peanutFree: false,
		organic: false,
		price: 19.99
	}
];
	
// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction1, restriction2) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction1 == "NutFree") && (prods[i].peanutFree == true)){
			if ((restriction2 == "Yes") && (prods[i].organic == true)){
				product_names.push([prods[i].name,prods[i].price]);
			} else if (restriction2 == "No") {
				product_names.push([prods[i].name,prods[i].price]);
			}
		}
		else if ((restriction1 == "LactoseFree") && (prods[i].lactoseFree == true)){
			if ((restriction2 == "Yes") && (prods[i].organic == true)){
				product_names.push([prods[i].name,prods[i].price]);
			} else if (restriction2 == "No") {
				product_names.push([prods[i].name,prods[i].price]);
			}
		}
		else if ((restriction1 == "Both") && (prods[i].lactoseFree == true) && (prods[i].peanutFree == true)){
			if ((restriction2 == "Yes") && (prods[i].organic == true)){
				product_names.push([prods[i].name,prods[i].price]);
			} else if (restriction2 == "No") {
				product_names.push([prods[i].name,prods[i].price]);
			}
		}
		else if (restriction1 == "None"){
			if ((restriction2 == "Yes") && (prods[i].organic == true)){
				product_names.push([prods[i].name,prods[i].price]);
			} else if (restriction2 == "No") {
				product_names.push([prods[i].name,prods[i].price]);
			}
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	total = 0.0;
	for (x=0; x<chosenProducts.length; x+=1) { 
		chosenProducts[x] = (chosenProducts[x]).substring(0, ((chosenProducts[x]).indexOf(" |") ));
	}
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			total += products[i].price;
		}
	}
	return Math.round(total* 100)/100;
}
