// const changeIcons = document.querySelector('.change-icon')

function showMessage(element) {
    var display = document.querySelector(element).style.display;

    if(display == 'none'){
        document.querySelector(element).style.display = 'block';

        // // Change Icons
        // changeIcons.addEventListener('click', function(){
        //     document.body.classList.toggle('switch');
        // });

    } else {
        document.querySelector(element).style.display = 'none';
    }
}

