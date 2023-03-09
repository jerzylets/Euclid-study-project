let search = document.querySelector('.search-btn')
let searchLine = document.querySelector('.search')
let closeIcon = document.querySelector('.close-icon')
let searchInput = document.querySelector('.search__input')
let searchIcon = document.querySelector('.search__icon')

search.addEventListener('click',

  function () {
    searchLine.classList.toggle('search_active')
  })

closeIcon.addEventListener('click',
  function () {
    searchLine.classList.remove('search_active')

    searchInput.value = ''
  })

searchIcon.addEventListener('click',
  function () {
    searchLine.classList.remove('search_active')

    searchInput.value = ''
  })
