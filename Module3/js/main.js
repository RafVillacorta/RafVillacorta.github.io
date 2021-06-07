function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}


function populateListProductChoices() {
    var prods = document.getElementById('displayProduct');
	
    prods.innerHTML = "";
		
    var optionArray = restrictListProducts(products);

	var cardSpace = document.createElement("div");
  	cardSpace.className = "cardSpace";
		
	for (i = 0; i < optionArray.length; i++) {
		var productName = optionArray[i][0];
        var productPrice = optionArray[i][1];
		var productImage = optionArray[i][2];

		var card = document.createElement("div");
  		card.className = "cardColumn card";

		var image = document.createElement("img");
		image.setAttribute("src", productImage);
		image.setAttribute("height", "120");
		image.setAttribute("margin-left", "20");
		image.setAttribute("margin-right", "20");
		card.appendChild(image);
		card.appendChild(document.createElement("br"));

		var label1 = document.createElement('label')
		//label1.htmlFor = productName;
		label1.appendChild(document.createTextNode(productName));
		card.appendChild(label1);
		card.appendChild(document.createElement("br"));

		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName + " | " + productPrice + "$";
		card.appendChild(checkbox);
		
		var label2 = document.createElement('label')
		label2.htmlFor = productName;
		label2.appendChild(document.createTextNode(" | " + productPrice));
		card.appendChild(label2);
		card.appendChild(document.createElement("br"));

		cardSpace.appendChild(card);
	}
	prods.appendChild(cardSpace);
}
	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	var para = document.createElement("P");
	para.innerHTML = "Vous avez selectionné : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total est: " +getTotalPrice(chosenProducts)+ "$"));
}