function form() {
    const form = document.querySelector('.calc-block');
    const square = form.querySelector('.calc-square');
    const count = form.querySelector('.calc-count');
    const day = form.querySelector('.calc-day');
    let formName = document.querySelectorAll('.form-name');
    let formTel = document.querySelectorAll('.form-phone');
    const mess = document.querySelector('.mess');
    const formEmail = document.querySelectorAll('.form-email');

    console.log(formEmail)
    formName = [...formName, mess]

    formEmail.forEach(item => {
        item.addEventListener('input', (e) => {
            item.value = item.value.replace(/[^a-z0-9\@\-\_\.\!\~\*\']/gi, '');
        })
    })

    formTel.forEach(item => {
        item.addEventListener('input', (e) => {
            item.value = item.value.replace(/[^0-9\)\(\-]/gi, '')
        });
    })

    

    formName.forEach(item => {
        item.addEventListener('input', (e) => {
        item.value = item.value.replace(/[^а-я\.\-]/gi, '')
    })
    })

    

    square.addEventListener('input', (e) => {
        square.value = square.value.replace(/[^\d]/gi, '')
    })

    count.addEventListener('input', (e) => {
        count.value = count.value.replace(/[^\d]/gi, '')
    })

    day.addEventListener('input', (e) => {
        day.value = day.value.replace(/[^\d]/gi, '')
    })

};

export default form