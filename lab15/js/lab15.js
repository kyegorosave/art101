//kanye Rest URL Endpoint
URL = "https://api.kanye.rest"

//Adding a click function to the button "Activate"
$('#activate').click(function() {
    // Show the Kanye image
    $('#kanye-container').show();

    // Ajax call
    $.ajax({
        url: "https://api.kanye.rest",
        type: "GET",
        dataType : "json",
        success: function(data) {
            $('#speech-bubble').text(data.quote).show(); // Show speech bubble with the quote
        },
        error: function (jqXHR, textStatus, errorThrown) { 
            console.log("Error:", textStatus, errorThrown);
        }
    }) 
});