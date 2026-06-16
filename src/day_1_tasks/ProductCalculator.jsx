import React from 'react'
import{ useState } from 'react'
const ProductCalculator = () => {
  const [name,setName] = useState("");
  const [price,setPrice] = useState("");
  const [quantity,setQuantity] = useState("")

  const currentvalue = price * quantity;
  const result = currentvalue >5000 ? 'discounts allowed': 'no discounts allowed'

  return (
    <div>

      <input type="text" placeholder='Product Name' onChange={(e) => setName(e.target.value)} />
      <br/><br/>
      <input type="number" placeholder='Product Price' onChange={(e) => setPrice(e.target.value)} />        
      <br/><br/>
      <input type="number" placeholder='Product Quantity' onChange={(e) => setQuantity(e.target.value)} />

      <p>{result}</p>


    </div>
  )

}

export default ProductCalculator
