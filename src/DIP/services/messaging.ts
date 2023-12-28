import { MessagingProtocol } from "../entities/interfaces/messaging-protocol";

export class Messaging implements MessagingProtocol {
  sendMessage(message: string): void {
    console.log("Message sent: " + message)
  }
}
