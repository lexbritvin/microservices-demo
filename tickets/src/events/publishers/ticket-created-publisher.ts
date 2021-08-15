import { Publisher, Subjects, TicketCreatedEvent } from '@lexbritvintickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}