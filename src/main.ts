import ShoppingCart from "./OCP/entities/cart.ts"
import { Messaging } from "./SRP/services/messaging.ts"
import { Order } from "./OCP/entities/order.ts"
import { Persistency } from "./OCP/services/persistency.ts"
import { Product } from "./OCP/entities/product.ts"
import { TenPercentDiscount } from "./OCP/entities/discount.ts"

const tenPercentDiscount = new TenPercentDiscount()
const shoppingCart = new ShoppingCart(tenPercentDiscount)
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
