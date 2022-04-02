const modal = () => {
    const btns = document.querySelectorAll('.popup-btn');
    const modal = document.querySelector('.popup');
    const content = modal.querySelector('.popup-content');
    let idInterval;
    let count = 0;

    const animation = () => {
        count++;
        idInterval = requestAnimationFrame(animation);
        if (count <= 40) {
            console.log(content.style.left)
            content.style.left = count + '%';
        } else {
            count = 0;
            cancelAnimationFrame(idInterval)
        }
    };
    
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'flex';
            if (document.documentElement.offsetWidth <= 768) {
                content.style.left = 38 + '%';
                modal.style.display = 'flex';
            } else {
                content.style.left = 30 + '%';
                modal.style.display = 'flex';
                animation()
            }
            
        })
    });

    //
    modal.addEventListener('click', (e) => {
        if (!(e.target.closest('.popup-content')) || e.target.classList.contains('popup-close')) {
            modal.style.display = 'none';
        }
    })

};

export default modal