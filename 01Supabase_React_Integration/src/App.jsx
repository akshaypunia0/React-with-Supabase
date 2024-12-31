import { useEffect, useState } from 'react'
import { supabase } from './Supabase client/supabaseClient'
import './App.css'
// import AddProduct from './Products/AddProduct'

function App() {

  const [products, setProducts] = useState([]);

  const [submittedData, setSubmittedData] = useState(null)

  useEffect(() => {
    console.log('Fetching data from Supabase...');
    getData();
  }, []);


  // useEffect(() => {
  //   if (submittedData) {
  //     console.log('Submitting new data...');
  //     setData();
  //   }
  // }, [submittedData]);


  async function getData() {
    let { data, error } = await supabase.from('products').select('*');
    if (error) {
      console.error('Error fetching data:', error.message);
    } else {
      setProducts(data);
    }
  }


  // async function setData() {

  //   console.log("setdata is running");

  //   const { data, error } = await supabase
  //     .from('products').insert([
  //       { title: submittedData.title, price: submittedData.price, product_category_id: submittedData.productCategoryId},
  //     ])
  //     .select()

  //     if (error) {
  //       console.error('Error inserting data:', error.message);
  //     } else {
  //       console.log('Product added:', data);
  //       setProducts((prev) => [...prev, ...data]);  // Optimistically update the list

  //     }
  // }


  function handleDataFromChild(data) {
    console.log(data);

    setSubmittedData(data);
  }


  return (
    <>
      <h3>List of the products stored in Supabase db</h3>

      {/* <div>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} -- {product.price}
            <div>Edit</div>
          </li>
          
        ))}
      </div> */}

      <div className="overflow-x-auto max-h-96">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead className="sticky top-0 bg-gray-100 z-10">
            <tr className="bg-gray-100">
              <th className="py-3 px-6 text-center font-semibold text-gray-700">Product ID</th>
              <th className="py-3 px-6 text-center font-semibold text-gray-700">Title</th>
              <th className="py-3 px-6 text-center font-semibold text-gray-700">Price</th>
              <th className="py-3 px-6 text-center font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody className="overflow-y-auto">
            {products.map((product, index) => (
              <tr key={product.id} className={`border-t ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                <td className="py-4 px-6 text-center text-gray-900">{index+1}</td>
                <td className="py-4 px-6 text-center text-gray-900">{product.title}</td>
                <td className="py-4 px-6 text-center text-gray-900">${product.price}</td>
                <td className="py-4 px-6 text-center">
                  <button
                    className="bg-blue-500 text-white hover:bg-blue-600 py-1 px-3 rounded mr-4"
                    onClick={() => onEdit(product.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white hover:bg-red-600 py-1 px-3 rounded"
                    onClick={() => onDelete(product.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>




{/* <div className="overflow-x-auto max-h-96">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead className="sticky top-0 bg-gray-100 z-10">
            <tr>
              <th className="py-3 px-6 text-center font-semibold text-gray-700">Product ID</th>
              <th className="py-3 px-6 text-center font-semibold text-gray-700">Title</th>
              <th className="py-3 px-6 text-center font-semibold text-gray-700">Price</th>
              <th className="py-3 px-6 text-center font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody className="overflow-y-auto block max-h-80">
            {products.map((product, index) => (
              <tr key={product.id} className={`border-t flex w-full ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                <td className="py-4 px-6 text-center text-gray-900 w-1/4">{index+1}</td>
                <td className="py-4 px-6 text-center text-gray-900 w-1/4">{product.title}</td>
                <td className="py-4 px-6 text-center text-gray-900 w-1/4">${product.price}</td>
                <td className="py-4 px-6 text-center w-1/4">
                  <button
                    className="bg-blue-500 text-white hover:bg-blue-600 py-1 px-3 rounded mr-4"
                    onClick={() => onEdit(product.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white hover:bg-red-600 py-1 px-3 rounded"
                    onClick={() => onDelete(product.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}

      {/* <div>
        <AddProduct onDataSubmit={handleDataFromChild} />
      </div> */}
    </>
  )
}

export default App
