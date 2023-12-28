import { Discount } from "./discount.ts"
import { ShoppingCartProtocol } from "./interfaces/cart-protocol.ts";

type Product = { name: string; price: number }

class ShoppingCart implements ShoppingCartProtocol {
  private readonly _items: Product[] = []

  constructor(private readonly discount: Discount) {}

  addItem(item: Product) {
    this._items.push(item)
  }

  removeItem(index: number) {
    this._items.splice(index, 1)
  }

  get items(): Readonly<Product[]> {
    return this._items
  }

  total(): number {
    return +this._items.reduce((a, c) => a + c.price, 0).toFixed(2)
  }

  totalWithDiscount(): number {
    return this.discount.calculate(this.total())
  }

  isEmpty(): boolean {
    return this._items.length === 0
  }

  clear(): void {
    this._items.length = 0
  }
}

export default ShoppingCart
