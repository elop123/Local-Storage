//local storage

localStorage.setItem('name', 'Elena')
 console.log(localStorage.getItem('name'))
localStorage.removeItem('name')


//session storage

sessionStorage.setItem('name', 'Mark')
 console.log(sessionStorage.getItem('name'))
sessionStorage.removeItem('name')
sessionStorage.setItem('name', 'Mark')


//cookies

document.cookie = 'name=Elena; expires=' + new Date(2100, 0, 1).toUTCString()

document.cookie = 'lastName=Oprea; expires=' + new Date(2100, 0, 1).toUTCString()