const devices = [

    {
        name: 'electric-stove',
        title: 'Плита1',
        img: ''
    },
    {
        name: 'fridge',
        title: 'Плита2',
        img: ''
    },
    {
        name: 'washer',
        title: 'Плита3',
        img: ''
    },
    {
        name: 'dishwasher',
        title: 'Плита4',
        img: ''
    }

];

const brands = [
    {
        name: 'samsung',
        img: 'image/samsung-logo-png5.png'
    },
    {
        name: 'hansa',
        img: '',
    },
    {
        name: 'beko',
        img: '',
    },
    {
        name: 'lg',
        img: '',
    },
    {
        name: 'aeg',
        img: 'image/aeg.png',
    },
    {
        name: 'asko',
        img: '',
    },
    {
        name: 'bosch',
        img: '',
    },
    {
        name: 'gorenje',
        img: '',
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
        confines: 'без ремонта электроники и без замены деталей'
    },
    {
        identification: 'washer',
        problem: 'Извлечение посторонних предметов',
        price: 1500,
        confines: 'без замены деталей'
    },
    {
        identification: 'washer',
        problem: 'Машина течёт',
        price: 2000,
        confines: 'востановление соединения, без замены деталей'
    },
    {
        identification: 'washer',
        problem: 'Не набирает воду',
        price: 4500
    },
    {
        problem: 'Не сливает воду',
        price: 4500
    },
    {
        identification: 'washer',
        problem: 'Не крутится барабан',
        price: 5000
    },
    {
        identification: 'washer',
        problem: 'Не открывается/не закрывается',
        price: 3500
    },
    {
        problem: 'Замена манжеты люка',
        price: 5500
    },
    {
        identification: 'washer',
        problem: 'Замена стекла люка',
        price: 5500
    },
    {
        identification: 'washer',
        problem: 'Замена сливного шланга',
        price: 3000
    },
    {
        identification: 'washer',
        problem: 'Замена насоса',
        price: 4500
    },
    {
        problem: 'Замена ремня',
        price: 3300
    },
    {
        identification: 'washer',
        problem: 'Замена замка ',
        price: 3500
    },
    {
        identification: 'washer',
        problem: 'Замена амортизаторов ',
        price: 5000
    },
    {
        identification: 'washer',
        problem: 'Замена датчиков',
        price: 4500
    },
    {
        identification: 'washer',
        problem: 'Замена ТЭНа',
        price: 9000
    },
    {
        identification: 'washer',
        problem: 'Замена двигателя',
        price: 4500
    },
    {
        identification: 'washer',
        problem: 'Замена креставины',
        price: 4000
    },
    {
        identification: 'washer',
        problem: 'Замена подшипников',
        price: 8500,
        confines: 'При условии ремонтопригодности барабана'
    },
    {
        identification: 'washer',
        problem: 'Ремонт двигателя',
        price: 5000
    },
    {
        identification: 'washer',
        problem: 'Ремонт электронного модуля',
        price: 6000
    },
    {
        identification: 'washer',
        problem: 'Подключение КБТ (на старое место)',
        price: 1600
    },
    {
        identification: 'washer',
        problem: 'Подключение КБТ (без доработок,по воде)',
        price: 2500
    },
    {
        identification: 'washer',
        problem: 'Вывоз КБТ',
        price: 500
    },

    /*Bosh, Mille*/

    {
        identification: 'washer-bosch',
        problem: 'Комплексная диагностика',
        price: 1200
    },
    {
        identification: 'washer-bosch',
        problem: 'Снятие блокирово',
        price: 1500,
        confines: 'без ремонта электроники и без замены деталей'
    },
    {
        identification: 'washer-bosch',
        problem: 'Чистка(фильтров, дозаторов)',
        price: 2000
    },
    {
        identification: 'washer-bosch',
        problem: 'Извлечение посторонних предметов',
        price: 2000,
        confines: 'без замены деталей'
    },
    {
        identification: 'washer-bosch',
        problem: 'Машина течёт',
        price: 3000,
        confines: 'востановление соединения, без замены деталей'
    },
    {
        identification: 'washer-bosch',
        problem: 'Не набирает воду',
        price: 6000,
        confines: 'Комплексная диагностика, для уточнения причины и стоимости деталей'
    },
    {
        identification: 'washer-bosch',
        problem: 'Не сливает воду',
        price: 6000,
        confines: 'Комплексная диагностика, для уточнения причины и стоимости деталей'
    },
    {
        identification: 'washer-bosch',
        problem: 'Не крутится барабан',
        price: '-',
        confines: 'Комплексная диагностика, для уточнения причины и стоимости деталей'
    },
    {
        identification: 'washer-bosch',
        problem: 'Не открывается/не закрывается',
        price: 5000
    },
    {
        identification: 'washer-bosch',
        problem: 'Замена манжеты люка',
        price: 8000
    },
    {
        identification: 'washer-bosch',
        problem: 'Замена стекла люка',
        price: 6000
    },
    {
        identification: 'washer-bosch',
        problem: 'Замена сливного шланга',
        price: 4000
    },
    {
        identification: 'washer-bosch',
        problem: 'Замена насоса',
        price: 6000,
        confines: 'Комплексная диагностика'
    },
    {
        identification: 'washer-bosch',
        problem: 'Замена ремня',
        price: 5000
    },
    {
        identification: 'washer-bosch',
        problem: 'Замена замка ',
        price: 6000
    },
    {
        identification: 'washer-bosch',
        problem: 'Замена насоса',
        price: '-',
        confines: 'Комплексная диагностика, для уточнения причины и стоимости дета'
    },
    {
        identification: 'washer-bosch',
        problem: 'Замена датчиков ',
        price: 6000
    },
    {
        identification: 'washer-bosch',
        problem: 'Замена двигателя',
        price: '-',
        confines: 'Комплексная диагностика, для уточнения стоимости детали'
    },
    {
        identification: 'washer-bosch',
        problem: 'Замена ТЭНа',
        price: '-',
        confines: 'Комплексная диагностика, для уточнения стоимости детали'
    },
    {
        identification: 'washer-bosch',
        problem: 'Замена креставины',
        price: '-',
        confines: 'Комплексная диагностика, для уточнения стоимости детали'
    },
    {
        identification: 'washer-bosch',
        problem: 'Замена подшипников',
        price: 10000,
        confines: 'При условии ремонтопригодности барабана'
    },
    {
        identification: 'washer-bosch',
        problem: 'Ремонт двигателя',
        price: 8000
    },
    {
        identification: 'washer-bosch',
        problem: 'Ремонт электронного модуля',
        price: 9000
    },
    {
        identification: 'washer-bosch',
        problem: 'Подключение КБТ (на старое место)',
        price: 1900
    },
    {
        identification: 'washer-bosch',
        problem: 'Подключение КБТ (без доработок,по воде)',
        price: 2800
    },
    {
        identification: 'washer-bosch',
        problem: 'Вывоз КБТ',
        price: 500
    },


    /*Холодильник*/

    {
        identification: 'fridge',
        problem: 'Комплексная диагностика',
        price: 600
    },
    {
        identification: 'fridge',
        problem: 'Замена уплотнительной резины',
        price: 4800
    },
    {
        identification: 'fridge',
        problem: 'Перевес дверей',
        price: 2170
    },
    {
        identification: 'fridge',
        problem: 'Не охлаждается холодильная камера',
        price: 6200,
        confines: 'если не требуется замена компр.'
    },
    {
        identification: 'fridge',
        problem: 'Не охлаждается морозильная камера',
        price: 6200,
        confines: 'если не требуется замена компр.'
    },
    {
        identification: 'fridge',
        problem: 'Сильно морозит',
        price: 4800
    },
    {
        identification: 'fridge',
        problem: 'Замена терморегулятора',
        price: 4200
    },
    {
        identification: 'fridge',
        problem: 'Замена датчиков',
        price: 4800
    },
    {
        identification: 'fridge',
        problem: 'Сильно морозит',
        price: 4800
    },
    {
        identification: 'fridge',
        problem: 'Замена терморегулятора',
        price: 4200
    },
    {
        identification: 'fridge',
        problem: 'Замена датчиков',
        price: 4800
    },
    {
        identification: 'fridge',
        problem: 'Замена компрессора',
        price: 9500
    },
    {
        identification: 'fridge',
        problem: 'Замена змеевика',
        price: 8500
    },
    {
        identification: 'fridge',
        problem: 'Заправка фреоном',
        price: 6200
    },
    {
        identification: 'fridge',
        problem: 'Ремонт электронного модуля',
        price: 7200
    },
    {
        identification: 'fridge',
        problem: 'Подключение и настройка',
        price: 600
    },
    {
        identification: 'fridge',
        problem: 'Вывоз КБТ',
        price: 500
    },

    /*Посудомоечная машина*/

    {
        identification: 'dishwasher',
        problem: 'Комплексная диагностика',
        price: 900
    },
    {
        identification: 'dishwasher',
        problem: 'Чистка(фильтров, разбрызгивателей)',
        price: 1500
    },
    {
        identification: 'dishwasher',
        problem: 'Снятие блокировок',
        price: 2000,
        confines: 'без рем эл. И замены деталей'
    },
    {
        identification: 'dishwasher',
        problem: 'Машина течёт',
        price: 2000,
        confines: 'востановление соединения, без замены деталей'
    },
    {
        identification: 'dishwasher',
        problem: 'Не набирает воду',
        price: 5000
    },
    {
        identification: 'dishwasher',
        problem: 'Не сливает воду',
        price: 5000
    },
    {
        identification: 'dishwasher',
        problem: 'Не включается',
        price: 3000
    },
    {
        identification: 'dishwasher',
        problem: 'Не открывается/не закрывается',
        price: 4000
    },
    {
        identification: 'dishwasher',
        problem: 'Не переключает режимы',
        price: 5000
    },
    {
        identification: 'dishwasher',
        problem: 'Замена насоса',
        price: 5000
    },
    {
        identification: 'dishwasher',
        problem: 'Замена замка',
        price: 4000
    },
    {
        identification: 'dishwasher',
        problem: 'Замена датчика давления',
        price: 5000
    },
    {
        identification: 'dishwasher',
        problem: 'Замена сливного шланга',
        price: 3000
    },
    {
        identification: 'dishwasher',
        problem: 'Замена ТЭНа',
        price: 5500
    },
    {
        identification: 'dishwasher',
        problem: 'Замена уплотнителя двери',
        price: 4000
    },
    {
        identification: 'dishwasher',
        problem: 'Ремонт системы АКВАСТОП',
        price: 5500
    },
    {
        identification: 'dishwasher',
        problem: 'Ремонт двигателя',
        price: 4000
    },
    {
        identification: 'dishwasher',
        problem: 'Ремонт электронного модуля',
        price: 5000
    },
    {
        identification: 'dishwasher',
        problem: 'Подключение КБТ (на старое место)',
        price: 1600
    },
    {
        identification: 'dishwasher',
        problem: 'Подключение КБТ (без доработок,по воде)',
        price: 2500
    },
    {
        identification: 'dishwasher',
        problem: 'Вывоз КБТ',
        price: 250
    },

    /*Электроплита*/

    {
        identification: 'electric-stove',
        problem: 'Комплексная диагностика',
        price: 100
    },
    {
        identification: 'electric-stove',
        problem: 'Ремонт одной конфорки',
        price: 100
    },
    {
        identification: 'electric-stove',
        problem: 'Ремонт простой духовки',
        price: 100
    },
    {
        identification: 'electric-stove',
        problem: 'Ремонт духовки с терморегулятором',
        price: 100
    },
    {
        identification: 'electric-stove',
        problem: 'Замена переключателя',
        price: 100
    },
    {
        identification: 'electric-stove',
        problem: 'Ремонт проводки',
        price: 100
    },
    {
        identification: 'electric-stove',
        problem: 'Комплексный ремонт',
        price: 100
    },
    {
        identification: 'electric-stove',
        problem: 'Не набирает воду',
        price: 100
    },
    {
        identification: 'electric-stove',
        problem: 'Замена вентилятора духовки',
        price: 100
    },
    {
        identification: 'electric-stove',
        problem: 'Замена ТЭНа духовки',
        price: 100
    },
    {
        identification: 'electric-stove',
        problem: 'Замена ТЭНа конвекции',
        price: '-'
    },
    {
        identification: 'electric-stove',
        problem: 'Не открывается/не закрывается',
        price: '-'
    },
    {
        identification: 'electric-stove',
        problem: 'Замена регулятора гриля',
        price: '-'
    }

];