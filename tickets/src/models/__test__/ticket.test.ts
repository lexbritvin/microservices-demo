import { Ticket } from "../ticket";

it('implements optimistic concurrency control', async () => {
  const ticket = Ticket.build({
    title: 'test1',
    price: 5,
    userId: '123',
  });

  await ticket.save();

  const instance1 = await Ticket.findById(ticket.id);
  const instance2 = await Ticket.findById(ticket.id);

  instance1!.set({ price: 10 });
  instance2!.set({ price: 15 });

  await instance1!.save();

  try {
    await instance2!.save();
    throw new Error('Should not reach this point');
  } catch(err) {}
});

it('increments the version number on multiple saves', async () => {
  const ticket = Ticket.build({
    title: 'test',
    price: 10,
    userId: '123',
  });

  await ticket.save();
  expect(ticket.version).toEqual(0);
  await ticket.save();
  expect(ticket.version).toEqual(1);
  await ticket.save();
  expect(ticket.version).toEqual(2);
});