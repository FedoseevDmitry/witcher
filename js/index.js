import burgerMenu from "./burger.js";
import renderTabs from "./renderTabs.js";
import tabs from "./tabs.js";

burgerMenu({
  selectorMenu: '.nav__list',
  openMenuSelector: 'nav__list_active',
});

tabs({
  selectorTabsBtn: '.tabs__btn',
  activeClassBtn: 'tabs__btn_active',
  selectorTabsElem: '.tabs__item',
  activeClassTab: 'tabs__item_active',
  callback: renderTabs,
});

renderTabs();