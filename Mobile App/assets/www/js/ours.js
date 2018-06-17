/**
 * Created with JetBrains WebStorm.
 * User: jean
 * Date: 12/24/12
 * Time: 5:28 PM
 * To change this template use File | Settings | File Templates.
 */


$(document).ready(function(){

    getCurrentPosition();


    $('form').submit(function(){

       
        $('#lat').val(window.poslat);
        $('#lng').val(window.poslong);
     
        $.ajax({
            type: 'POST',
            url: 'http://192.168.1.100/GIS/save.php',
           
            data:$('form').serialize(), 
            success: function(){

                alert('Your comment was successfully added');
            },
            error: function(){

                alert('There was an error adding your comment');
            }
        });

        return false;
    });

});




//});