import React from 'react'
import {useState} from 'react'

const ProductSearch = () => {

    const [search, setSearch] = useState("");

 const products = [

        {id:1, name:"Laptop", price: 1000},
        {id:2, name:"Smartphone", price:500},
        {id:3, name:"Headphone", price: 200},
        {id:4, name:"Keyboard", price: 300},
        {id:5, name:"Mouse", price: 150},

 ];
    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
    );


  return (
    <div>

        <h2>Product Search</h2>
        <input type="text" placeholder="Search products" value={search} onChange={(e) => setSearch(e.target.value)} />
        
        {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
                <div key={product.id} style={{border:"1px solid black",
                    margin:"10px auto",
                    padding:"20px",
                    width:"200px",
                }}
                >
                    <h3>{product.name}</h3>
                    <p>Price: ${product.price}</p>

                </div>
            ))
        ) : (


            <p>No products found</p>
        )}

    </div>
  );
};

export default ProductSearch;