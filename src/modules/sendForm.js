let flag = true;


const sendForm = ({
    formID,
    someElem = []
   }) => {

  const form = document.getElementById(formID);
  const allInputs = document.querySelectorAll('input')
  const allSelects = document.querySelectorAll('select')
  const statusBlock = document.createElement('div')
  const loadText = 'Загрузка...'
  const errorText = 'Ошибка...'
  const successText = 'Спасибо!Наш менеджер с вами свяжется.'

  const validate = (list) => {
    let success = true;

    list.forEach(input => {


      if(input.name === "user_name" && (/[^а-яА-Я ]/g.test(input.value) || input.value === "" ||input.value.length < 2)){
        alert("Правильно введите имя");
        success = false;
      }
      
      if (input.name === "user_phone" && (!(/^[\+]?\(?([0-9]{4})\)?([-]?)([0-9]{3})\2([0-9]{4})+$/g.test(input.value)) || input.value === "")){
        alert("Правильно введите телефон");
        success = false;
      }

      if (input.name === "user_email" && (/[^a-zA-Z0-9@-_.!~*']/g.test(input.value) || input.value === "")){
        alert("Правильно введите почту");
        success = false;
      }

      if(input.name === "user_message" && /[^а-яА-Я0-9 -,]/g.test(input.value)){
        success = false;
      } 
      
    });

    return success;
  };


  const sendData = (data) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json())
  }

  const submitForm = () => {
    const formElements = form.querySelectorAll('input')
    const formData = new FormData(form)
    const formBody = {}

    formData.forEach((val, key) => {
      formBody[key] = val
    })

    someElem.forEach(elem => {
      const element = document.getElementById(elem.id)

      if (elem.type === 'block') {
        formBody[elem.id] = element.textContent
      } else if (elem.type === 'input') {
        formBody[elem.id] = element.value
      }
    })

    if (validate(formElements)) {
      sendData(formBody)
        .then(data => {
          statusBlock.textContent = successText

          formElements.forEach(input => {
            input.value = ''
          });

          [...allInputs, ...allSelects].forEach(input => input.value = '')

          someElem.forEach(elem => {
            const element = document.getElementById(elem.id)
            if (elem.type === 'block') {
              element.textContent = '0'
            } else if (elem.type === 'input') {
              element.value = ''
            }
          })

          setTimeout(() => {
            form.removeChild(statusBlock);
          }, 5000);
        })
        .catch(error => {
          statusBlock.textContent = errorText
          setTimeout(() => {
            form.removeChild(statusBlock);
          }, 5000);

        })
    } else {
      return alert('Данные не валидны')
    }

    statusBlock.textContent = loadText
    form.append(statusBlock)
  }

  statusBlock.style.color = '#19b5fe'

  try {
    if (!form) {
      throw new Error('Ошибка!')
    }

    form.addEventListener('submit', (event) => {
      event.preventDefault()

      submitForm()
    })
  } catch (error) {
    console.log(error.message);
  }
}

export default sendForm;