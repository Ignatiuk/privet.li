function onMenuClick() {
  const menuButton = document.querySelector('.menu__button')
  const menuLinks = document.querySelector('.menu__links')
  const isHidden = menuLinks.classList.contains('--hidden')

  if (isHidden) {
    menuButton.src = 'images/icons/menu-close.svg'
    menuButton.classList.add('--rotated')
    menuLinks.classList.remove('--hidden')
  } else {
    menuButton.src = 'images/icons/menu.svg'
    menuButton.classList.remove('--rotated')
    menuLinks.classList.add('--hiding')

    setTimeout(() => {
      if (!menuLinks.classList.contains('--hiding')) {
        return
      }

      menuLinks.classList.remove('--hiding')
      menuLinks.classList.add('--hidden')
    }, 500)
  }
}

/* Designed by Natasha Kornelyuk and developed by Alexander Ignatyuk with ❤️ */