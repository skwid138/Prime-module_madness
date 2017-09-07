console.log('js working ');

$(document).ready(readyNow);

//base url
function readyNow(){
    $.ajax({
        method: 'GET',
        url: 'modules/module3',
        success: function(response) {
            console.log("from client", response);

        }

    });
}

//actual url 