const throttle = require('lodash.throttle');
const Menu = (()=> {

    const Selectors = {
        MENU: '.js-sticky',
        MENU_LIST: '.js-menu',
        HAMBURGER: '.js-hamburger'
    };

    const ClassNames = {
        FIXED_MENU: 'header__bottom--fixed',
        ACTIVE_MENU: 'menu--active',
        ACTIVE_HAMBURGER: 'hamburger--active'
    }

    class Menu {
        constructor(element) {
            this.element = element;
            this.menuList = element.querySelector(Selectors.MENU_LIST);
            this.hamburger = element.querySelector(Selectors.HAMBURGER);
            this.offset = element.offsetTop;
            this.addEvents();
        }

        scrollHandler() {
            if (window.pageYOffset >= this.offset) {
                this.element.classList.add(ClassNames.FIXED_MENU);
            } else {
                this.element.classList.remove(ClassNames.FIXED_MENU);
            }            
        }

        clickHandler() {
            this.hamburger.classList.toggle(ClassNames.ACTIVE_HAMBURGER);
            this.menuList.classList.toggle(ClassNames.ACTIVE_MENU);
        }

        addEvents() {
            window.addEventListener('scroll', throttle(this.scrollHandler.bind(this), 50));
            this.hamburger.addEventListener('click', this.clickHandler.bind(this));
        }
    }

    return new Menu(document.querySelector(Selectors.MENU));
})();

export default Menu;