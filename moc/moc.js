const productStore = [
  {
    Name: 'Shampoo',
    image: 'https://novus.online/uploads/thumb/13681-4-8001090673329.webp',
    description: 'Шампунь для щоденного використання.',
    price: 120,
    category: 'Догляд за волоссям',
    status: true,
    quantity: 50,
    brand: 'Clear',
    volume: 400,
  },
  {
    Name: 'Beard oil',
    image: 'https://novus.online/uploads/thumb/77461-6-4820230952865.webp',
    description: 'Олія для бороди для живлення та зволоження.',
    price: 200,
    category: 'Догляд за бородою',
    status: true,
    quantity: 20,
    brand: 'Proraso',
    volume: 30,
  },
  {
    Name: 'Shaving cream',
    image: 'https://novus.online/uploads/thumb/64081-6-4820147056212.webp',
    description: 'Крем для гоління для чутливої ​​шкіри.',
    price: 180,
    category: 'Гоління',
    status: true,
    quantity: 30,
    brand: 'Gillette',
    volume: 200,
  },
  {
    Name: 'Hair wax',
    image: 'https://novus.online/uploads/thumb/4422-4-3600542389099.webp',
    description: 'Віск для волосся для сильної фіксації та блиску.',
    price: 170,
    category: 'Укладання',
    status: true,
    quantity: 15,
    brand: "L'Oréal",
    volume: 100,
  },
  {
    Name: 'Nivea',
    image: 'https://novus.online/uploads/thumb/50111-6-5900717082427.webp',
    description: "Гель для душу з ароматом м'яти.",
    price: 100,
    category: 'Догляд за тілом',
    status: true,
    quantity: 75,
    brand: 'Nivea',
    volume: 250,
  },
  {
    Name: 'Toothpaste',
    image: 'https://novus.online/uploads/thumb/64354-6-8718951312173.webp',
    description: 'Зубна паста для захисту від карієсу.',
    price: 80,
    category: 'Догляд за зубами',
    status: true,
    quantity: 100,
    brand: 'Colgate',
    volume: 75,
  },
  {
    Name: 'Deodorant',
    image: 'https://novus.online/uploads/thumb/32973-6-59079774.webp',
    description: 'Дезодорант для захисту від поту на 48 годин.',
    price: 150,
    category: 'Догляд за тілом',
    status: true,
    quantity: 50,
    brand: 'Rexona',
    volume: 150,
  },
];

