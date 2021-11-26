const tabs = option => {
  const {
    selectorTabsBtn,
    activeClassBtn,
    selectorTabsElem,
    activeClassTab,
    callback = () => {},
  } = option;

  const tabsBtns = document.querySelectorAll(selectorTabsBtn);
  const tabsElem = document.querySelectorAll(selectorTabsElem);

  tabsBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      for (let i = 0; i < tabsBtns.length; i++) {
        if (tabsBtns[i] === btn) {
          tabsBtns[i].classList.add(activeClassBtn);
          tabsElem[i].classList.add(activeClassTab);
          callback(i);
        } else {
          tabsBtns[i].classList.remove(activeClassBtn);
          tabsElem[i].classList.remove(activeClassTab);
        }
      }
    });
  });
};

export default tabs;