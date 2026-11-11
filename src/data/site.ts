// All facts come from veon/client.json (W-F002, W-F004, W-F006, W-F007, contacts, socials).
export const phones = [
  { label: "044 333 4 333", href: "tel:+380443334333" },
  { label: "0 800 753 357", href: "tel:0800753357" },
];
export const telegram = "https://t.me/omegamcua";
export const socials = [
  { name: "Facebook", href: "https://www.facebook.com/omegamc.ua" },
  { name: "Instagram", href: "https://www.instagram.com/omegamc.ua/" },
  { name: "YouTube", href: "https://www.youtube.com/channel/UCUNVXw-I0hLXhHjIyxFnf7A" },
];
const map = (q: string) => "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(q);
export const branches = [
  { station: "Площа Українських Героїв", street: "вул. Володимирська, 81-А", note: "Медичний центр на Володимирській · Шевченківський р-н", hours: ["Пн–Пт 08:00–19:00", "Сб 09:00–17:00", "Нд вихідний"], short: "Пн–Пт 08:00–19:00, Сб 09:00–17:00", route: map("вул. Володимирська, 81-А, Київ") },
  { station: "Чернігівська", street: "вул. Андрія Малишка, 39", note: "Відділення на Малишка", hours: ["Щодня 08:00–21:00"], short: "щодня 08:00–21:00", route: map("вул. Андрія Малишка, 39, Київ") },
  { station: "Васильківська", street: "вул. Максимовича, 10", note: "Центр хірургії на Максимовича", hours: ["Щодня 08:00–21:00"], short: "щодня 08:00–21:00", route: map("вул. Максимовича, 10, Київ") },
];
