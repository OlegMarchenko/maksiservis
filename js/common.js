(function($) {
    let maksiservices = {
        'showSection': function showSection(param) {
            let currentElemIdent = '';
            let self = this;

            if (param) {
                $('.card-device').unbind('click');
                $('.card-brand').unbind('click');
            }

            $('.card-device').on('click', function () {
                const selectorStep = '#step-2';
                const identification = $(this).attr('data-device');

                setTimeout(function () {
                    $('html, body').animate({
                        scrollTop: $(selectorStep).offset().top
                    }, 2000);
                }, 500);

                self.result.device = identification;

                if(currentElemIdent !== identification) {
                    $('#step-4').hide( "slow");
                    $('#step-3').hide( "slow");
                }
                if (currentElemIdent !== '' && currentElemIdent === identification) {
                    currentElemIdent = $(this).attr('data-device');
                    $('.card-device').unbind('click');
                    $(selectorStep).toggle( "slow");

                } else {
                    currentElemIdent = $(this).attr('data-device');
                    $('.card-device').unbind('click');
                    self.createDOMStep('data-brand', brands);
                    $(selectorStep).hide( "slow");
                    $(selectorStep).show( "slow");

                }


            });

            $('.card-brand').on('click', function () {
                let current = '';
                const selectorStep = '#step-3';
                const identification = $(this).attr('data-brand');
                self.result.brand = identification;

                if ($(this)[0].className === 'card card-brand') {
                    self.createDOMStep('data-problems', problems);
                    if (currentElemIdent !== identification) {
                        $('#step-4').hide( "slow");
                    }
                    $(selectorStep).toggle( "slow");
                    $('html, body').animate({
                        scrollTop: $(selectorStep).offset().top
                    }, 2000);
                }
                currentElemIdent = $(this).attr('data-brand');

            });

            // eventListener for step3 problems
            $('.card-problem').on('click', function () {
                const selectorStep = '#step-4';
                const identification = $(this).attr('data-problem');
                self.result.problemId = identification;

                if ($(this)[0].className === 'card card-problem') {
                    $(selectorStep).hide( "slow" );
                    self.createResult();
                    $(selectorStep).show( "slow" );
                }

                $('html, body').animate({
                    scrollTop: $(selectorStep).offset().top
                }, 2000);
            });

        },
        'createDOMStep': function (identification, data) {
            const self = this;

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
                const deviceBrand = self.result.device +'-'+self.result.brand;
                let content = '';
                let brandDeviceArray = [];
                let deviceArray = [];

                $('.holder-problems').contents().remove();

                data.forEach( item => {
                        // debugger
                        if(item.identification === deviceBrand) {
                            brandDeviceArray.push(item);
                        }
                        if(item.identification === self.result.device) {
                            deviceArray.push(item);
                        }
                });

                if( brandDeviceArray.length > 0) {
                    brandDeviceArray.forEach(item => {
                        let contentString = `<div class="card card-problem" data-problem="${item.id}">
                                    <div>
                                        <span class="title">${item.problem}</span>
                                    </div>
                                </div>`;
                        content = content + contentString;
                    });
                }else {
                    deviceArray.forEach(item => {
                        let contentString = `<div class="card card-problem" data-problem="${item.id}">
                                    <div>
                                        <span class="title">${item.problem}</span>
                                    </div>
                                </div>`;
                        content = content + contentString;
                    });
                }

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
                    self.result.price = item.price;
                    self.result.restriction = item.restriction;
                }
            });

            this.createDOMElementofResult();

        },
        createDOMElementofResult: function createDOMElementofResult() {
            $('.order-holder').contents().remove();
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
            img: '',
            brand: ''
        },
    };

    $(document).ready(function(){
        maksiservices.showSection(false);
    });

})(jQuery);
