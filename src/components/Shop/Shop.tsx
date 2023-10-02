
import { IProduct } from "../../providers/cart/CartContext"
import { useCart } from "../../hooks/useCart"

const products: Array<IProduct> = [{
  name: 'Test 1',
  price: 1,
  id: 1,
  quantity: 0
}]

export const Shop: React.FC = () => {

  const {cart, addItem} = useCart()

  const clickHandler = (product: IProduct) => {
    addItem(product)
  }

  return (
    <section>
      <ul>
        {products.map(product => {
          return <li key={product.id} onClick={() => {clickHandler(product)}}>{product.name}</li>
        })}
      </ul>

      <div>
        <h2>Cart</h2>
        <ul>
          {cart.map(product => {
            return <li key={product.id}>{product.name} - {product.quantity}</li>
          })}
        </ul>
      </div>
    </section>
  
  )
}