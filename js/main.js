window.onload = () => {
   handleMenuMobile();
};

function handleMenuMobile() {
    const menu_mobile_button = document?.getElementById('menu-mobile-button');

    const menu_mobile_wrapper = document?.getElementById('menu-mobile-wrapper');
    const menu_mobile_option = document?.getElementById('menu-mobile-option');

    menu_mobile_button.addEventListener('click', function() {
        if(menu_mobile_wrapper.style.display === 'none') {
            menu_mobile_wrapper.style.display = 'flex';
            menu_mobile_option.style.display = 'flex';
        } else {
            menu_mobile_wrapper.style.display = 'none';
            menu_mobile_option.style.display = 'none';
        }
    });
}