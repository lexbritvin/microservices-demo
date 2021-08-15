import { Publisher, Subjects, TicketUpdatedEvent } from '@lexbritvintickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}