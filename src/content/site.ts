export type Service = {
  index: string
  title: string
  price: string
  summary: string
}

export const site = {
  name: 'Элит',
  shortName: 'ELIT',
  locale: 'ru',
  tagline: 'Салон, в который возвращаются',
  description: 'Стрижки, окрашивание и ногтевой сервис для всей семьи в Перово.',
  contact: {
    phone: '+7 (977) 128-77-70',
    phoneHref: 'tel:+79771287770',
    address: 'Москва, Перовская улица, 26, корп. 1',
    hours: 'Ежедневно до 20:00',
  },
  logoUrl: 'https://avatars.mds.yandex.net/get-maps-adv-crm/4034578/2a0000017ba08d06b1e4054a208eac13277d/landing_logo',
  heroUrl: 'https://avatars.mds.yandex.net/get-maps-adv-crm/3736055/2a0000017ba08d06b134e086afbb3bfedccd/landing_background',
  mapsUrl: 'https://yandex.ru/maps/org/elit/122199907963/',
  routeUrl: 'https://yandex.ru/maps?ll=37.772106%2C55.746355&mode=routes&rtext=~55.746355%2C37.772106&z=17',
  whatsappUrl: 'https://wa.me/79771287770',
  telegramUrl: 'https://t.me/+79771287770',
  rating: '5,0',
  reviewCount: '489 оценок',
}

export const services: Service[] = [
  { index: '01', title: 'Стрижки', price: 'от 500 ₽', summary: 'Женские, мужские и детские формы, укладки и челка.' },
  { index: '02', title: 'Окрашивание', price: 'от 1 500 ₽', summary: 'Один тон, мелирование, колорирование и сложные техники.' },
  { index: '03', title: 'Маникюр', price: 'от 1 200 ₽', summary: 'Уход, покрытие гель-лаком, мужской маникюр и наращивание.' },
  { index: '04', title: 'Педикюр', price: 'от 1 200 ₽', summary: 'Женский и мужской педикюр, обработка и покрытие.' },
  { index: '05', title: 'Брови и ресницы', price: 'от 300 ₽', summary: 'Коррекция и окрашивание бровей и ресниц.' },
  { index: '06', title: 'Перманент', price: 'от 5 000 ₽', summary: 'Брови, губы и межресничный контур.' },
]

export const gallery = [
  { src: site.heroUrl, alt: 'Интерьер салона Элит' },
  { src: 'https://avatars.mds.yandex.net/get-altay/18141736/2a0000019c845ad424c7a6f5943adb88c7b2/XXL_height', alt: 'Пространство салона Элит' },
  { src: 'https://avatars.mds.yandex.net/get-altay/19553098/2a0000019ad8d4f3df4b278ce0c2ea86b39e/XXL_height', alt: 'Детали интерьера салона Элит' },
]

export const trustPoints = [
  { value: '5,0', label: 'рейтинг на Яндекс Картах' },
  { value: '489', label: 'оценок клиентов' },
  { value: '2026', label: 'награда «Хорошее место»' },
]
