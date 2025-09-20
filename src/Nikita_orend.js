// Масив житла
const housingList = [
  {
    id: 1,
    country: "Україна",
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
    country: "Україна",
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
    country: "Україна",
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
    country: "Україна",
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
    country: "Польща",
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
    country: "Польща",
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
    country: "Польща",
    title: "Апартаменти у Познані",
    description: "Біля Ринкової площі",
    price: "325 zl/місяць",
    photos: [
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/190750532.jpg?k=a2f03d15c4d698d7c5b4f6932d759019fa41c3a3a3ed1d26bd50b28d0caeea05&o=&hp=1"
    ],
    spots: [
      { name: "Місце 1", isAvailable: true },
      { name: "Місце 2", isAvailable: true },
      { name: "Місце 3", isAvailable: true }
    ]
  },

  {
    id: 8,
    country: "Польща",
    title: "Бізнес-апартаменти у Кракові",
    description: "Поруч центр; у послуги включено Ві-Фі, обслуговування з ресторану (з 7:00 до 21:00 включно)",
    price: "в залежності від рівня комфорту",
    photos: [
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/556003583.jpg?k=ddb727e20ba82ea7020d246b26852ab6c4f2ee893adc2eae16cc4ab84a00b20a&o=&hp=1"
    ],
    spots: [
      { name: "2 містний номер (275 zl/тиждень)", isAvailable: true },
      { name: "3 містний номер (320 zl/тиждень)", isAvailable: true },
      { name: "2 містний номер 'Люкс' (450 zl/тиждень)", isAvailable: true },
      { name: "3 містний номер 'Люкс' (680 zl/тиждень)", isAvailable: true }
    ]
  },

  {
    id: 9,
    country: "Франція",
    title: "Квартира у Парижі для буржуазії",
    description: "Ну дуже по-багатому...",
    price: "€200/ніч",
    photos: [
      "https://media.admagazine.ru/photos/61dc2d50977bd1a074418495/16:9/w_2560%2Cc_limit/Rue%2520de%2520Lappe-21.jpg"
    ],
    spots: [
      { name: "Місце", isAvailable: true }
    ]
  },

  {
    id: 10,
    country: "Франція",
    title: "Квартира на два місця у Іль-де-Франсі",
    description: "Чудовий район, щоб попоїсти круасанів",
    price: "€400/місяць",
    photos: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-931272203281182721/original/dd6fbf40-4861-42e3-b10e-de81e92f97fc.jpeg"
    ],
    spots: [
      { name: "Місце 1", isAvailable: true },
      { name: "Місце 2", isAvailable: true }
    ]
  },

  {
    id: 11,
    country: "Франція",
    title: "Квартира у Марселі",
    description: "Уютна, красива. Підходить для медового місяця :)",
    price: "€450/місяць",
    photos: [
      "https://housinganywhere.imgix.net/unit_type/1351223/05ec6201-0ebf-4f94-8945-0115cf4f2d21.jpg?ixlib=react-9.8.1&auto=format&fit=crop&ar=1%3A1&q=45"
    ],
    spots: [
      { name: "Місце 1", isAvailable: true },
      { name: "Місце 2", isAvailable: true },
      { name: "Місце 1+2 з дод послугами (+€70)", isAvailable: true }
    ]
  },

  {
    id: 12,
    country: "Іспанія",
    title: "Квартира у Мадриді",
    description: "Поруч центр",
    price: "€200/тиждень",
    photos: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-800520697745462796/original/b0e48fed-9bf9-4084-bbc7-68f500c022f0.jpeg"
    ],
    spots: [
      { name: "Місце 1", isAvailable: true },
      { name: "Місце 2", isAvailable: true }
    ]
  },

  {
    id: 13,
    country: "Іспанія",
    title: "Квартира у Барселоні",
    description: "",
    price: "€195/тиждень",
    photos: [
      "https://a0.muscache.com/im/pictures/airflow/Hosting-3089510/original/b55537c5-ef71-418f-a5a0-a227661acd20.jpg"
    ],
    spots: [
      { name: "Наявність квартири", isAvailable: true }
    ]
  },

  {
    id: 14,
    country: "Італія",
    title: "Квартира-апартамент у Римі",
    description: "Оп - і ти вже будеш у Ватикані",
    price: "€320/тиждень",
    photos: [
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTc5MTI1MjA=/original/c5e31826-21e0-46d1-877f-a21deffc6cb9.jpeg"
    ],
    spots: [
      { name: "Апартамент-місце 1", isAvailable: true },
      { name: "Апартамент-місце 2", isAvailable: true },
      { name: "Апартамент-місце 3", isAvailable: true }
    ]
  },

  {
    id: 15,
    country: "Італія",
    title: "Апартаменти у Венеції",
    description: "Ідеальний вибір з вільним аквапарком (на вулицях міста)",
    price: "€380/тиждень",
    photos: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-30413020/original/cdb92282-05b4-41f1-9ecb-4b49158a22a5.jpeg"
    ],
    spots: [
      { name: "Місце 1", isAvailable: true },
      { name: "Місце 2", isAvailable: true }
    ]
  },

  {
    id: 16,
    country: "Єгипет",
    title: "Затишна квартира у Каїрі",
    description: "Головне не виходьте уночі на вулицю хD",
    price: "EGP 300/місяць",
    photos: [
      "https://r-xx.bstatic.com/xdata/images/xphoto/608x352/48386143.webp?k=b72fc89efe3eb2d9302566cefd5af60256cc8d61cbe441954418bf9f73417bc1&o="
    ],
    spots: [
      { name: "Місце 1", isAvailable: true },
      { name: "Місце 2", isAvailable: true },
      { name: "Місце 3", isAvailable: true },
      { name: "Місце 4", isAvailable: true }
    ]
  },

  {
    id: 17,
    country: "Грузія",
    title: "Квартира в Батумі",
    description: "Поруч центр міста. Дорога на пляж займає до 10 хв",
    price: "2700 грн./2 ночі",
    photos: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-1428380369058878970/original/73df8216-2e5f-4838-8d0c-283ff5b089cc.jpeg"
    ],
    spots: [
      { name: "Місце 1", isAvailable: true },
      { name: "Місце 2", isAvailable: true },
    ]
  },

  {
    id: 18,
    country: "Грузія",
    title: "Затишна квартира в Поті",
    description: "Центр міста. Поруч море)",
    price: "1835 грн/ніч",
    photos: [
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTIyOTUzMTE1Mjk5MzY4MDM2Mg==/original/7185bc09-da43-4492-8c28-78862c0cdfcf.png?im_w=1200"
    ],
    spots: [
      { name: "Ліжко 1", isAvailable: true },
      { name: "Ліжко 2", isAvailable: true },
      { name: "Ліжко 3", isAvailable: true }
    ]
  },

  {
    id: 19,
    country: "Турція",
    title: "Кімнати для жінок у центрі Стамбула",
    description: "Увага! Апартаменти онлі для жінок",
    price: "1115 грн/ніч",
    photos: [
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1284594247000962214/original/e51b18c8-5df4-4481-94f7-b25794ce504d.jpeg?im_w=7200"
    ],
    spots: [
      { name: "Місце 1", isAvailable: true },
      { name: "Місце 2", isAvailable: true },
      { name: "Місце 3", isAvailable: true },
      { name: "Місце 4", isAvailable: true }
    ]
  },

  {
    id: 20,
    country: "Азербайджан",
    title: "Квартира-апартамент у Баку",
    description: "До Каспія - як рукою махнути!",
    price: "1700 грн/ніч",
    photos: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-1131766725652299291/original/1210a66b-b759-41ad-a172-a9e793d7fcd1.jpeg"
    ],
    spots: [
      { name: "Місце 1", isAvailable: true },
      { name: "Місце 2", isAvailable: true },
    ]
  },

  {
    id: 21,
    country: "Казахстан",
    title: "Хостел-квартира в центрі Астани",
    description: "Комфорт, зручність, кайф!",
    price: "1305 грн/ніч",
    photos: [
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1120077983994556966/original/294b6417-4b8b-4972-90e2-6ef21c7edb3a.jpeg?im_w=1200"
    ],
    spots: [
      { name: "Місце 1", isAvailable: true },
      { name: "Місце 2", isAvailable: true },
      { name: "Місце 3", isAvailable: true },
      { name: "Місце 4", isAvailable: true }
    ]
  },

  {
    id: 22,
    country: "Казахстан",
    title: "Лампова квартира-студія в Алмати",
    description: "Розташування біля озера Сайран",
    price: "1654 грн/ніч",
    photos: [
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1319713571505039577/original/f2c6dcbd-d287-44dd-9547-d4c691a45a1a.jpeg?im_w=1200"
    ],
    spots: [
      { name: "Місце 1", isAvailable: true },
      { name: "Місце 2", isAvailable: true }
    ]
  },

  {
    id: 23,
    country: "Монглогія",
    title: "Стильне помешкання в Улан-Баторі",
    description: "Поруч Сухбаатарська площа",
    price: "1650 грн/ніч",
    photos: [
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1506090320342711398/original/cd6ab69a-2fe2-4aa4-8627-ea7e52c05cdd.jpeg?im_w=1200"
    ],
    spots: [
      { name: "Місце 1", isAvailable: true },
      { name: "Місце 2", isAvailable: true },
      { name: "Місце 3", isAvailable: true }
    ]
  },

  {
    id: 24,
    country: "Гренландія",
    title: "Сектор кімнат у центрі міста",
    description: "Доступна ціна і комфортне розташування",
    price: "4109 грн/ніч",
    photos: [
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1432068338687259187/original/b40cb63f-b0a6-4f64-9706-7fca9573e411.jpeg?im_w=1200"
    ],
    spots: [
      { name: "Місце 1", isAvailable: true },
      { name: "Місце 2", isAvailable: true },
      { name: "Місце 3", isAvailable: true },
      { name: "Місце 4", isAvailable: true }
    ]
  },

  {
    id: 25,
    country: "Ісландія",
    title: "Невеликий гуртожиток-хата у Рейк'явіку",
    description: "Свіжий ісландський мох)",
    price: "4657 грн/ніч",
    photos: [
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1473024194323697613/original/1d4d21f7-6e73-48e0-bdd3-2a87b3b64a3b.jpeg?im_w=1200"
    ],
    spots: [
      { name: "Місце 1", isAvailable: true },
      { name: "Місце 2", isAvailable: true },
      { name: "Місце 3", isAvailable: true },
      { name: "Місце 4", isAvailable: true },
      { name: "Місце 5", isAvailable: true },
      { name: "Місце 6", isAvailable: true },
      { name: "Місце 7", isAvailable: true },
      { name: "Місце 8", isAvailable: true }
    ]
  },

  {
    id: 26,
    country: "Італія",
    title: "",
    description: "",
    price: "350.00",
    photos: [
      ""
    ],
    spots: [
      { name: "", isAvailable: true }
    ]
  }
];