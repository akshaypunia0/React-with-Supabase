import React, { useState } from 'react'

function AddProduct({onDataSubmit}) {

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [productCategoryId, setProductCategoryId] = useState('')

  // let data = {
  //   title: '',
  //   price: '',
  //   productCategoryId: '',
  // }

  // const [formValues, setFormValues] = useState(data)

    function submit(e){
        e.preventDefault();

        onDataSubmit({title, price, productCategoryId})
    }

    // const handleChange = (e) => {
    //     const {name, value} = e.target;

    //     setDetail((prev) => ({
    //         ...prev,
    //         [name]: value
    //     }))
    // }

  return (
    <>
    <div>AddProduct</div>

    <div>
    <form onSubmit={submit}>
    <input 
    type="text"
    placeholder='Enter Title'
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    />

    <input 
    type="text"
    placeholder='Enter Price'
    value={price}
    onChange={(e) => setPrice(e.target.value)}
    
    />

<input 
    type="text"
    placeholder='Product Category Id'
    value={productCategoryId}
    onChange={(e) => setProductCategoryId(e.target.value)}
    
    />

    <button type='submit'>Submit</button>
    </form>
    </div>
    

    </>
  )

}

export default AddProduct