let tabsBtn = document.querySelectorAll('.tabs-nav__btn');
let tabsItem = document.querySelectorAll('.tabs-item');
let tabsImg = document.querySelectorAll('.tabs-img');

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) { btn.classList.remove('tabs-nav__btn_active') });
    e.currentTarget.classList.add('tabs-nav__btn_active');

    tabsItem.forEach(function (element) { element.classList.remove('tabs-item_active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item_active');

    tabsImg.forEach(function (element) { element.classList.remove('tabs-img_active') });
    document.querySelector(`[data-point="${path}"]`).classList.add('tabs-img_active');
  });
});
