import { ExpirationCompleteEvent, Publisher, Subjects } from "@lexbritvintickets/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}