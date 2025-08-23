// Масив житла
const housingList = [
  {
    id: 1,
    title: "3-кімнатна квартира Вінниця",
    description: "Квартира у житломасиві Вінниці: поруч ринок 'Вишенька', трамвай та тролейбус",
    price: "$500.00/місяць",
    photos: [
      "https://metrazh.com.ua/files/images/items/4138/4138874l8fd379ca.jpg"
    ],
    spots: [
      { name: "Місце 1", isAvailable: true},
      { name: "Місце 2", isAvailable: true},
      { name: "Місце 3", isAvailable: true}
    ]
  },

  {
    id: 2,
    title: "2-кімнатний дім Харків",
    description: "Приватний дім у Харкові (район Основи). Поруч зупинка трамвая - до центру можна доїхати за 20 хвилин",
    price: "$300/місяць",
    photos: [
      "https://cdn.riastatic.com/photosnewr/dom/photo/realty__322735633-1850x1040x90.webp"
    ],
    spots: [
      { name: "Дім", isAvailable: true }
    ]
  },

  {
    id: 3,
    title: "Будинок Київ. Голосіївка",
    description: "Здається подобово. Поруч станція метро 'Виставковий центр' (у 10-15 хвилинах пішки)",
    price: "$50.00/день",
    photos: [
      "https://cdn.riastatic.com/photosnewr/dom/photo/realty__318363100-1850x1040x90.webp"
    ],
    spots: [
      { name: "Спальня 1", isAvailable: true },
      { name: "Спальня 2", isAvailable: true }
    ]
  },

  {
    id: 4,
    title: "Квартира у центрі Житомира",
    description: "Поруч знаходиться залізнчиний та автовокзал",
    price: "$250/місяць",
    photos: [
      "https://cdn.riastatic.com/photosnewr/dom/photo/realty__322774367-1850x1040x90.webp"
    ],
    spots: [
      { name: "Місце 1", isAvailable: true },
      { name: "Місце 2", isAvailable: true }
    ]
  },

  {
    id: 5,
    title: "Квартира у Хелмі (Польща)",
    description: "Поруч знаходиться зал.вокзал",
    price: "350 zl/місяць",
    photos: [
      "https://q-xx.bstatic.com/xdata/images/hotel/max500/135716068.jpg?k=a1fe2563210e0e3e45322f781b3830bebeeab307a1504b27663b6172b61d4f84&o="
    ],
    spots: [
      { name: "Місце 1", isAvailable: true },
      { name: "Місце 2", isAvailable: true },
      { name: "Місце 3", isAvailable: true },
      { name: "Місце 4", isAvailable: true }
    ]
  },

  {
    id: 6,
    title: "Будинок у Варшаві біля лісу",
    description: "",
    price: "350.00",
    photos: [
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTMzNDEzNTYxMzM4MTMyMDI4Ng==/original/1161eb46-d6ba-460c-8a47-56e7b0dcda84.jpeg",
      "src/img_orend/Warsaw_1.png"
    ],
    spots: [
      { name: "Будинок", isAvailable: true }
    ]
  },

  {
    id: 7,
    title: "",
    description: "",
    price: "350.00",
    photos: [
      ""
    ],
    spots: [
      { name: "", isAvailable: true }
    ]
  },
];