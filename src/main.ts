/*
  SRP - Single Responsibility Principle
    - A class should have one reason to change/One responsability
  OCP - Open/Closed Principle
    - A class should be closed to modification and open for extension
  LSP - Liskov Substitution Principle
    - Because Square is a type of Rectangle, it should be able to replace Rectangle objects without causing any issues
  ISP - Interface Segregation Principle
    - Clients should not depend on methods they don't use
  DIP - Dependency Inversion Principle
    - High-level modules should not import anything from low-level modules. Both should depend on abstractions.
    - Abstractions should not depend on details.
*/

import ShoppingCart from "./DIP/entities/cart.ts"
import { Messaging } from "./DIP/services/messaging.ts"
import { Order } from "./DIP/entities/order.ts"
import { Persistency } from "./DIP/services/persistency.ts"
import { Product } from "./DIP/entities/product.ts"
import { TenPercentDiscount } from "./DIP/entities/discount.ts"
import { EnterpriseCustomer } from "./ISP/entities/customer.ts"

const tenPercentDiscount = new TenPercentDiscount()
const shoppingCart = new ShoppingCart(tenPercentDiscount)
const messaging = new Messaging()
const persistency = new Persistency()
const enterpriseCustomer = new EnterpriseCustomer("Big Mac", "190291093321");

const order = new Order(shoppingCart, messaging, persistency, enterpriseCustomer)

shoppingCart.addItem(new Product("Camisa", 20))
shoppingCart.addItem(new Product("Galinha", 9.5))
shoppingCart.addItem(new Product("Contra Filé", 19.9))

console.log(shoppingCart.items)

console.log(shoppingCart.totalWithDiscount())

console.log(shoppingCart.total())

order.checkout()

console.log(shoppingCart.items)

console.log(order.orderStatus)
