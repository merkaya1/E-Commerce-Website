function sideBar() {
  const btnOpenSideBar = document.querySelector('.bi-list');
  const sideBar = document.querySelector('.header-center');
  const sideBarCloseBtn = document.querySelector('.bi-x-square-fill');

  const sideBarMenu = () => {
    sideBar.style.left = '0';
  };
  const closeSideBar = () => {
    sideBar.style.left = '-100%';
  };
  // events
  function eventListener() {
    btnOpenSideBar.addEventListener('click', sideBarMenu);
    sideBarCloseBtn.addEventListener('click', closeSideBar);
  }

  eventListener();

  document.addEventListener('click', function (e) {
    if (!e.composedPath().includes(sideBar) && !e.composedPath().includes(btnOpenSideBar)) {
      closeSideBar();
    }
  });
}

function searchModal() {
  const searchBtn = document.querySelector('.toggle-button');
  const modalSearch = document.querySelector('.modal-search');
  const modalSearchCloseBtn = modalSearch.querySelector('.bi-x-square-fill');
  const modalSearchWrapper = document.querySelector('.modal-search .modal-wrapper');

  const openSearch = () => {
    modalSearch.style.visibility = 'visible';
    modalSearch.style.opacity = '1';
  };
  const closeSearch = () => {
    modalSearch.style.visibility = 'hidden';
    modalSearch.style.opacity = '0';
  };

  //Events for modal
  const modalEvents = () => {
    searchBtn.addEventListener('click', openSearch);
    modalSearchCloseBtn.addEventListener('click', closeSearch);
  };

  modalEvents();

  document.addEventListener('click', function (e) {
    if (!e.composedPath().includes(modalSearchWrapper) && !e.composedPath().includes(searchBtn)) {
      closeSearch();
    }
  });
}

function headerFunc() {
  sideBar();
  searchModal();
}

export default headerFunc();
