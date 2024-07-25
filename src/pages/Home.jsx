import { useContext } from 'react';
import { Card } from '../components/Card'
import '../styles/App.css'
import { ProductDetail } from '../components/ProductDetail';
import { ShoppingContext } from '../context';
import { useParams } from 'react-router-dom';

export const Home = () => {
  const {
    products,
    setSearchProduct,
    searchProduct,
    filteredproducts,
  } = useContext(ShoppingContext)

  const { category } = useParams();

  const categoryName = category?.replace('-', ' ').replace('mens', "men's");
    
  const renderView = () => {
      const productsToRender = searchProduct?.length > 0 ? filteredproducts : products
      if(productsToRender?.length > 0) {
        if(categoryName){
          return productsToRender?.filter(product => product.category === categoryName).map(product => (
            <Card key={product.id} productData={product}/> 
          ))
        } else {
          return productsToRender?.map(product =>(
            <Card key={product.id} productData={product}/> 
          ))
        }
      } else {
        return <p>Product not found</p>
      }
    }
  
 

  return (
    <>
    <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">
          Our Collection
        </h1>
    </div>

    <input 
    type="text" 
    placeholder="Search a product" 
    className="rounded-lg border border-black w-80 p-4 mb-4"
    onChange={(event) => setSearchProduct(event.target.value)} 
    />
    
    <div className='grid gap-x-12 gap-y-6 grid-cols-4 w-full max-w-max'>
      {renderView()}
    </div>
    <ProductDetail />
    </>
  )
}

