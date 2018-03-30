(function($) {
    let maksiservices = {
        'showSection': function showSection(param) {
            let currentElemIdent = '';
            let self = this;
            console.log('into showSection');
            // $('.step').hide();
            if (param) {
                $('.card-device').unbind('click');
                $('.card-brand').unbind('click');
            }

            // eventListener for step1 devices
            $('.card-device').on('click', function () {
                const selectorStep = '#step-2';
                const identification = $(this).attr('data-device');

                self.result.device = identification;
                console.log(currentElemIdent);
                if (currentElemIdent !== '' && currentElemIdent === identification) {
                    currentElemIdent = $(this).attr('data-device');
                    $('.card-device').unbind('click');
                    console.log('if');
                    // проверить и скрить секцию
                    $(selectorStep).toggle( "slow");
                    // self.createDOMStep();
                } else {
                    currentElemIdent = $(this).attr('data-device');
                    $('.card-device').unbind('click');
                    // просто создам елементы
                    console.log('else');
                    self.createDOMStep('data-brand', brands);
                    $(selectorStep).hide( "slow");
                    $(selectorStep).show( "slow");
                }


            });

            // eventListener for step2 brands
            $('.card-brand').on('click', function () {
                // debugger
                console.log('step2');
                const selectorStep = '#step-3';
                const identification = $(this).attr('data-brand');
                if ($(this)[0].className === 'card card-brand') {
                    self.createDOMStep('data-problems', problems);
                    $(selectorStep).toggle( "slow" );
                }


            });

            // eventListener for step3 problems
            $('.card-problem').on('click', function () {
                console.log('sdsds');
                const selectorStep = '#step-4';
                const identification = $(this).attr('data-problem');
                self.result.problemId = identification;
                console.log(self.result.problemId);
                if ($(this)[0].className === 'card card-problem') {
                    self.createResult();
                    console.log(self.result);
                    // self.createDOMStep('data-problems', problems);
                    $(selectorStep).toggle( "slow" );
                }
            });

        },
        'createDOMStep': function (identification, data) {
            const self = this;
            // debugger
            // console.log(problems);
            if(identification === 'data-brand'){
                let content = '';
                $('.holder-brands').contents().remove();
                data.forEach( item => {
                    let contentString = `<div class="card card-brand" data-brand="${item.name}">
                            <div>
                                <img src="${item.img}" alt="${item.name}">
                            </div>
                        </div>`;
                    content = content + contentString;
                });
                $('.holder-brands').append(content);
                this.showSection(true);
            }

            if(identification === 'data-problems'){
                console.log('data-problem');
                let content = '';
                $('.holder-problems').contents().remove();
                // console.log(dataResult.device);
                data.forEach( item => {
                    if(item.identification !== undefined && item.identification === self.result.device){
                        console.log('item.identification', item.identification);
                        // console.log('idevice', dataResult.device);
                        let contentString = `<div class="card card-problem" data-problem="${item.id}">
                                    <div>
                                        <span class="title">${item.problem}</span>
                                    </div>
                                </div>`;
                        content = content + contentString;
                    }

                });

                $('.holder-problems').append(content);
                this.showSection(true);



            }



        },
        createResult: function createResult() {
            let self = this;
            devices.forEach( item => {
                if (item.name === self.result.device) {
                    self.result.title = item.title;
                    self.result.img = item.img;

                }
            });
            problems.forEach( item => {
                if (item.id === +self.result.problemId) {
                    self.result.titleProblem = item.problem;
                    console.log(item.price);
                    self.result.price = item.price;
                    self.result.restriction = item.restriction;


                }
            })

            this.createDOMElementofResult();

        },
        createDOMElementofResult: function createDOMElementofResult() {
            let content = `<div class="description-device">
                                    <div class="image-device">
                                        <img src="${this.result.img}" alt="img">
                                    </div>
                                    <div class="details-device">
                                        <div>
                                            <div class="type">Тип техники</div>
                                            <div class="type-name">${this.result.title}</div>
                                        </div>
                                        <div>
                                            <div class="type">Неисправность</div>
                                            <div class="type-name">${this.result.titleProblem}</div>
                                        </div>
                                        <div class="${(this.result.restriction === undefined)? 'restoring-none' : 'restoring'}">
                                            <span>${this.result.restriction}</span>
                                        </div>
                                        <div class="repair-price">
                                            <span class="price-title">Сумма ремонта</span>
                                            <span class="price">${this.result.price} руб</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="order-form">
                                    <p>Заполните ваши контактные данные
                                        и мы презвоним вам в течении 5 минут</p>
                                    <form action="/">
                                        <div class="form-holder">
                                            <input type="text" placeholder="Ваше имя">
                                            <input type="number" placeholder="Ваш телефон">
                                            <input type="submit" value="Отправить заявку на ремонт">
                                        </div>
                                    </form>
                                </div>`;

            $('.order-holder').append(content);
        },
    result: {
            title: '',
            titleProblem: '',
            device: '',
            problemId: '',
            restriction: '',
            price: 0,
            img: ''
        },
    };

    $(document).ready(function(){
        maksiservices.showSection(false);
    });

})(jQuery);
