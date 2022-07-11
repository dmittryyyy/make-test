const tabsBtn = document.querySelectorAll('.tabsBtn');
const tabs = document.querySelectorAll('.tab-list-item');

const btnMobile = document.getElementById('btnMobile');

if (document.documentElement.clientWidth < 420.98) {
    tabsBtn.forEach((item) => {
        item.classList.remove('btnActive');
    });
    tabs.forEach((item) => {
        item.classList.remove('tabActive');
    });
    let tabId = btnMobile.getAttribute('data-tab');
    let currentTab = document.querySelector(tabId);
    btnMobile.classList.add('btnActive');
    currentTab.classList.add('tabActive');
}

tabsBtn.forEach((item) => {
    item.addEventListener('click', () => {
        let tabId = item.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);

        tabsBtn.forEach((item) => {
            item.classList.remove('btnActive');
        });
        tabs.forEach((item) => {
            item.classList.remove('tabActive');
        });

        item.classList.add('btnActive');
        currentTab.classList.add('tabActive');
    });
});