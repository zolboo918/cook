import {COLORS} from '../constants';

export const HomeTab = [
  {
    text: 'Хоолны хэм',
    icon: 'id-badge',
  },
  {
    text: 'Дээж бүртгэл',
    icon: 'file-plus',
  },
  {
    text: 'ХААБ',
    icon: 'shield-plus-outline',
  },
];
export const ProcessFoogMenuMainTabs = [
  {
    text: 'Бага анги',
  },
  {
    text: 'Дунд анги',
  },
  {
    text: 'Ахлах анги',
  },
  {
    text: 'Бусад',
  },
];

export const ProcessFoogMenuSecondTabs = [
  {
    text: 'Сарын цэс',
  },
  {
    text: '7 хоногийн цэс',
  },
  {
    text: 'Өдрийн цэс',
  },
];

export const ProcessFoodMenuDetailTabs = [
  {
    text: 'Орц',
    icon: 'id-badge',
  },
  {
    image: require('../assets/images/pot.png'),
    text: 'Технологи ажиллагаа',
  },
];
export const SavedReceiptDetailTabs = [
  {
    text: 'Орц',
    icon: 'id-badge',
  },
  {
    image: require('../assets/images/pot.png'),
    text: 'Хийх дараалал',
  },
];

export const HomeStatData = [
  {
    color: '#93C44B',
    unit: 'ккал',
    value: '865',
    title: 'Илчлэг',
    difference: '+20%',
    percent: '70',
  },
  {
    color: '#FB9630',
    unit: '',
    value: '40',
    title: 'Уураг',
    difference: '-10%',
    percent: '40',
  },
  {
    color: '#FB9630',
    unit: '',
    value: '40',
    title: 'Өөх тос',
    difference: '-10%',
    percent: '40',
  },
  {
    color: '#FB9630',
    unit: '',
    value: '40',
    title: 'Өөх тос',
    difference: '-10%',
    percent: '40',
  },
];

export const FoodData = [
  {
    picture: require('../assets/images/shul.png'),
    type: '1-р хоол',
    name: 'Гурилтай шөл',
  },
  {
    picture: require('../assets/images/huurga.png'),
    type: '2-р хоол',
    name: 'Хуурга',
  },
  {
    picture: require('../assets/images/nogoo.png'),
    type: 'Хачир',
    name: 'Өргөст хэмх',
  },
  {
    picture: require('../assets/images/hartsai.png'),
    type: 'Уух зүйл',
    name: 'Хар цай',
  },
];

export const MenuListData = [
  {
    icon: 'book',
    name: 'Хоолны цэс боловсруулах',
  },
  {
    icon: 'pushpino',
    name: 'Миний хадгалсан жор',
  },
  {
    icon: 'copy1',
    name: 'Жишиг цэс',
  },
];

