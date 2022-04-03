import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal";
import form from "./modules/form";
import tabs from  "./modules/tabs";
import slider from "./modules/slider"

    // const createDots = () => {
    //     console.log(dotsContainer)
    //     const dot = document.createElement('li');
    //     //dot.classList.add('dot');
    //     //dot.append();
    // };

tabs();
timer('2022-04-16');
menu();
modal();
form();
slider();

