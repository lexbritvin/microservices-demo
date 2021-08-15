import { Publisher, OrderCancelledEvent, Subjects } from "@lexbritvintickets/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}