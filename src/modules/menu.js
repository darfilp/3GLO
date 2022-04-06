function menu() {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu')
    const closeBtn = menu.querySelector('.close-btn');
    const menuItems = menu.querySelectorAll('ul > li > a')

    const handleMenu = () => {
        menu.classList.toggle('active-menu')
    };

    document.addEventListener('click', (e) => {
        if (e.target.closest('.close-btn') || e.target.matches('menu ul li a')) {
            if (e.target === closeBtn) {
                e.preventDefault();
            }
            handleMenu();
        } else if (e.target.closest('.menu')) {
            //console.log('2')
            handleMenu();
         } else if (!(e.target.closest('menu')) && menu.classList.contains('active-menu')) {
            //console.log('3')
            handleMenu();
         }
    })
    
    // menuBtn.addEventListener('click', handleMenu);

    // menuItems.forEach(item => {
    //     item.addEventListener('click', handleMenu)
    // })
};

export default menu