import {LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['fr'] = {
  monthNames: [
    'Нэг.',
    'Хоёр.',
    'Гурав.',
    'Дөрөв.',
    'Тав.',
    'Зургаа.',
    'Долоо.',
    'Найм.',
    'Ес.',
    'Арав.',
    'Арван нэг.',
    'Арван хоёр.',
  ],
  monthNamesShort: [
    'Нэг.',
    'Хоёр.',
    'Гурав.',
    'Дөрөв.',
    'Тав.',
    'Зургаа.',
    'Долоо.',
    'Найм.',
    'Ес.',
    'Арав.',
    'Арван нэг.',
    'Арван хоёр.',
  ],
  dayNames: ['Даваа', 'Мягмар', 'Лхагва', 'Пүрэв', 'Баасан', 'Бямба', 'Ням'],
  dayNamesShort: ['Ня', 'Да', 'Мя', 'Лх', 'Пү', 'Ба', 'Бя'],
  today: "Aujourd'hui",
};
LocaleConfig.defaultLocale = 'fr';

export const ReceiptData = [
  {
    image: require('../assets/images/nogoo.png'),
    name: 'Үхрийн мах /ясгүй',
    value: '1',
    unit: 'кг',
  },
  {
    image: require('../assets/images/nogoo.png'),
    name: 'Төмс',
    value: '300',
    unit: 'гр',
  },
  {
    image: require('../assets/images/nogoo.png'),
    name: 'Байцаа',
    value: '100',
    unit: 'гр',
  },
  {
    image: require('../assets/images/nogoo.png'),
    name: 'Үхрийн мах /ясгүй',
    unit: 'кг',
  },
  {
    image: require('../assets/images/nogoo.png'),
    name: 'Төмс',
    unit: 'гр',
  },
  {
    image: require('../assets/images/nogoo.png'),
    name: 'Байцаа',
    unit: 'гр',
  },
  {
    image: require('../assets/images/nogoo.png'),
    name: 'Үхрийн мах /ясгүй',
    unit: 'кг',
  },
  {
    image: require('../assets/images/nogoo.png'),
    name: 'Төмс',
    unit: 'гр',
  },
  {
    image: require('../assets/images/nogoo.png'),
    name: 'Байцаа',
    unit: 'гр',
  },
];

export const SavedReceiptData = [
  {
    image: require('../assets/images/nogoo.png'),
    name: 'Үхрийн мах /ясгүй',
    unit: '1,5 kг',
  },
  {
    image: require('../assets/images/nogoo.png'),
    name: 'Төмс',
    unit: '0,3 kг',
  },
  {
    image: require('../assets/images/nogoo.png'),
    name: 'Байцаа',
    unit: '0,4 kг',
  },
  {
    image: require('../assets/images/nogoo.png'),
    name: 'Үхрийн мах /ясгүй',
    unit: '1,5 kг',
  },
  {
    image: require('../assets/images/nogoo.png'),
    name: 'Төмс',
    unit: '0,3 kг',
  },
  {
    image: require('../assets/images/nogoo.png'),
    name: 'Байцаа',
    unit: '0,4 kг',
  },
  {
    image: require('../assets/images/nogoo.png'),
    name: 'Үхрийн мах /ясгүй',
    unit: '1,5 kг',
  },
  {
    image: require('../assets/images/nogoo.png'),
    name: 'Төмс',
    unit: '0,3 kг',
  },
  {
    image: require('../assets/images/nogoo.png'),
    name: 'Байцаа',
    unit: '0,4 kг',
  },
  {
    image: require('../assets/images/nogoo.png'),
    name: 'Үхрийн мах /ясгүй',
    unit: '1,5 kг',
  },
  {
    image: require('../assets/images/nogoo.png'),
    name: 'Төмс',
    unit: '0,3 kг',
  },
  {
    image: require('../assets/images/nogoo.png'),
    name: 'Байцаа',
    unit: '0,4 kг',
  },
];

export const SavedReceiptListData = [
  {
    picture: require('../assets/images/shul.png'),
    type: 'Миний хадгалсан',
    name: 'Зууш',
  },
  {
    picture: require('../assets/images/huurga.png'),
    type: 'Миний хадгалсан',
    name: 'Цезарь салат',
  },
  {
    picture: require('../assets/images/nogoo.png'),
    type: 'Миний хадгалсан',
    name: 'Паста',
  },
  {
    picture: require('../assets/images/hartsai.png'),
    type: 'Миний хадгалсан',
    name: 'Яргай загас',
  },
  {
    picture: require('../assets/images/shul.png'),
    type: 'Миний хадгалсан',
    name: 'Зууш',
  },
  {
    picture: require('../assets/images/huurga.png'),
    type: 'Миний хадгалсан',
    name: 'Цезарь салат',
  },
];

export const CategoryData = [
  {
    image: require('../assets/images/1rhool.png'),
    name: '1-р хоол',
  },
  {
    image: require('../assets/images/2rhool.png'),
    name: '2-р хоол',
  },
  {
    image: require('../assets/images/hachir.png'),
    name: 'Хачир',
  },
  {
    image: require('../assets/images/uuh.png'),
    name: 'Уух зүйл',
  },
];

export const ExampleSubMenuData = [
  {
    name: 'Будаатай шөл',
  },
  {
    name: 'Ногоотой шөл',
  },
  {
    name: 'Гурилтай шөл',
  },
  {
    name: 'Пүнтүүзтэй шөл',
  },
];
