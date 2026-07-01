const products = [
    
    {id:1, name:"Laptop",price:5000},
    {id:2, name:"Mobile",price:2000},
    {id:3, name:"Keyboard",price:1500}

];
products.filter((product) => Number(product.price) <= 2000) 
.map(product => {
 console.log(".............");
 console.log("Product Name:", product.name);
 console.log("Price:", product.price);

});