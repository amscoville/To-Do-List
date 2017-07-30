$(document).ready(function(){
    $('#input-box').on('keyup', addItem);
    $('#list-items').on('click', 'li', strikeThrough);
});


//handlers
function addItem(event){
    if(event.keyCode === 13){
        var text = $('#input-box').val();
        var listItems = text.split(',');
        for (var i = 0; i < listItems.length; i++) {
            var li = $('<li>' + listItems[i] + '</li>');
            // $(li).addClass('item');
            $('.display-list').append(li);
            $('#input-box').val('');
        } 
    }
}

function strikeThrough(event){
    event.preventDefault();
    $('ul > li').toggleClass('item');
}


//utility


