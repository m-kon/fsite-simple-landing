class navToggler {
  constructor(collapsed, toggler) {
    this.toggleNav = function () {
      if (collapsed.classList.contains('show')) {
        hideNav();
        makeBtnUntoggled();
      }
      else {
        showNav();
        makeBtnToggled();
      }
    };
    const showNav = function () {
      collapsed.classList.add('show');
    };
    const hideNav = function () {
      collapsed.classList.remove('show');
    };
    const makeBtnToggled = function () {
      toggler.classList.add('toggled');
    };
    const makeBtnUntoggled = function () {
      toggler.classList.remove('toggled');
    };
  }
};

export default navToggler;