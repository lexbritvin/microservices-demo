import { PaymentCreatedEvent, Publisher, Subjects } from "@lexbritvintickets/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}