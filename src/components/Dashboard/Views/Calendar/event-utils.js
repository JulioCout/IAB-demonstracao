let eventGuid = 0;
var today = new Date();
var y = today.getFullYear();
var m = today.getMonth();
var d = today.getDate();

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: "Sessão",
    start: new Date(y, m, 1),
    className: "event-default",
  },
  {
    id: createEventId(),
    title: "Reunião",
    start: new Date(y, m, d - 1, 10, 30),
    allDay: false,
    className: "event-green",
  },
  {
    id: createEventId(),
    title: "Sessão",
    start: new Date(y, m, d + 7, 12, 0),
    end: new Date(y, m, d + 7, 14, 0),
    allDay: false,
    className: "event-red",
  },
  {
    id: createEventId(),
    title: "Lançamento",
    start: new Date(y, m, d - 2, 12, 0),
    allDay: true,
    className: "event-azure",
  },
  {
    id: createEventId(),
    title: "Aniversário",
    start: new Date(y, m, d + 1, 19, 0),
    end: new Date(y, m, d + 1, 22, 30),
    allDay: false,
    className: "event-azure",
  },
  {
    id: createEventId(),
    title: "Evento",
    start: new Date(y, m, 21),
    end: new Date(y, m, 22),
    url: "",
    className: "event-orange",
  },
  {
    id: createEventId(),
    title: "Reunião",
    start: new Date(y, m, 21),
    end: new Date(y, m, 22),
    url: "",
    className: "event-orange",
  },
];

export function createEventId() {
  return String(eventGuid++);
}
