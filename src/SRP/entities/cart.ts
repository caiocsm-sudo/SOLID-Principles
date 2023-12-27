type Product = { name: string; price: number }

class ShoppingCart {
  private readonly _items: Product[] = []

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
    return +this._items.reduce((a, n) => a + n.price, 0).toFixed(2)
  }

  isEmpty(): boolean {
    return this._items.length === 0
  }

  clear(): void {
    this._items.length = 0
  }
}

export default ShoppingCart;
