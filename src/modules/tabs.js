function tabs() {
    const contentPanel = document.querySelector('.service-header');
    const tabs = contentPanel.querySelectorAll('.service-header-tab');
    const contentTab = document.querySelectorAll('.service-tab');

    contentPanel.addEventListener('click', (e) => {
        if (e.target.closest('.service-header-tab')) {
            const tabBtn = e.target.closest('.service-header-tab');
            tabs.forEach((tab, index) => {
                if (tabBtn === tab) {
                    tab.classList.add('active')
                    contentTab[index].classList.remove('d-none');
                } else {
                    tab.classList.remove('active');
                    contentTab[index].classList.add('d-none');
                }
            })
        }
        
    })

    // console.log(contentPanel);
    // console.log(tabs);
    // console.log(contentTab);
}

export default tabs