//Додайте картинки.
const serices = [
  {
    name: 'Чоловіча стрижка',
    description: 'Класична чоловіча стрижка.',
    master: {
      firstName: 'Іван',
      lastName: 'Петренко',
    },
    availability: [
      {
        date: '2024-03-27',
        time: ['10:00', '11:00', '13:00'],
      },
      {
        date: '2024-03-28',
        time: ['9:00', '12:00', '14:00'],
      },
      {
        date: '2024-03-29',
        time: ['10:00', '11:00', '15:00'],
      },
    ],
    photo: 'https://commons.wikimedia.org/wiki/File:Male_hairstyle_2.jpg',
    price: 200,
    rating: 4.5,
  },
  {
    name: 'Жіноча стрижка',
    description: 'Модна жіноча стрижка.',
    master: {
      firstName: 'Олена',
      lastName: 'Сидоренко',
    },
    availability: [
      {
        date: '2024-03-27',
        time: ['12:00', '14:00', '16:00'],
      },
      {
        date: '2024-03-28',
        time: ['10:00', '13:00', '15:00'],
      },
      {
        date: '2024-03-29',
        time: ['9:00', '11:00', '14:00'],
      },
    ],
    photo: 'https://commons.wikimedia.org/wiki/File:Female_hairstyle_1.jpg',
    price: 300,
    rating: 4.8,
  },
  {
    name: 'Манікюр',
    description:
      'Класичний манікюр з обрізанням кутикули, шліфуванням та покриттям лаком.',
    master: {
      firstName: 'Ірина',
      lastName: 'Степанова',
    },
    availability: [
      {
        date: '2024-03-27',
        time: ['10:00', '12:00', '14:00'],
      },
      {
        date: '2024-03-28',
        time: ['9:00', '11:00', '13:00'],
      },
      {
        date: '2024-03-29',
        time: ['10:00', '12:00', '15:00'],
      },
    ],
    photo: 'https://commons.wikimedia.org/wiki/File:Manicure_2.jpg',
    price: 250,
    rating: 4.7,
  },
  {
    name: 'Педикюр',
    description:
      'Класичний педикюр з обрізанням кутикули, шліфуванням та покриттям лаком.',
    master: {
      firstName: 'Олександр',
      lastName: 'Бойко',
    },
    availability: [
      {
        date: '2024-03-27',
        time: ['11:00', '13:00', '15:00'],
      },
      {
        date: '2024-03-28',
        time: ['10:00', '12:00', '14:00'],
      },
      {
        date: '2024-03-29',
        time: ['9:00', '11:00', '13:00'],
      },
    ],
    photo: 'https://commons.wikimedia.org/wiki/File:Pedicure_1.jpg',
    price: 300,
    rating: 4.9,
  },
  {
    name: 'Очищення обличчя',
    description:
      'Глибоке очищення обличчя з використанням професійної косметики.',
    master: {
      firstName: 'Тетяна',
      lastName: 'Сидоренко',
    },
    availability: [
      {
        date: '2024-03-27',
        time: ['10:00', '12:00', '14:00'],
      },
      {
        date: '2024-03-28',
        time: ['9:00', '11:00', '13:00'],
      },
      {
        date: '2024-03-29',
        time: ['10:00', '12:00', '15:00'],
      },
    ],
    photo: 'https://commons.wikimedia.org/wiki/File:Facial_cleansing.jpg',
    price: 400,
    rating: 4.6,
  },
  {
    name: 'Масаж обличчя',
    description: 'Розслабляючий або антивіковий масаж обличчя.',
    master: {
      firstName: 'Сергій',
      lastName: 'Петров',
    },
    availability: [
      {
        date: '2024-03-27',
        time: ['11:00', '13:00', '15:00'],
      },
      {
        date: '2024-03-28',
        time: ['10:00', '12:00', '14:00'],
      },
      {
        date: '2024-03-29',
        time: ['9:00', '11:00', '13:00'],
      },
    ],
    photo: 'https://commons.wikimedia.org/wiki/File:Facial_massage.jpg',
    price: 450,
    rating: 4.8,
  },
];
//Додайте картинки.
const workers = [
  {
    id: 1,
    info: {
      name: 'Іван',
      surname: 'Петренко',
      birthdate: '1980-01-01',
      phone: ['+380950000000', '+380960000001'],
      email: 'ivan.petrenko@example.com',
      address: 'м. Київ, вул. Хрещатик, 1',
      passport: {
        series: 'AB',
        number: '123456',
      },
      contract: 'https://example.com/contract.pdf',
    },
    role: 'Адміністратор',
    salary: {
      type: 'Вихід',
      rate: 200,
    },
    vacation: {
      days: 20,
    },
    sick_leave: {
      days: 14,
    },
    schedule: 'ПН-ПТ',
  },
  {
    id: 2,
    info: {
      name: 'Олена',
      surname: 'Сидоренко',
      birthdate: '1985-02-02',
      phone: '+380970000002',
      email: 'olena.sydorenko@example.com',
      address: 'м. Київ, вул. Сагайдачного, 2',
      passport: {
        series: 'CD',
        number: '234567',
      },
      contract: 'https://example.com/contract2.pdf',
    },
    role: 'Оператор',
    salary: {
      type: 'Ставка',
      rate: 15000,
    },
    vacation: {
      days: 25,
    },
    sick_leave: {
      days: 10,
    },
    schedule: '2/2',
  },
  {
    id: 3,
    info: {
      name: 'Тарас',
      surname: 'Іванов',
      birthdate: '1990-03-03',
      phone: '+380980000003',
      email: 'taras.ivanov@example.com',
      address: 'м. Київ, вул. Банкова, 3',
      passport: {
        series: 'EF',
        number: '345678',
      },
      contract: 'https://example.com/contract3.pdf',
    },
    role: 'Майстер',
    salary: {
      type: 'Відсоток',
      rate: 0.2,
    },
    vacation: {
      days: 28,
    },
    sick_leave: {
      days: 12,
    },
    schedule: 'Вільний графік',
  },
  {
    id: 5,
    info: {
      name: 'Олександр',
      surname: 'Бойко',
      birthdate: '1987-05-05',
      phone: ['+380930000005', '+380940000006'],
      email: 'oleksandr.boyko@example.com',
      address: 'м. Київ, вул. Личаківська, 5',
      passport: {
        series: 'IJ',
        number: '567890',
      },
      contract: 'https://example.com/contract5.pdf',
    },
    role: 'Перукар',
    salary: {
      type: 'Відсоток',
      rate: 0.25,
    },
    vacation: {
      days: 25,
    },
    sick_leave: {
      days: 12,
    },
    schedule: '2/2',
  },
  {
    id: 6,
    info: {
      name: 'Ірина',
      surname: 'Петренко',
      birthdate: '1992-06-06',
      phone: '+380950000007',
      email: 'iryna.petrenko@example.com',
      address: 'м. Київ, вул. Саксаганського, 6',
      passport: {
        series: 'KL',
        number: '678901',
      },
      contract: 'https://example.com/contract6.pdf',
    },
    role: 'Перукар',
    salary: {
      type: 'Ставка',
      rate: 18000,
    },
    vacation: {
      days: 28,
    },
    sick_leave: {
      days: 10,
    },
    schedule: 'Вільний графік',
  },
  {
    id: 7,
    info: {
      name: 'Сергій',
      surname: 'Іванов',
      birthdate: '1997-07-07',
      phone: '+380960000008',
      email: 'sergiy.ivanov@example.com',
      address: 'м. Київ, вул. Грушевського, 7',
      passport: {
        series: 'MN',
        number: '789012',
      },
      contract: 'https://example.com/contract7.pdf',
    },
    role: 'Перукар',
    salary: {
      type: 'Вихід',
      rate: 250,
    },
    vacation: {
      days: 20,
    },
    sick_leave: {
      days: 14,
    },
    schedule: 'ПН-ПТ',
  },
];
//Додайте картинки.
const castumers = [
  {
    userName: 'Ivan',
    lastName: 'Petrenko',
    birthDate: '01.01.1990',
    source: 'street advertising',
    contactInformation: {
      email: '[redacted email address]',
      phone: '+380 99 999 99 99',
    },
    socialNetworks: {
      facebook: '[redacted URL]',
      telegram: '[redacted URL]',
    },
    visitHistory: [
      {
        name: 'Visit 1',
        date: '10.03.2024',
        serviceAndMaster: "Men's haircut, Olena",
        clientFeedback: 'Very happy with the haircut. Olena is a great master!',
      },
    ],
  },
  {
    userName: 'Maria',
    lastName: 'Shevchenko',
    birthDate: '15.05.1995',
    source: 'telegram',
    contactInformation: {
      email: '[redacted email address]',
      phone: '+380 66 666 66 66',
    },
    socialNetworks: {
      telegram: 't.me/maria_shevchenko',
    },
    visitHistory: [
      {
        name: 'Visit 1',
        date: '15.03.2024',
        serviceAndMaster: 'Manicure, Igor',
        clientFeedback:
          'Igor is a true master of his craft! Very happy with the manicure.',
      },
    ],
  },
  {
    userName: 'Mykhailo',
    lastName: 'Boyko',
    birthDate: '20.10.2000',
    source: 'social networks',
    contactInformation: {
      email: '[redacted email address]',
      phone: '+380 77 777 77 77',
    },
    socialNetworks: {
      facebook: '[redacted URL]',
    },
    visitHistory: [
      {
        name: 'Visit 1',
        date: '20.03.2024',
        serviceAndMaster: 'Face cleaning, Kateryna',
        clientFeedback:
          'Kateryna is a very pleasant and professional master. Very satisfied with the procedure.',
      },
    ],
  },

  {
    userName: 'Sofia',
    lastName: 'Kovalenko',
    birthDate: '08.03.1985',
    source: 'website',
    contactInformation: {
      email: '[redacted email address]',
      phone: '+380 50 555 55 55',
    },
    socialNetworks: {
      facebook: '[redacted URL]',
    },
    visitHistory: [
      {
        name: 'Visit 1',
        date: '22.03.2024',
        serviceAndMaster: 'Hair coloring, Anna',
        clientFeedback:
          "Anna did a great job with my hair coloring! I'm very happy with the result.",
      },
    ],
  },
  {
    userName: 'Dmytro',
    lastName: 'Zhuk',
    birthDate: '12.07.1990',
    source: 'friend recommendation',
    contactInformation: {
      email: '[redacted email address]',
      phone: '+380 63 333 33 33',
    },
    socialNetworks: {
      telegram: 't.me/dmytro_zhuk',
    },
    visitHistory: [
      {
        name: 'Visit 1',
        date: '25.03.2024',
        serviceAndMaster: 'Beard trim, Taras',
        clientFeedback:
          'Taras is a real professional! Very happy with the beard trim.',
      },
    ],
  },
  {
    userName: 'Olena',
    lastName: 'Petrenko',
    birthDate: '20.05.2005',
    source: 'instagram',
    contactInformation: {
      email: '[redacted email address]',
      phone: '+380 98 888 88 88',
    },
    socialNetworks: {
      instagram: 'instagram.com/olena_petrenko',
    },
    visitHistory: [
      {
        name: 'Visit 1',
        date: '27.03.2024',
        serviceAndMaster: 'Eyebrow shaping, Kateryna',
        clientFeedback:
          'Kateryna did a wonderful job with my eyebrows! I love the new shape.',
      },
    ],
  },
];
