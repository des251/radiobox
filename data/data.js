const serviceItems = {
  resume: [
    {
      icon: 'fas fa-tools',
      name: 'Все для пайки и радиомонтажа',
      text: 'У нас в ассортименте имеются аккумуляторы и зарядные устройства, измерительные приборы, куллеры, блоки питания, кнопки, тумблеры, выклучатели, большой выбор химии для пайки и радиомонтажа, припой. А так же термоусадочная трубка, текстолит, макетные платы и оптика.',
    },
    {
      icon: 'fas fa-charging-station',
      name: 'Аксессуары GSM',
      text: 'Подберем зарядное устройство для вашего мобильного телефона. Так же в продаже имеются шнуры USB ,для подключения мобильного телефона к компьютеру, наушники, аккумуляторы, USB- хабы , картридеры...',
    },
    {
      icon: 'fas fa-microchip',
      name: 'Радиокомпоненты',
      text: 'С чего начинается практическая электроника? Конечно с радиодеталей! Их разнообразие просто поражает. У нас вы сможете найти конденсаторы, транзисторы, диоды, потенциометры и многое другое. Есть в наличии и под заказ.',
    },
    {
      icon: 'fas fa-network-wired',
      name: 'Шнуры, кабели, переходники',
      text: 'Кабельная продукция и комплектующие, предназначенные для монтажа сетей широкополосного доступа в интернет, кабельного и спутникового TV, телефонии, систем видеонаблюдения. Это витая пара, коаксиальный кабель, акустический, телефонный, кабельная продукция для ZALA, аудио и видео переходники.',
    },
    {
      icon: 'fas fa-gamepad',
      name: 'Пульты дистанционного управления',
      text: 'Пульты для импортных и отечественных телевизоров, также для спутниковых ресиверов, цифровых приставок, для кондиционеров. Большой ассортимент пультов в наличии и под заказ.',
    },
    {
      icon: 'fas fa-lightbulb',
      name: 'Светодиодная продукция',
      text: 'Светодиоды, cветодиодная лента, cветодиодные модули, cветодиодные лампочки, cветодиодные фонари, cветодиодные прожекторы',
    },
  ],
  contacts: [
    {
      icon: 'fas fa-phone',
      name: 'Телефон',
      text: '+375 (29) 862 56 84',
    },
    {
      icon: 'fab fa-viber',
      name: 'Viber',
      text: '+375 (29) 524 87 88',
    },
    {
      icon: 'fas fa-envelope',
      name: 'Email',
      text: 'valbrestgsm@mail.ru',
    },
    {
      icon: 'fas fa-map-marker-alt',
      name: 'Адрес',
      text: 'Брест, ул.Куйбышева 13 пав.4',
    },
  ],
};

const team = [
  {
    img: 'images/vasia-2.jpg',
    name: 'Василий Гаранин',
    category: 'Продавец-консультант, менеджер по закупкам',
    vk: 'https://vk.com/id93975502/',
    inst: 'https://www.instagram.com/tweek8788/',
    fb: 'https://www.facebook.com/valbrestgsm/',
  },
  {
    img: 'images/denis.jpg',
    name: 'Денис Щербинский',
    category: 'Продавец-консультант, бухгалтер, администратор сайта',
    vk: 'https://vk.com/id5826206/',
    inst: 'https://www.instagram.com/des251/',
    fb: 'https://www.facebook.com/profile.php?id=100001908954271/',
  },
  {
    img: 'images/nadia.jpg',
    name: 'Надежда Щербинская',
    category: 'Директор',
    vk: 'https://vk.com/id144808401/',
    inst: 'https://www.instagram.com/lumpa27/',
    fb: '',
  },
];

const testimonials = [
  {
    img: 'images/user1.png',
    name: 'джон сноу',
    rate: 5,
    text: 'Единственный магазин, где удалось найти глицериновый флюс. Приятный магазин и персонал. 👍',
  },
  {
    img: 'images/user2.png',
    name: 'Ola Korolczuk',
    rate: 5,
    text: 'Отличный магазин! Огромный выбор товаров) уже много времени покупаю там нужные мне товары, покупала зарядку для телефона, отлично работает уже не первый год! И отдельное спасибо продавцам;) вежливость и умение слушать, что хочет покупатель это сейчас редкость) всем советую!',
  },
  {
    img: 'images/user3.png',
    name: '0.5 WATT',
    rate: 5,
    text: 'Самый лучший магазин радио компонентов в городе Бресте. Очень приятное и вежливое обслуживание. Всегда нахожу то что нужно.',
  },
  {
    img: 'images/user4.png',
    name: 'Сеня Щербинский',
    rate: 5,
    text: 'Лучший магазин, огромный ассортимент и персонал приятный, все на высшем уровне, закупаться только там)',
  },
  {
    img: 'images/user5.png',
    name: 'Александр Огородник',
    rate: 5,
    text: 'Хороший выбор, и приятный продавец.',
  },
];

const clients = [
  {
    link: 'https://www.robiton.ru/',
    logo: 'images/robiton-logo.png',
    name: 'Robiton',
  },
  {
    link: 'https://www.rexant.ru/',
    logo: 'images/rexant-logo.png',
    name: 'Rexant',
  },
  {
    link: 'http://www.proconnect.su/',
    logo: 'images/proconnect-logo.png',
    name: 'Proconnect',
  },
  {
    link: 'https://hocotech.com/ru/',
    logo: 'images/hoco-logo.png',
    name: 'Hoco',
  },
];

module.exports.serviceItems = serviceItems;
module.exports.team = team;
module.exports.testimonials = testimonials;
module.exports.clients = clients;