let navbtn = document.getElementById('navbtn')


navbtn.addEventListener('click', function(){

    const navmenu = document.getElementById('navmenu')

    
    navbtn.classList.toggle('rotate-[-90deg]')

    navmenu.classList.toggle('hidden')
    

})