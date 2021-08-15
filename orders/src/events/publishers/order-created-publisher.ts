import { Publisher, OrderCreatedEvent, Subjects } from "@lexbritvintickets/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}