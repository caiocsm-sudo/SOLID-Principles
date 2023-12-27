import ShoppingCart from "./SRP copy/entities/cart.ts"
import { Messaging } from "./SRP/services/messaging.ts"
import { Order } from "./SRP copy/entities/order.ts"
import { Persistency } from "./SRP copy/services/persistency.ts"
import { Product } from "./SRP copy/entities/product.ts"
import { FiftyPercentDiscount } from "./SRP copy/entities/discount.ts"

const fiftyPercentDiscount = new FiftyPercentDiscount();
const shoppingCart = new ShoppingCart(fiftyPercentDiscount)
const messaging = new Messaging()
const persistency = new Persistency()

const order = new Order(shoppingCart, messaging, persistency)

shoppingCart.addItem(new Product("Camisa", 20))
shoppingCart.addItem(new Product("Galinha", 9.5))
shoppingCart.addItem(new Product("Contra Filé", 19.9))

console.log(shoppingCart.items)

console.log(shoppingCart.totalWithDiscount())

console.log(shoppingCart.total())

order.checkout()

console.log(shoppingCart.items)

console.log(order.orderStatus)
