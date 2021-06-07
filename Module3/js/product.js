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
		price: 1.09,
		path: "images/Tomato.jpg"
	},
	{
		name: "Tomate organique",
		vegetarian: true,
		glutenFree: true,
		lactoseFree: true,
		peanutFree: true,
		organic: true,
		price: 1.49,
		path: "images/TomatoOrganic.jpg"
	},
	{
		name: "Carotte",
		vegetarian: true,
		glutenFree: true,
		lactoseFree: true,
		peanutFree: true,
		organic: true,
		price: 1.59,
		path: "images/Carrot.jpg"
	},
	{
		name: "Croissant",
		vegetarian: true,
		glutenFree: false,
		lactoseFree: true,
		peanutFree: true,
		organic: false,
		price: 2.49,
		path: "images/Croissant.jpg"
	},
	{
		name: "Laitue",
		vegetarian: true,
		glutenFree: true,
		lactoseFree: true,
		peanutFree: true,
		organic: true,
		price: 3.49,
		path: "images/Lettuce.jpg"
	},
	{
		name: "Canette de thon",
		vegetarian: false,
		glutenFree: true,
		lactoseFree: true,
		peanutFree: true,
		organic: false,
		price: 3.99,
		path: "images/Tuna.jpg"
	},
	{
		name: "Fromage",
		vegetarian: true,
		glutenFree: true,
		lactoseFree: false,
		peanutFree: true,
		organic: false,
		price: 4.99,
		path: "images/Cheese.jpg"
	},
	{
		name: "Barres granola aux noix",
		vegetarian: true,
		glutenFree: false,
		lactoseFree: true,
		peanutFree: false,
		organic: false,
		price: 7.99,
		path: "images/Granola.jpg"
	},
	{
		name: "Beurre d'arachide",
		vegetarian: true,
		glutenFree: true,
		lactoseFree: true,
		peanutFree: false,
		organic: true,
		price: 7.99,
		path: "images/PB.jpg"
	},
	{
		name: "Viande hachée",
		vegetarian: false,
		glutenFree: true,
		lactoseFree: true,
		peanutFree: true,
		organic: false,
		price: 8.99,
		path: "images/Meat.jpg"
		
	},
	{
		name: "Quinoa",
		vegetarian: true,
		glutenFree: true,
		lactoseFree: true,
		peanutFree: true,
		organic: true,
		price: 9.99,
		path: "images/Quinoa.jpg"
	},
	{
		name: "Douzaine d'oeufs",
		vegetarian: false,
		glutenFree: true,
		lactoseFree: true,
		peanutFree: true,
		organic: false,
		price: 10.99,
		path: "images/Eggs.jpg"
	},
	{
		name: "Lait",
		vegetarian: true,
		glutenFree: true,
		lactoseFree: false,
		peanutFree: true,
		organic: false,
		price: 11.99,
		path: "images/Milk.jpg"
	},
	{
		name: "Pizza au pepperoni",
		vegetarian: false,
		glutenFree: false,
		lactoseFree: true,
		peanutFree: true,
		organic: false,
		price: 17.99,
		path: "images/Pizza.jpg"
	},
	{
		name: "Gateau au chocolat et noix",
		vegetarian: true,
		glutenFree: false,
		lactoseFree: false,
		peanutFree: false,
		organic: false,
		price: 19.99,
		path: "images/Cake.jpg"
	}
];
	
// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods) {
	let product_names = [];
	var r1 = (document.getElementById("rb1").checked) ? true : false;
	var r2 = (document.getElementById("rb3").checked) ? true : false;
	var r3 = (document.getElementById("rb5").checked) ? true : false;
	for (let i=0; i<prods.length; i+=1) {
		if (r1 && (prods[i].peanutFree == true)){
			if (r2 && (prods[i].lactoseFree == true)){
				if (r3 && (prods[i].organic == true)){
					product_names.push([prods[i].name,prods[i].price,prods[i].path] );
				} else if (!r3) {
					product_names.push([prods[i].name,prods[i].price,prods[i].path]);
				}
			} else if (!r2){
				if (r3 && (prods[i].organic == true)){
					product_names.push([prods[i].name,prods[i].price,prods[i].path]);
				} else if (!r3) {
					product_names.push([prods[i].name,prods[i].price,prods[i].path]);
				}
			}
		} else if (!r1){
			if (r2 && (prods[i].lactoseFree == true)){
				if (r3 && (prods[i].organic == true)){
					product_names.push([prods[i].name,prods[i].price,prods[i].path]);
				} else if (!r3) {
					product_names.push([prods[i].name,prods[i].price,prods[i].path]);
				}
			} else if (!r2) {
				if (r3 && (prods[i].organic == true)){
					product_names.push([prods[i].name,prods[i].price,prods[i].path]);
				} else if (!r3) {
					product_names.push([prods[i].name,prods[i].price,prods[i].path]);
				}
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
