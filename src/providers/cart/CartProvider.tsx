import { ReactElement, useCallback, useMemo, useState } from "react"
import { CartContext, IProduct, ICartContext } from "./CartContext"

export const CartProvider: React.FC<{children: ReactElement}> = ({ children }) => {
  const [cart, setCart] = useState<IProduct[]>([]);

  const addItem = useCallback((product: IProduct) => {
    setCart((prev) => {
      const newState = [...prev]
      const index = newState.findIndex((item) => item.id === product.id)
      
      if (index !== -1) {
        newState[index].quantity += 1 
      } else {
        newState.push({...product, quantity: 0})
      }
      
      return newState
    })
  }, [setCart])

  const removeItem = useCallback((product: IProduct) => {
    setCart((prev) => [...prev.filter((item) => item.id !== product.id)])
  }, [setCart])

  const providerValue: ICartContext = useMemo(() => {
    return {
      cart,
      addItem,
      removeItem
    }
  }, [addItem, cart, removeItem])
  
  return (
    <CartContext.Provider value={providerValue}>
      {children}
    </CartContext.Provider>
  )
}