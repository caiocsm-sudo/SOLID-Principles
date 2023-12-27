type Product = { name: string; price: number }
type OrderStatus = "open" | "closed";

export class ShoppingCartNoSolid {
  private readonly _items: Product[] = []
  private _orderStatus: OrderStatus = "open"

  addItem(item: Product) {
    this._items.push(item)
  }

  removeItem(index: number) {
    this._items.splice(index, 1)
  }

  get items(): Readonly<Product[]> {
    return this._items
  }

  get orderStatus(): Readonly<OrderStatus> {
    return this._orderStatus;
  }

  total(): number {
    return +this._items.reduce((a, n) => a + n.price, 0).toFixed(2)
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log("your cart is empty")
      return
    }

    const currency = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(
      this.total(),
    )

    this._orderStatus = "closed"
    this.sendMessage(`Your order with total of ${currency} was recieved`)

    this.saveOrder()
    this.clear()
  }

  isEmpty(): boolean {
    return this._items.length === 0
  }

  sendMessage(message: string): void {
    console.log("Message sent: " + message)
  }

  saveOrder(): void {
    console.log("Order saved successfully!")
  }

  clear(): void {
    this._items.length = 0
  }
}

const shoppingCart = new ShoppingCartNoSolid()
shoppingCart.addItem({ name: "Camisa", price: 20 })
shoppingCart.addItem({ name: "Galinha", price: 9.5 })
shoppingCart.addItem({ name: "Contra Filé", price: 19.9 })

console.log(shoppingCart.total())
shoppingCart.checkout()

console.log(shoppingCart.items)
