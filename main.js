$(document).ready(function(){
    $('#input-box').on('keyup', addItem);
});


//handlers
function addItem(event){
    if(event.keyCode === 13){
        var text = $('#input-box').val();
        var listItems = text.split(',');
        for (var i = 0; i < listItems.length; i++) {
            var li = $('<li>' + listItems[i] + '</li>');
            $('.display-list').append(li);
            $('#input-box').val('');
        } 
    }
}


//utility


