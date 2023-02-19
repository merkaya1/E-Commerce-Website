const tabsFunc = () => {
  const btnTab = document.querySelectorAll('.tab-button');
  const contents = document.querySelectorAll('.content');
  const tabList = document.querySelector('.tab-list');

  tabList.addEventListener('click', function (e) {
    e.preventDefault();
    const id = e.target.dataset.id;
    if (id) {
      btnTab.forEach((item) => {
        item.classList.remove('active');
        e.target.classList.add('active');
        contents.forEach((item) => item.classList.remove('active'));
        const element = document.getElementById(id);
        element.classList.add('active');
      });
    }
  });
};

export default tabsFunc;
