var column = document.getElementsByClassName('table');

column.addEventListener('click', function(event) {
    alert(this.className);
}, false);

column.addEventListener('mouseover', function(event) {
    console.log(event.target);
});
