import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal";
import form from "./modules/form";
import tabs from  "./modules/tabs";
import slider from "./modules/slider";
import calc from "./modules/calc"
import sendForm from "./modules/sendForm"



sendForm({
  formID: 'form1',
  someElem: [{
    type: 'block',
    id: 'total'
  }]
});
sendForm({
  formID: 'form2',
  someElem: [{
    type: 'block',
    id: 'total'
  }]
});
sendForm({
  formID: 'form3',
  someElem: [{
    type: 'block',
    id: 'total'
  }]
});
tabs();
timer('2022-04-16');
menu();
modal();
form();
slider();
calc(100);


