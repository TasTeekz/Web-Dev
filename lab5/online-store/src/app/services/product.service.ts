import { Injectable } from '@angular/core';

import { Category } from '../models/category.model';
import { Product } from '../models/product.model';
import { PRODUCTS } from '../data/products';

const DEFAULT_LIKES = 0;

const CATEGORY = {
  smartphones: 1,
  laptops: 2,
  headphones: 3,
  tablets: 4,
} as const;

@Injectable({ providedIn: 'root' })
export class ProductService {
  readonly categories: ReadonlyArray<Category> = [
    { id: CATEGORY.smartphones, name: 'Smartphones' },
    { id: CATEGORY.laptops, name: 'Laptops' },
    { id: CATEGORY.headphones, name: 'Headphones' },
    { id: CATEGORY.tablets, name: 'Tablets' },
  ];

  readonly products: ReadonlyArray<Product> = [
    ...PRODUCTS,

    // Laptops
    {
      id: 117046774,
      name: 'ThundeRobot 911S Core D 15.6" / 16Gb / SSD 512Gb / Без ОС',
      description: `
Игровой ноутбук Thunderobot 911S Core D JT009K00F — 15.6-дюймовая модель с IPS-матрицей 1920×1080 и высокой частотой обновления до 144 Гц. Матовое покрытие снижает блики и делает работу комфортнее.

SSD 512 ГБ и видеокарта GeForce RTX 3050 (4 ГБ) на архитектуре Ampere обеспечивают хорошую производительность в играх и графических задачах. Поддержка DLSS повышает FPS, а Nvidia Reflex уменьшает инпут-лаг.

Процессор Intel Core i5-12450H (8 ядер, 2.0–4.4 ГГц, кэш 12 МБ) и 16 ГБ DDR4 дают стабильную работу в многозадачности. Два слота памяти позволяют расширить ОЗУ до 64 ГБ.

Есть подсветка клавиатуры, Wi-Fi, Bluetooth и Gigabit LAN. Интерфейсы: USB 2.0/3.2, 3.5 мм, HDMI и Mini DisplayPort. Автономность — до 5 часов.
`,
      price: 496986,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h76/h6c/85301691547678.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h76/h6c/85301691547678.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ha4/hf8/85301691613214.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h91/h27/85301691678750.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h98/hae/85301691744286.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h7d/hf3/85301691809822.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/thunderobot-911s-core-d-15-6-16-gb-ssd-512-gb-bez-os-jt009k00f-117046774/?c=750000000',
      likes: DEFAULT_LIKES,
      categoryId: CATEGORY.laptops,
    },
    {
      id: 138158355,
      name: 'Apple MacBook Pro 16 2021 16.2" / 32Gb / SSD 512Gb',
      description: `
Apple MacBook Pro 16 (2021) — мощный ноутбук для профессионалов и творческих задач. Высокая производительность и быстрая работа системы обеспечивают комфорт в монтаже, дизайне и программировании.

✨ Особенности:
• Экран Liquid Retina XDR 16.2" — яркая картинка и высокая чёткость
• Аккумулятор 100 Вт·ч — до 21 часа автономной работы
• Металлический корпус — прочный и стильный
• Камера FaceTime HD 1080p — качественные видеозвонки
• Звук Dolby Atmos — объёмное звучание для фильмов и музыки

Подходит для дизайнеров, видеомонтажёров, программистов и всех, кто ценит премиальное качество и скорость работы.
`,
      price: 699990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pc1/p7c/36863341.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pc1/p7c/36863341.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pdd/p7c/36863342.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pf9/p7c/36863343.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p31/p7d/36863345.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-2021-16-2-32-gb-ssd-512-gb-macos-z14v0008d-138158355/?c=750000000',
      likes: DEFAULT_LIKES,
      categoryId: CATEGORY.laptops,
    },
    {
      id: 137582956,
      name: 'Apple MacBook Air 13 2025 / 16Gb / SSD 256Gb',
      description: `
Apple MacBook Air 13 (2025) — лёгкий и стильный ультрабук, сочетающий производительность и компактность. Отлично подходит для учёбы, работы и повседневных задач.

✨ Особенности:
• Процессор Apple M4 — быстрая и плавная работа приложений
• 16 ГБ ОЗУ — комфортная многозадачность
• SSD 256 ГБ — быстрый запуск системы и программ
• Камера 12 Мп — качественная видеосвязь
• Аккумулятор 53.8 Вт·ч — долго работает без подзарядки

Идеален для студентов и профессионалов, которым важны мобильность и стабильная производительность.
`,
      price: 523993,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pab/pc3/35723922.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pab/pc3/35723922.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p72/pc3/35723924.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p3a/pc3/35723926.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p1e/pc3/35723927.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p79/pc0/35723930.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p25/pc0/35723933.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2025-16-gb-ssd-256-gb-macos-mw123-137582956/?c=750000000',
      likes: DEFAULT_LIKES,
      categoryId: CATEGORY.laptops,
    },
    {
      id: 152059461,
      name: 'YEPO Q7 Max 16" / 16Gb / SSD 512Gb / Win 11',
      description: `
YEPO Q7 Max — мощный ноутбук для офиса и учёбы с премиальным алюминиевым корпусом. Создан для тех, кто ценит скорость, качество и комфорт в работе.

• Процессор: Intel Core i7-13620H (10 ядер) — высокая производительность
• ОЗУ: 16 ГБ — многозадачность без тормозов
• SSD: 512 ГБ — быстрая загрузка Windows и приложений
• Экран: 16" Full HD — большое изображение, комфорт для глаз
• Графика: Intel Iris Xe — подходит для офиса, учёбы и лёгкого дизайна
• Подсветка клавиатуры — удобно в темноте
• Сканер отпечатка пальца — быстрый и безопасный вход
• Touchpad высокого качества — удобно работать без мыши
• ОС: Windows 11 — современная и стабильная система

Отличный вариант для студентов, офисных сотрудников и онлайн-обучения.
`,
      price: 369990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pe3/p13/86113914.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pe3/p13/86113914.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd9/p17/86113929.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p7e/p1a/86113932.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p9a/p1a/86113933.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pb6/p1a/86113934.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd3/p1a/86113935.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pef/p1a/86113936.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pe8/p1d/86113942.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p20/p1e/86113944.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p58/p1e/86113946.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/yepo-q7-max-16-16-gb-ssd-512-gb-win-11-q7-max-152059461/?c=750000000',
      likes: DEFAULT_LIKES,
      categoryId: CATEGORY.laptops,
    },
    {
      id: 148703886,
      name: 'Acer Nitro Lite NL16-71G 16" / 16Gb / SSD 512Gb / Без ОС',
      description: `
Дисплей 16" IPS обеспечивает насыщенную и чёткую картинку. Разрешение WUXGA и частота обновления 165 Гц дают плавность движения и снижают нагрузку на глаза. Цветовой охват NTSC расширяет палитру, делая изображение более естественным — это удобно для графики, видео и игр.

Процессор Intel Core i5-13420H обеспечивает высокую скорость обработки данных и эффективную многозадачность. Видеокарта NVIDIA GeForce RTX 3050 (6 ГБ) подходит для современных игр и графических приложений. 16 ГБ DDR5 дают быструю работу системы и хорошее управление ресурсами.

SSD 512 ГБ PCIe NVMe ускоряет загрузку ОС, программ и больших файлов. Есть современный модуль связи Intel 2×2 AX с Bluetooth для стабильного подключения к сети и устройствам.

Поставляется без предустановленной ОС — можно выбрать подходящую платформу. Корпус выполнен в строгом дизайне и удобен для переноски.
`,
      price: 435851,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pcc/pc3/74964289.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pcc/pc3/74964289.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p38/pc6/74964290.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p54/pc6/74964291.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p71/pc6/74964292.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p8d/pc6/74964293.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pa9/pc6/74964294.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/acer-nitro-lite-nl16-71g-16-16-gb-ssd-512-gb-bez-os-nh-daaer-001-148703886/?c=750000000',
      likes: DEFAULT_LIKES,
      categoryId: CATEGORY.laptops,
    },

    // Headphones
    {
      id: 145554533,
      name: 'Apple AirPods Pro 3 белый',
      description: `
Наушники Apple AirPods Pro 3 — это идеальный выбор для тех, кто ценит превосходное качество звука и удобство использования.

✨ Особенности:
• Активное шумоподавление — полное погружение в музыку
• До 8 часов автономной работы
• Мгновенное подключение к iPhone
• Водостойкий корпус
• Сменные амбушюры для идеальной посадки

Эти наушники станут вашим незаменимым компаньоном в повседневной жизни, спорте и путешествиях.
`,
      price: 129571,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p89/pc5/64466278.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p89/pc5/64466278.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pa6/pc5/64466279.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p6d/pc5/64466277.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p12/pc8/64466280.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p2e/pc8/64466281.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-3-belyi-145554533/?c=750000000',
      likes: DEFAULT_LIKES,
      categoryId: CATEGORY.headphones,
    },
    {
      id: 100471997,
      name: 'Sony WH-1000XM4 черный',
      description: `
Sony WH-1000XM4 сочетают передовую технологию шумоподавления и исключительное качество звука.

Технология Dual Noise Sensor с четырьмя микрофонами и процессором QN1 анализирует окружающий шум в реальном времени. Система обрабатывает сигнал до 700 раз в секунду, обеспечивая максимальную точность подавления.

Поддержка LDAC передаёт в 3 раза больше данных по Bluetooth®, обеспечивая звук высокого разрешения.

Функция Speak-to-Chat автоматически приостанавливает музыку, когда вы начинаете говорить, и возобновляет её после окончания разговора.

Идеальный выбор для путешествий, работы и отдыха.
`,
      price: 489999,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p64/pde/11569142.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p64/pde/11569142.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p80/pde/11569143.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p9c/pde/11569144.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pb8/pde/11569145.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd5/pde/11569146.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm4-chernyi-100471997/?c=750000000',
      likes: DEFAULT_LIKES,
      categoryId: CATEGORY.headphones,
    },
    {
      id: 128622804,
      name: 'Apple AirPods Max 2 черно-синий',
      description: `
AirPods Max 2 автоматически определяют необходимость отключения шумоподавления.

Благодаря крупным излучателям наушники обеспечивают мощный, сбалансированный звук с глубокой детализацией.

Пространственное аудио с динамическим отслеживанием положения головы создаёт эффект полного погружения.
`,
      price: 277454,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p68/p4c/3527586.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p68/p4c/3527586.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p83/p4b/3531601.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p4c/p4c/3527587.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p5b/p10/3532808.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p3f/p10/3532809.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd3/p0d/3532810.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-max-2-cherno-sinii-128622804/?c=750000000',
      likes: DEFAULT_LIKES,
      categoryId: CATEGORY.headphones,
    },
    {
      id: 112221535,
      name: 'Logitech G Pro X 2 Lightspeed черный',
      description: `
Logitech G Pro X 2 Lightspeed — идеальный выбор для геймеров, которые ценят высокое качество звука и комфорт.

✨ Особенности:
• Беспроводное подключение
• Закрытая акустическая конструкция
• Съёмный микрофон с чёткой передачей голоса
• Частотный диапазон 20–20000 Гц
• Лёгкий вес 345 г

Подойдут для игр, стримов и общения в команде.
`,
      price: 101869,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha7/h5d/82389321252894.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/ha7/h5d/82389321252894.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hd0/h6b/82389322301470.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h4f/h95/82389323218974.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hdd/ha4/82389324595230.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hcc/he2/82389325512734.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hf2/h59/82389327020062.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-logitech-g-pro-x-2-lightspeed-chernyi-112221535/?c=750000000',
      likes: DEFAULT_LIKES,
      categoryId: CATEGORY.headphones,
    },
    {
      id: 112854077,
      name: 'Sony WF-1000XM5 черный',
      description: `
Sony WF-1000XM5 обеспечивают лучшее в классе шумоподавление благодаря двум процессорам и динамику Dynamic Driver X.

Три микрофона в каждом наушнике анализируют внешний шум, обеспечивая чистейший звук даже в транспорте.

Поддержка High-Resolution Audio Wireless (LDAC™) передаёт в 3 раза больше данных по Bluetooth®.

До 24 часов автономной работы (8 часов + 16 часов от кейса) и поддержка быстрой зарядки.

Эргономичный дизайн гарантирует надёжную и комфортную посадку.
`,
      price: 106336,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9d/h8d/83155236028446.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h9d/h8d/83155236028446.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h38/h9c/83155236683806.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h9d/h8d/83155236028446.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-sony-wf-1000xm5-chernyi-112854077/?c=750000000',
      likes: DEFAULT_LIKES,
      categoryId: CATEGORY.headphones,
    },

    // Tablets
    {
      id: 138202210,
      name: 'Apple iPad A16 11 (2025) Wi-Fi 11" 6/256Gb серебристый',
      description: `
Представляем iPad A16 2025 — ваш идеальный спутник для работы и развлечений! Этот планшет с мощным процессором Apple A16 и емким аккумулятором обеспечивает высокую производительность и длительное время работы.

✨ Особенности:
• Разрешение экрана 2360×1640 — яркое и чёткое изображение
• 12 МП фронтальная и тыловая камеры — фото и видеозвонки
• Устойчивое к царапинам стекло — надёжная защита экрана
• Поддержка Wi-Fi — стабильное соединение
• Стереозвук — эффект погружения

Подходит студентам, профессионалам и всем, кто ценит комфорт и функциональность.
`,
      price: 272770,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p4d/p3f/37019512.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p4d/p3f/37019512.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p8a/pa9/37019616.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pa6/pa9/37019617.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-256-gb-serebristyi-138202210/?c=750000000',
      likes: DEFAULT_LIKES,
      categoryId: CATEGORY.tablets,
    },
    {
      id: 140640417,
      name: 'Xiaomi Redmi Pad 2 4G 11" 8/256Gb серый',
      description: `
Xiaomi Redmi Pad 2 4G — универсальный планшет с ярким 11-дюймовым экраном и поддержкой мобильной связи, идеально подходящий для работы, учебы и развлечений.

✨ Особенности:
• Поддержка 4G — оставайтесь на связи в любом месте
• 8 ГБ оперативной памяти — плавная работа приложений
• Аккумулятор 9000 мА·ч — длительная автономность

Отличный выбор для учебы, поездок и мультимедиа.
`,
      price: 129990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p34/pcd/81439931.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p34/pcd/81439931.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pbd/p9b/46318883.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pa0/p9b/46318884.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p84/p9b/46318885.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p68/p9b/46318886.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p4c/p9b/46318887.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p30/p9b/46318888.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-pad-2-4g-11-djuim-8-gb-256-gb-seryi-140640417/?c=750000000',
      likes: DEFAULT_LIKES,
      categoryId: CATEGORY.tablets,
    },
    {
      id: 122142537,
      name: 'Huawei MatePad SE AGS6-W09 11" 6/128Gb серый',
      description: `
Huawei MatePad SE 11" — практичный планшет для учёбы и повседневных задач. Большой экран удобен для чтения, онлайн-занятий и видео, а 6 ГБ оперативной памяти обеспечивают стабильную работу приложений.

Подходит школьникам, студентам и для домашнего использования.
`,
      price: 73329,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc5/h60/86746842595358.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hc5/h60/86746842595358.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h26/hdf/86746842660894.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hf8/hb7/86746842726430.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h22/h8f/86746842791966.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h41/h26/86746842857502.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h6a/hfc/86746842923038.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h4a/h0a/86746843185182.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/huawei-matepad-se-ags6-w09-11-djuim-6-gb-128-gb-seryi-122142537/?c=750000000',
      likes: DEFAULT_LIKES,
      categoryId: CATEGORY.tablets,
    },
    {
      id: 112453226,
      name: 'Xiaomi Pad 6 11" 8/256Gb серый',
      description: `
Xiaomi Pad 6 — мощный и стильный планшет с ярким 11-дюймовым экраном для работы и развлечений.

✨ Особенности:
• Snapdragon 870 — быстрый отклик
• 8 ГБ ОЗУ — комфортная многозадачность
• 256 ГБ памяти — много места для файлов
• Аккумулятор 8840 мА·ч — дольше без подзарядки
`,
      price: 158511,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/hdc/82729741582366.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h32/hdc/82729741582366.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p78/pfa/78318162.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p95/pfa/78318163.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pb1/pfa/78318164.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-pad-6-11-djuim-8-gb-256-gb-seryi-112453226/?c=750000000',
      likes: DEFAULT_LIKES,
      categoryId: CATEGORY.tablets,
    },
    {
      id: 140640475,
      name: 'Xiaomi Redmi Pad 2 4G 11" 8/256Gb зелёный',
      description: `
Xiaomi Redmi Pad 2 4G — универсальный планшет для учёбы и развлечений.

✨ Особенности:
• Экран 2560×1600 — чёткое изображение
• 8 ГБ ОЗУ — плавная работа
• Аккумулятор 9000 мА·ч — на целый день
`,
      price: 129990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pa0/pb1/81440010.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pa0/pb1/81440010.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pe8/p02/46316409.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p54/p05/46316410.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p70/p05/46316411.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p8c/p05/46316412.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pa8/p05/46316413.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pc4/p05/46316414.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-pad-2-4g-11-djuim-8-gb-256-gb-zelenyi-140640475/?c=750000000',
      likes: DEFAULT_LIKES,
      categoryId: CATEGORY.tablets,
    },
  ];

  getCategories(): Category[] {
    return [...this.categories];
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter((p) => p.categoryId === categoryId);
  }
}