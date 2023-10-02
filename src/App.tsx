
import { CartProvider } from './providers/cart/CartProvider'

import { Shop } from './components/Shop/Shop'
import './App.css'

function App() {


  return (
    <CartProvider>
      <Shop/>
    </CartProvider>
  )
}

export default App
