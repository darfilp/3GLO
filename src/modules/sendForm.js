let flag = true;

const sendForm = ({
    formID,
    someElem = []
   }) => {

  const form = document.getElementById(formID);
  const statusBlock = document.createElement("div");
  const loadText = "Загрузка...";
  const errorText = "Ошибка...";
  const successText = "Спасибо наш менеджер свяжется с вами!";

  
  const validateInputs = (input) => {
    if ((input.name === "user_name" && input.value.length > 2) || (input.name === "user_email" && input.value !== "") || (input.name === "user_phone" && (input.value.length < 13)) || (input.name === "user_message")) {
        flag = false;          
    } else {
        statusBlock.textContent = errorText;
    }
  };

  const validate = (list) => {
    let success = true; 
    
    list.forEach(input => {

      validateInputs(input);

      if (flag === false) {
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
      },
    }).then(res => res.json());
  };

  const submitForm = () => {
    const formElements = form.querySelectorAll('input');
    const formData = new FormData(form);
    const formBody = {};

    statusBlock.textContent = loadText;
    form.append(statusBlock);

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    someElem.forEach(elem => {
      const element = document.getElementById(elem.id);
      if (elem.type === 'block') {
        formBody[elem.id] = element.textContent;
      } else if (elem.type === 'input') {
        formBody[elem.id] = element.value;
      }
    });

    if (validate(formElements)) {
      sendData(formBody)
        .then(data => {          
          statusBlock.textContent = successText;
          formElements.forEach(input => {
            input.value = '';
          });
        })
        .catch(error => {
          statusBlock.textContent = errorText;
        });         
    } else {      
      alert('Проверьте данные');
    }
  };

  statusBlock.style.color = '#19b5fe'


  try {
    if (!form) {
      throw new Error('Ошибка!');
    }
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      submitForm();
      console.log('Отправлено');
    });
  } catch (error) {
    console.log(error.massage);
  }

};

export default sendForm;