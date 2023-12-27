type OrderStatus = "open" | "closed"
import ShoppingCart from "./cart.ts"
import { Messaging } from "../services/messaging.ts"
import { Persistency } from "../services/persistency.ts"

export class Order {
  private _orderStatus: OrderStatus = "open"

  constructor(
    private readonly cart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency
  ) {}

  get orderStatus(): Readonly<OrderStatus> {
    return this._orderStatus
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log("your cart is empty")
      return
    }

    const currency = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(this.cart.total())

    this._orderStatus = "closed"
    this.messaging.sendMessage(
      `Your order with total of ${currency} was recieved`,
    )

    this.persistency.saveOrder()
    this.cart.clear()
  }
}
