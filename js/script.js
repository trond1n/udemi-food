"use strict"

window.addEventListener('DOMContentLoaded', () => {

    //переменные
    const tabs = document.querySelectorAll('.tabheader__item');
    const tabsContent = document.querySelectorAll('.tabcontent');
    const tabsParrent = document.querySelector('.tabheader__items');

    //функции

    //скрыть таб
    const hideTabContent = () => {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    };


    //показать таб
    const showTabContent = (i = 0) => {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');

    };


    //переключаем табы
    const tabSwitcher = (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    };


    //вызов функций
    hideTabContent();
    showTabContent();


    //обработчики событий
    tabsParrent.addEventListener('click', tabSwitcher);
});