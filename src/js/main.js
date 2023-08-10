// eslint-disable-next-line import/no-extraneous-dependencies
import 'focus-visible';
import lazyIMages from './modules/lazyIMages';
import documenReady from './helpers/documenReady';
import initModal from './modules/initModal';
import menuToggle from './modules/menuToggle';
import showBtnGuarantees from './modules/showBtnGuarantees';
import SwiperDecor from './modules/SwiperDecor';
import Accordions from './modules/Accordions';
import phoneMask from './modules/inputMask';
import validation from './modules/validation';
import fancyboxFunc from './modules/fancybox-func';
import loadingPageAnimations from './modules/loadingPageAnimations';
import smoothScroll from './modules/smoothScroll';

documenReady(() => {
  window.bank_kazan_API = {};

  lazyIMages();
  initModal();
  menuToggle();
  showBtnGuarantees();
  SwiperDecor();
  accordion();
  phoneMask();
  validation();
  fancyboxFunc();
  loadingPageAnimations();
  smoothScroll();
});

function accordion() {

  if (!document.querySelector(".js-accordions")) return;

  new Accordions({
    selectors: {
      container: '.js-accordions',
      wrapper: '.js-accordion',
      button: '.js-accordion-btn',
      content: '.js-accordion-content'
    }
  });
}
