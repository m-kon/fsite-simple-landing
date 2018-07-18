console.log("Webpack. Demo not works?");

const c = document.getElementById('fsiteNavbarNavAltMarkup');
const t = c.previousElementSibling;

function NavToggler(collapsed, toggler) {

  console.log(typeof collapsed.classList);

  this.toggleNav = function() {
    if (collapsed.classList.contains('show')) {
      console.log('show is here');
      hideNav();
      makeBtnUntoggled();
    } else {
      console.log('show is not here');
      showNav();
      makeBtnToggled();
    }
  };

  showNav = function() {
    collapsed.classList.add('show');
  };
  hideNav = function() {
    collapsed.classList.remove('show');
  };
  makeBtnToggled = function() {
    toggler.classList.add('toggled');
  };
  makeBtnUntoggled = function() {
    toggler.classList.remove('toggled');
  };
};

const toggler = new NavToggler(c, t);
t.addEventListener('click', toggler.toggleNav);
c.addEventListener('click', toggler.toggleNav);