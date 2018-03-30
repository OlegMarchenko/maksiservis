(function($) {
    let maksiservices = {
        'showSection': function showSection(callback) {
            let currentElemIdent = '';
            let self = this;
            console.log('into showSection');

            // eventListener for step1 devices
            $('.card-device').on('click', function () {
                const selectorStep = '#step-2';
                const identification = $(this).attr('data-device');

                // $('#step3').hide();
                self.result.device = identification;
                if (currentElemIdent !== '' && currentElemIdent === identification) {
                    console.log('if');
                    // проверить и скрить секцию
                    $(selectorStep).toggle( "slow");
                    // self.createDOMStep();
                } else {
                    // просто создам елементы
                    console.log('else');
                    callback('data-brand', brands);
                    $(selectorStep).hide( "slow");
                    $(selectorStep).show( "slow");
                }

                currentElemIdent = $(this).attr('data-device');
            });

            // eventListener for step2 brands
            $('.card-brand').on('click', function () {
                console.log('step2');
                const selectorStep = '#step-3';
                const identification = $(this).attr('data-brand');
                if ($(this)[0].className === 'card card-brand') {
                    callback('data-problems', problems);
                    $(selectorStep).toggle( "slow" );
                }


            });

            // eventListener for step3 problems
            $('.card-problem').on('click', function () {
                const selectorStep = '#step-4';
                const identification = $(this).attr('data-problem');
                if ($(this)[0].className === 'card card-problem') {
                    $(selectorStep).toggle( "slow" ).scroll();
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
                // this.showSection();
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
                        let contentString = `<div class="card card-problem" data-problem="${item}">
                                    <div>
                                        <span class="title">${item.problem}</span>
                                    </div>
                                </div>`;
                        content = content + contentString;
                    }

                });

                $('.holder-problems').append(content);



            }



        },
    result: {
    device: '',
            problem: '',
            restriction: '',
            price: 0,
            img: ''
        },
    };

    $(document).ready(function(){
        maksiservices.showSection(maksiservices.createDOMStep);
    });

})(jQuery);
