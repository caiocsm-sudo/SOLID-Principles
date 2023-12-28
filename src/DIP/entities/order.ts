type OrderStatus = "open" | "closed"

import { CustomerOrder } from "../../ISP/entities/interfaces/customer-protocol.ts"
import { ShoppingCartProtocol } from "./interfaces/cart-protocol.ts"
import { MessagingProtocol } from "./interfaces/messaging-protocol.ts"
import { PersistencyProtocol } from "./interfaces/persistency-protocol.ts"

// High level modules
export class Order {
  private _orderStatus: OrderStatus = "open"

  constructor(
    // Low level modules
    private readonly cart: ShoppingCartProtocol,
    private readonly messaging: MessagingProtocol,
    private readonly persistency: PersistencyProtocol,
    private readonly customer: CustomerOrder,
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
    }).format(this.cart.totalWithDiscount())

    this._orderStatus = "closed"
    this.messaging.sendMessage(
      `Your order with total of ${currency} was recieved`,
    )

    this.persistency.saveOrder()
    this.cart.clear()

    console.log(this.customer.getName() + " ordered some expensive shit.");
  }
}
