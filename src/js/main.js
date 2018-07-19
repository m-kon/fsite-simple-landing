import navToggler from './fsite-nav-toggler';

const c = document.getElementById('fsiteNavbarNavAltMarkup');
const t = c.previousElementSibling;

const toggler = new navToggler(c, t);

t.addEventListener('click', toggler.toggleNav);
c.addEventListener('click', toggler.toggleNav);