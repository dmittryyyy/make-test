const tabsBtn = document.querySelectorAll('.tabsBtn');
const tabs = document.querySelectorAll('.tab-list-item');

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