import {
  EnterpriseCustomerProtocol,
  IndividualCustomerProtocol,
  CustomerOrder,
} from "./interfaces/customer-protocol.ts"

export class IndividualCustomer
  implements IndividualCustomerProtocol, CustomerOrder
{
  firstName: string
  lastName: string
  cpf: string

  constructor(firstName: string, lastName: string, cpf: string) {
    this.firstName = firstName
    this.lastName = lastName
    this.cpf = cpf
  }

  getName() {
    return `${this.firstName} ${this.lastName}`
  }

  getIDN() {
    return this.cpf
  }
}

export class EnterpriseCustomer
  implements EnterpriseCustomerProtocol, CustomerOrder
{
  name: string
  cnpj: string
  constructor(name: string, cnpj: string) {
    this.name = name
    this.cnpj = cnpj
  }

  getName(): string {
    return this.name
  }
  
  getIDN() {
    return this.cnpj
  }
}
