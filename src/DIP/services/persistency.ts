import { PersistencyProtocol } from "../entities/interfaces/persistency-protocol.ts"

export class Persistency implements PersistencyProtocol {
  saveOrder(): void {
    console.log("Order saved successfully!")
  }
}