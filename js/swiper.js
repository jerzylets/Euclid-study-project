const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  a11y: {
    paginationBulletMessage: 'Перейти к слайду {{index}}',
    // если будут добавлены новые слайды, следущую строчку нужно будет переписать
    slideLabelMessage: '{{index}} из трёх'
  },
});
