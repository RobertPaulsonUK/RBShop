document.addEventListener('DOMContentLoaded', function () {


    // CABINET
    const cabinetMobBtn = document.querySelector('.cabinet_mob_btn');
    const cabinetList = document.querySelector('.cabinet__list');
    const cabinetBtn = document.querySelectorAll('.cabinet_btn');

    if (cabinetMobBtn) {
        cabinetMobBtn.addEventListener('click', function () {
            cabinetMobBtn.classList.toggle('active')
            cabinetList.classList.toggle('active')
        })
    }

    cabinetBtn.forEach(function (btn) {
        btn.addEventListener('click', function () {
            cabinetList.classList.remove('active')
        })
    })



    // BURGER
    let burger = document.getElementById('header__burger');
    let nav = document.querySelector('.header__nav');
    let html = document.querySelector('html');
    let headerLinks = document.querySelectorAll('.nav__list-link');

    burger.addEventListener('click', function () {
        this.classList.toggle('active');
        nav.classList.toggle('active');

        // Изменяем свойство overflow у html при клике на бургер
        html.style.overflow = html.style.overflow === 'hidden' ? 'visible' : 'hidden';
    });

    headerLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            burger.classList.remove('active');
            nav.classList.remove('active');
            html.style.overflow = 'visible';
        });
    });



    // SWIPER
    const swiper3 = new Swiper('.swiper', {


        pagination: {
            el: '.swiper-pagination',
        },

        navigation: {
            nextEl: '.swiper__arrow-next',
            prevEl: '.swiper__arrow-prev',
        },
    });


    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 16,
        slidesPerView: 6,
        freeMode: true,
        watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".mySwiper2", {
        spaceBetween: 10,
        thumbs: {
            swiper: swiper,
        },
    });



    // SCROLL
    const scrollTop = document.querySelector('.btn__top');


    scrollTop.addEventListener('click', function () {
        document.documentElement.scrollTop = 0
    })


    // TABS
    function setupTabs(tabsButtons, tabsItems, activateFirst = true) {
        tabsButtons.forEach(function (button, index) {
            button.addEventListener('click', function () {
                const currentIndex = parseInt(button.dataset.index);
                const currentItem = tabsItems[currentIndex];

                tabsButtons.forEach(function (otherButton) {
                    if (otherButton !== button) {
                        otherButton.classList.remove('active');
                    }
                });

                if (!button.classList.contains('active')) {
                    tabsItems.forEach(function (otherItem) {
                        otherItem.classList.remove('active');
                    });
                    currentItem.classList.add('active');
                    button.classList.add('active');
                }
            });
        });

        if (activateFirst && tabsButtons.length > 1) {
            tabsButtons[0].classList.add('active');
            tabsItems[0].classList.add('active');
        }
    }

    // Пример использования для первой вкладки
    const tabsButtons1 = document.querySelectorAll('.btn_tab');
    const tabsItems1 = document.querySelectorAll('.tab_item');
    setupTabs(tabsButtons1, tabsItems1);

    // Пример использования для первой вкладки
    const tabsButtons2 = document.querySelectorAll('.btn_tab_mod');
    const tabsItems2 = document.querySelectorAll('.tab_item_mod');
    setupTabs(tabsButtons2, tabsItems2);

    // Пример использования для первой вкладки
    const tabsButtons3 = document.querySelectorAll('.cabinet_btn');
    const tabsItems3 = document.querySelectorAll('.cabinet__item');
    setupTabs(tabsButtons3, tabsItems3);



    // HEADER MENU
    const btnMenu = document.querySelector('.btn__menu');
    const headerMenu = document.querySelector('.header__menu');
    const introWrapper = document.querySelector('.intro__wrapper');

    btnMenu.addEventListener('click', function () {
        if (window.innerWidth >= 768) {
            headerMenu.classList.toggle('active')
            introWrapper.classList.toggle('active')
        } else {
            headerMenu.classList.toggle('active')
            introWrapper.classList.remove('active')
        }
    })



    // SEARCH
    const searchPhoto = document.querySelector('.search__photo');
    const search = document.querySelector('.header__search');
    const searchInpt = document.querySelector('.search__inpt');
    const headerPannel = document.querySelector('.header__pannel');
    const pannelClose = document.querySelector('.pannel__close');
    const searchList = document.querySelector('.search_list');

    searchInpt.addEventListener('click', function () {
        searchList.classList.toggle('active')
        if (search.style.borderRadius === '0px') {
            search.style.borderRadius = '48px';
        } else {
            search.style.borderRadius = '0px';
        }
    })

    searchPhoto.addEventListener('click', function () {
        if (window.innerWidth <= 768) {
            search.classList.add('active')
            searchInpt.classList.add('active')
            headerPannel.classList.add('active')
            pannelClose.classList.add('active')
        }
    })

    pannelClose.addEventListener('click', function () {
        if (window.innerWidth <= 768) {
            search.classList.remove('active')
            searchInpt.classList.remove('active')
            headerPannel.classList.remove('active')
            pannelClose.classList.remove('active')
        }
    })



    // MODAL
    const modalBtns = document.querySelectorAll('.modal_btn');
    const modalBtnThank = document.querySelector('.modal_btn_thank');
    const modal = document.querySelector('.modal');
    const modalThank = document.querySelector('.modal__thank');
    const modalContent = document.querySelector('.modal__content');
    const modalClose = document.querySelectorAll('.modal__close');
    const body = document.querySelector('body');

    // let isModalOpen = false; // Флаг, указывающий, открыто ли модальное окно

    // Функция для открытия модального окна
    function openModal(thisModal) {
        thisModal.classList.add('active');
        body.style.overflow = 'hidden'; // Блокируем скролл body
        isModalOpen = true;

        if (modalThank.classList.contains('active')) {
            modal.classList.remove('active');
        }
    }

    // Обработчик клика по кнопке открытия модального окна
    modalBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            openModal(modal);
        });
    });

    modalBtnThank.addEventListener('click', function (e) {
        e.preventDefault();
        openModal(modalThank);
    });

    // Функция для закрытия модального окна
    function closeModal() {
        modal.classList.remove('active');
        modalThank.classList.remove('active');
        body.style.overflow = 'auto'; // Разблокируем скролл body
        isModalOpen = false;
    }


    // Обработчик клика по кнопке закрытия модального окна
    modalClose.forEach(function (close) {
        close.addEventListener('click', closeModal);
    })



    // FILTER
    const filterBtn = document.querySelector('.filter_btn');
    const sidebar = document.querySelector('.sidebar');


    if (filterBtn && sidebar) {
        filterBtn.addEventListener('click', function (e) {
            e.preventDefault()
            sidebar.classList.toggle('active')
        })
    }


    // SORTING
    const sortingCol = document.querySelector('.sorting_col');
    const sortingRow = document.querySelector('.sorting_row');
    const goodsItems = document.querySelector('.goods__items');

    function sorting() {
        sortingCol.addEventListener('click', function () {
            sortingCol.classList.add('active')
            sortingRow.classList.remove('active')
            goodsItems.classList.remove('active')
        })

        sortingRow.addEventListener('click', function () {
            sortingCol.classList.remove('active')
            sortingRow.classList.add('active')
            goodsItems.classList.add('active')
        })
    }

    if (sortingCol) {
        sorting()
    }



    // ERROR
    const input = document.getElementById('search-input');

    function setError(hasError) {
        if (hasError) {
            input.classList.add('border-red-700');
        } else {
            input.classList.remove('border-red-700');
        }
    }

    setError(false);


});