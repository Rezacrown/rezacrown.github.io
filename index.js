let hamburger = document.getElementById('hamburger');
let navmobile = document.getElementById('navmobile');



hamburger, addEventListener('click', function () {

    navmobile.classList.toggle('translate-x-[100vw]')
    navmobile.classList.toggle('opacity-100')
})



