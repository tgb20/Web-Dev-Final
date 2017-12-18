$(document).ready(function() {
    
        $("#getLastName").click(function(){
    
    
            var firstName = $('#firstName').val();
    
    
            $.ajax({ method: "POST", url: "formResponse.php", data: { fname: firstName}}).done(function( result ) {
                alert(result);
            });
        });
    });