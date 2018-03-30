const devices = [

    {
        name: 'electric-stove',
        title: 'Электроплита',
        img: 'image/wave.png'
    },
    {
        name: 'fridge',
        title: 'Холодильник',
        img: 'image/fridge.png'
    },
    {
        name: 'washer',
        title: 'Стиральная машина',
        img: 'image/washer.png'
    },
    {
        name: 'dishwasher',
        title: 'Посудомоичная машина',
        img: 'image/dishwasher.png'
    }

];

const brands = [
    {
        name: 'samsung',
        img: 'image/samsung-logo-png5.png'
    },
    {
        name: 'hansa',
        img: 'image/hansa.png',
    },
    {
        name: 'beko',
        img: 'image/beko.png',
    },
    {
        name: 'lg',
        img: 'image/lg.png',
    },
    {
        name: 'aeg',
        img: 'image/aeg.png',
    },
    {
        name: 'asko',
        img: 'image/asko.png',
    },
    {
        name: 'bosch',
        img: 'image/bosch.png',
    },
    {
        name: 'gorenje',
        img: 'image/gorenje.png',
    }

];

const problems = [

    /*Стиральная машина*/

    {
        id: 1,
        identification: 'washer',
        problem: 'Комплексная диагностика',
        price: 900
    },
    {   id: 2,
        identification: 'washer',
        problem: 'Чистка(фильтров, дозаторов)',
        price: 1300
    },
    {   id: 3,
        identification: 'washer',
        problem: 'Снятие блокировок',
        price: 1500,
        restriction: 'без ремонта электроники и без замены деталей'
    },
    {
        id: 4,
        identification: 'washer',
        problem: 'Извлечение посторонних предметов',
        price: 1500,
        restriction: 'без замены деталей'
    },
    {
        id: 5,
        identification: 'washer',
        problem: 'Машина течёт',
        price: 2000,
        restriction: 'востановление соединения, без замены деталей'
    },
    {
        id: 6,
        identification: 'washer',
        problem: 'Не набирает воду',
        price: 4500
    },
    {
        id: 7,
        identification: 'washer',
        problem: 'Не сливает воду',
        price: 4500
    },
    {
        id: 8,
        identification: 'washer',
        problem: 'Не крутится барабан',
        price: 5000
    },
    {
        id: 9,
        identification: 'washer',
        problem: 'Не открывается/не закрывается',
        price: 3500
    },
    {
        id: 10,
        identification: 'washer',
        problem: 'Замена манжеты люка',
        price: 5500
    },
    {
        id: 11,
        identification: 'washer',
        problem: 'Замена стекла люка',
        price: 5500
    },
    {
        id: 12,
        identification: 'washer',
        problem: 'Замена сливного шланга',
        price: 3000
    },
    {
        id: 13,
        identification: 'washer',
        problem: 'Замена насоса',
        price: 4500
    },
    {
        id: 14,
        identification: 'washer',
        problem: 'Замена ремня',
        price: 3300
    },
    {
        id: 15,
        identification: 'washer',
        problem: 'Замена замка ',
        price: 3500
    },
    {
        id: 16,
        identification: 'washer',
        problem: 'Замена амортизаторов ',
        price: 5000
    },
    {
        id: 17,
        identification: 'washer',
        problem: 'Замена датчиков',
        price: 4500
    },
    {
        id: 18,
        identification: 'washer',
        problem: 'Замена ТЭНа',
        price: 9000
    },
    {
        id: 19,
        identification: 'washer',
        problem: 'Замена двигателя',
        price: 4500
    },
    {
        id: 20,
        identification: 'washer',
        problem: 'Замена креставины',
        price: 4000
    },
    {
        id: 21,
        identification: 'washer',
        problem: 'Замена подшипников',
        price: 8500,
        restriction: 'При условии ремонтопригодности барабана'
    },
    {
        id: 22,
        identification: 'washer',
        problem: 'Ремонт двигателя',
        price: 5000
    },
    {
        id: 23,
        identification: 'washer',
        problem: 'Ремонт электронного модуля',
        price: 6000
    },
    {
        id: 24,
        identification: 'washer',
        problem: 'Подключение КБТ (на старое место)',
        price: 1600
    },
    {
        id: 25,
        identification: 'washer',
        problem: 'Подключение КБТ (без доработок,по воде)',
        price: 2500
    },
    {
        id: 26,
        identification: 'washer',
        problem: 'Вывоз КБТ',
        price: 500
    },

    /*Bosh, Mille*/

    {
        id: 27,
        identification: 'washer-bosch',
        problem: 'Комплексная диагностика',
        price: 1200
    },
    {
        id: 28,
        identification: 'washer-bosch',
        problem: 'Снятие блокирово',
        price: 1500,
        restriction: 'без ремонта электроники и без замены деталей'
    },
    {
        id: 29,
        identification: 'washer-bosch',
        problem: 'Чистка(фильтров, дозаторов)',
        price: 2000
    },
    {
        id: 30,
        identification: 'washer-bosch',
        problem: 'Извлечение посторонних предметов',
        price: 2000,
        restriction: 'без замены деталей'
    },
    {
        id: 31,
        identification: 'washer-bosch',
        problem: 'Машина течёт',
        price: 3000,
        restriction: 'востановление соединения, без замены деталей'
    },
    {
        id: 32,
        identification: 'washer-bosch',
        problem: 'Не набирает воду',
        price: 6000,
        restriction: 'Комплексная диагностика, для уточнения причины и стоимости деталей'
    },
    {
        id: 33,
        identification: 'washer-bosch',
        problem: 'Не сливает воду',
        price: 6000,
        restriction: 'Комплексная диагностика, для уточнения причины и стоимости деталей'
    },
    {
        id: 34,
        identification: 'washer-bosch',
        problem: 'Не крутится барабан',
        price: '-',
        restriction: 'Комплексная диагностика, для уточнения причины и стоимости деталей'
    },
    {
        id: 35,
        identification: 'washer-bosch',
        problem: 'Не открывается/не закрывается',
        price: 5000
    },
    {
        id: 36,
        identification: 'washer-bosch',
        problem: 'Замена манжеты люка',
        price: 8000
    },
    {
        id: 37,
        identification: 'washer-bosch',
        problem: 'Замена стекла люка',
        price: 6000
    },
    {
        id: 38,
        identification: 'washer-bosch',
        problem: 'Замена сливного шланга',
        price: 4000
    },
    {
        id: 39,
        identification: 'washer-bosch',
        problem: 'Замена насоса',
        price: 6000,
        restriction: 'Комплексная диагностика'
    },
    {
        id: 40,
        identification: 'washer-bosch',
        problem: 'Замена ремня',
        price: 5000
    },
    {
        id: 41,
        identification: 'washer-bosch',
        problem: 'Замена замка ',
        price: 6000
    },
    {
        id: 42,
        identification: 'washer-bosch',
        problem: 'Замена насоса',
        price: '-',
        restriction: 'Комплексная диагностика, для уточнения причины и стоимости дета'
    },
    {
        id: 43,
        identification: 'washer-bosch',
        problem: 'Замена датчиков ',
        price: 6000
    },
    {
        id: 44,
        identification: 'washer-bosch',
        problem: 'Замена двигателя',
        price: '-',
        restriction: 'Комплексная диагностика, для уточнения стоимости детали'
    },
    {
        id: 45,
        identification: 'washer-bosch',
        problem: 'Замена ТЭНа',
        price: '-',
        restriction: 'Комплексная диагностика, для уточнения стоимости детали'
    },
    {
        id: 46,
        identification: 'washer-bosch',
        problem: 'Замена креставины',
        price: '-',
        restriction: 'Комплексная диагностика, для уточнения стоимости детали'
    },
    {
        id: 47,
        identification: 'washer-bosch',
        problem: 'Замена подшипников',
        price: 10000,
        restriction: 'При условии ремонтопригодности барабана'
    },
    {
        id: 48,
        identification: 'washer-bosch',
        problem: 'Ремонт двигателя',
        price: 8000
    },
    {
        id: 49,
        identification: 'washer-bosch',
        problem: 'Ремонт электронного модуля',
        price: 9000
    },
    {
        id: 50,
        identification: 'washer-bosch',
        problem: 'Подключение КБТ (на старое место)',
        price: 1900
    },
    {
        id: 51,
        identification: 'washer-bosch',
        problem: 'Подключение КБТ (без доработок,по воде)',
        price: 2800
    },
    {
        id: 52,
        identification: 'washer-bosch',
        problem: 'Вывоз КБТ',
        price: 500
    },


    /*Холодильник*/

    {
        id: 53,
        identification: 'fridge',
        problem: 'Комплексная диагностика',
        price: 600
    },
    {
        id: 54,
        identification: 'fridge',
        problem: 'Замена уплотнительной резины',
        price: 4800
    },
    {
        id: 55,
        identification: 'fridge',
        problem: 'Перевес дверей',
        price: 2170
    },
    {
        id: 56,
        identification: 'fridge',
        problem: 'Не охлаждается холодильная камера',
        price: 6200,
        restriction: 'если не требуется замена компр.'
    },
    {
        id: 57,
        identification: 'fridge',
        problem: 'Не охлаждается морозильная камера',
        price: 6200,
        restriction: 'если не требуется замена компр.'
    },
    {
        id: 58,
        identification: 'fridge',
        problem: 'Сильно морозит',
        price: 4800
    },
    {
        id: 59,
        identification: 'fridge',
        problem: 'Замена терморегулятора',
        price: 4200
    },
    {
        id: 60,
        identification: 'fridge',
        problem: 'Замена датчиков',
        price: 4800
    },
    {
        id: 61,
        identification: 'fridge',
        problem: 'Сильно морозит',
        price: 4800
    },
    {
        id: 62,
        identification: 'fridge',
        problem: 'Замена терморегулятора',
        price: 4200
    },
    {
        id: 63,
        identification: 'fridge',
        problem: 'Замена датчиков',
        price: 4800
    },
    {
        id: 64,
        identification: 'fridge',
        problem: 'Замена компрессора',
        price: 9500
    },
    {
        id: 65,
        identification: 'fridge',
        problem: 'Замена змеевика',
        price: 8500
    },
    {
        id: 66,
        identification: 'fridge',
        problem: 'Заправка фреоном',
        price: 6200
    },
    {
        id: 67,
        identification: 'fridge',
        problem: 'Ремонт электронного модуля',
        price: 7200
    },
    {
        id: 68,
        identification: 'fridge',
        problem: 'Подключение и настройка',
        price: 600
    },
    {
        id: 69,
        identification: 'fridge',
        problem: 'Вывоз КБТ',
        price: 500
    },

    /*Посудомоечная машина*/

    {
        id: 70,
        identification: 'dishwasher',
        problem: 'Комплексная диагностика',
        price: 900
    },
    {
        id: 71,
        identification: 'dishwasher',
        problem: 'Чистка(фильтров, разбрызгивателей)',
        price: 1500
    },
    {
        id: 72,
        identification: 'dishwasher',
        problem: 'Снятие блокировок',
        price: 2000,
        restriction: 'без рем эл. И замены деталей'
    },
    {
        id: 73,
        identification: 'dishwasher',
        problem: 'Машина течёт',
        price: 2000,
        restriction: 'востановление соединения, без замены деталей'
    },
    {
        id: 74,
        identification: 'dishwasher',
        problem: 'Не набирает воду',
        price: 5000
    },
    {
        id: 75,
        identification: 'dishwasher',
        problem: 'Не сливает воду',
        price: 5000
    },
    {
        id: 76,
        identification: 'dishwasher',
        problem: 'Не включается',
        price: 3000
    },
    {
        id: 77,
        identification: 'dishwasher',
        problem: 'Не открывается/не закрывается',
        price: 4000
    },
    {
        id: 78,
        identification: 'dishwasher',
        problem: 'Не переключает режимы',
        price: 5000
    },
    {
        id: 79,
        identification: 'dishwasher',
        problem: 'Замена насоса',
        price: 5000
    },
    {
        id: 80,
        identification: 'dishwasher',
        problem: 'Замена замка',
        price: 4000
    },
    {
        id: 81,
        identification: 'dishwasher',
        problem: 'Замена датчика давления',
        price: 5000
    },
    {
        id: 82,
        identification: 'dishwasher',
        problem: 'Замена сливного шланга',
        price: 3000
    },
    {
        id: 83,
        identification: 'dishwasher',
        problem: 'Замена ТЭНа',
        price: 5500
    },
    {
        id: 84,
        identification: 'dishwasher',
        problem: 'Замена уплотнителя двери',
        price: 4000
    },
    {
        id: 85,
        identification: 'dishwasher',
        problem: 'Ремонт системы АКВАСТОП',
        price: 5500
    },
    {
        id: 86,
        identification: 'dishwasher',
        problem: 'Ремонт двигателя',
        price: 4000
    },
    {
        id: 87,
        identification: 'dishwasher',
        problem: 'Ремонт электронного модуля',
        price: 5000
    },
    {
        id: 88,
        identification: 'dishwasher',
        problem: 'Подключение КБТ (на старое место)',
        price: 1600
    },
    {
        id: 89,
        identification: 'dishwasher',
        problem: 'Подключение КБТ (без доработок,по воде)',
        price: 2500
    },
    {
        id: 90,
        identification: 'dishwasher',
        problem: 'Вывоз КБТ',
        price: 250
    },

    /*Электроплита*/

    {
        id: 91,
        identification: 'electric-stove',
        problem: 'Комплексная диагностика',
        price: 100
    },
    {
        id: 92,
        identification: 'electric-stove',
        problem: 'Ремонт одной конфорки',
        price: 100
    },
    {
        id: 93,
        identification: 'electric-stove',
        problem: 'Ремонт простой духовки',
        price: 100
    },
    {
        id: 94,
        identification: 'electric-stove',
        problem: 'Ремонт духовки с терморегулятором',
        price: 100
    },
    {
        id: 95,
        identification: 'electric-stove',
        problem: 'Замена переключателя',
        price: 100
    },
    {
        id: 96,
        identification: 'electric-stove',
        problem: 'Ремонт проводки',
        price: 100
    },
    {
        id: 97,
        identification: 'electric-stove',
        problem: 'Комплексный ремонт',
        price: 100
    },
    {
        id: 98,
        identification: 'electric-stove',
        problem: 'Не набирает воду',
        price: 100
    },
    {
        id: 99,
        identification: 'electric-stove',
        problem: 'Замена вентилятора духовки',
        price: 100
    },
    {
        id: 100,
        identification: 'electric-stove',
        problem: 'Замена ТЭНа духовки',
        price: 100
    },
    {
        id: 101,
        identification: 'electric-stove',
        problem: 'Замена ТЭНа конвекции',
        price: '-'
    },
    {
        id: 102,
        identification: 'electric-stove',
        problem: 'Не открывается/не закрывается',
        price: '-'
    },
    {
        id: 103,
        identification: 'electric-stove',
        problem: 'Замена регулятора гриля',
        price: '-'
    }

];