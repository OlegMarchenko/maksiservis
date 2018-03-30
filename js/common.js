function showSection(dataResult) {

    // eventListener for step1 devices
    $('.card-device').on('click', function () {
        const selectorStep = '#step-2';
        const identification = $(this).attr('data-device');
        dataResult.device = identification;
        // if($(this).hasClass('active')) {
        //     $('.step').hide('slow');
        //     $(this).removeClass('active');
        // }
            // todo: create new functionality
            // $('.card-device').addClass('active');
        // if ($(this).hasClass('card card-device')) {
            // call of function render DOM
            createDOMStep('data-brand', brands, dataResult);

            $(selectorStep).toggle( "slow").scroll();
        // }





    });
    // eventListener for step2 brands
    $('.card-brand').on('click', function () {
        console.log('step2', dataResult);
        const selectorStep = '#step-3';
        const identification = $(this).attr('data-brand');
        if ($(this)[0].className === 'card card-brand') {
            createDOMStep('data-problems', problems, dataResult);
            // showSection(dataResult);
            $(selectorStep).toggle( "slow" ).scroll();
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

}

function createDOMStep(identification1, data, dataResult) {

    if(identification1 === 'data-brand'){
        let content = '';

        data.forEach( item => {
            let contentString = `<div class="card card-brand" data-brand="${item.name}">
                            <div>
                                <img src="${item.img}" alt="${item.name}">
                            </div>
                        </div>`;
            content = content + contentString;
        });

        $('.holder-brands').append(content);



    }

    if(identification1 === 'data-problems'){
        console.log('data-problem');
        let content = '';
        console.log(dataResult.device);
        data.forEach( item => {
            if(item.identification !== undefined && item.identification === dataResult.device){
                console.log('item.identification', item.identification);
                console.log('idevice', dataResult.device);
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

    showSection(dataResult);
}

$(document).ready(function () {
    let result = {
        device: '',
        problem: '',
        restriction: '',
        price: 0,
        img: ''

    };
    showSection(result);
});