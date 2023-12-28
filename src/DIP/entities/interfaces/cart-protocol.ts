type Product = { name: string; price: number }

export interface ShoppingCartProtocol {
  items: Readonly<Product[]>
  addItem(item: Product): void
  removeItem(index: number): void
  total(): number
  totalWithDiscount(): number
  isEmpty(): boolean
  clear(): void
}
