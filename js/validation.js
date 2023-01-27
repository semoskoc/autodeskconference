$(document).ready(function () {
    $('#send_message').click(function (e) {

        //Stop form submission & check the validation
        e.preventDefault();

        // Variable declaration
        var error = false;
        var firstname = $('#firstname').val();
        var lastname = $('#lastname').val();
        var email = $('#email').val();
        var telephone = $('#telephone').val();
        var city = $('#city').val();
        var company = $('#company').val();
        var wherefrom = $('#wherefrom').val();	

        $('#firstname,#lastname,#email,#telephone,#city,#company,#wherefrom').click(function () {
            $(this).removeClass("error_input");
        });

        // $('#firstname,#lastname,#email,#telephone,#city,#wherefrom').click(function(){
        // 	$(this).removeClass("error_input");
        // });

        // Form field validation
        if (firstname.length == 0) {
            var error = true;
            $('#firstname').addClass("error_input");
            // for showing the error message
            $('#firstname_error').addClass('block');
        } else {
            $('#firstname').removeClass("error_input");
            // for removing the error message
            $('#firstname_error').removeClass('block');
            $('#firstname_error').addClass('hidden');
        }

        if (lastname.length == 0) {
            var error = true;
            $('#lastname').addClass("error_input");
            // for showing the error message
            $('#lastname_error').addClass('block');
        } else {
            $('#lastname').removeClass("error_input");
            // for removing the error message
            $('#lastname_error').removeClass('block');
            $('#lastname_error').addClass('hidden');
        }
        if (email.length == 0) {
            var error = true;
            $('#email').addClass("error_input");
            // for showing the error message
            $('#email_error').addClass('block');
        } else {
            $('#email').removeClass("error_input");
            // for removing the error message
            $('#email_error').removeClass('block');
            $('#email_error').addClass('hidden');
        }
        if (telephone.length == 0) {
            var error = true;
            $('#telephone').addClass("error_input");
            // for showing the error message
            $('#telephone_error').addClass('block');
        } else {
            $('#telephone').removeClass("error_input");
            // for removing the error message
            $('#telephone_error').removeClass('block');
            $('#telephone_error').addClass('hidden');
        }
        if (city.length == 0) {
            var error = true;
            $('#city').addClass("error_input");
            // for showing the error message
            $('#city_error').addClass('block');
        } else {
            $('#city').removeClass("error_input");
            // for removing the error message
            $('#city_error').removeClass('block');
            $('#city_error').addClass('hidden');
        }
        if (company.length == 0) {
            var error = true;
            $('#company').addClass("error_input");
            // for showing the error message
            $('#company_error').addClass('block');
        } else {
            $('#company').removeClass("error_input");
            // for removing the error message
            $('#company_error').removeClass('block');
            $('#company_error').addClass('hidden');
        }

        // $("select.age").change(function(){
        //     var selectedCountry = $(this).children("option:selected").val();
        //     alert("You are - " + selectedCountry);
        // });

        // $("#wherefrom").change(function(){
        //     var selectedFrom = $(this).
        // });

        // $("#clientList").children('[value="zaza"]').attr('selected', true);

        // $(“#selectedId option : selected”).text()

        
        if ($("#wherefrom option:selected").text() == 'Од каде дознавте за нас?') {
            var error = true;
            $('#wherefrom').addClass("error_input");
            // for showing the error message
            $('#wherefrom_error').addClass('block');
        } else {
            $('#wherefrom').removeClass("error_input");
            // for removing the error message
            $('#wherefrom_error').removeClass('block');
            $('#wherefrom_error').addClass('hidden');
        }



        // If there is no validation error, next to process the mail function
        if (error == false) {
            // Disable submit button just after the form processed 1st time successfully.
            $('#send_message').attr({ 'disabled': 'true', 'value': 'СЕ ИСПРАЌА...' });

            /* Post Ajax function of jQuery to get all the data from the submission of the form as soon as the form sends the values to email.php*/
            $.post("/php/create-reservation.php", $("#contact_form").serialize(), function (result) {
                console.log(result);
                //Check the result set from email.php file.
                if (result.trim() === 'sent') {
                    // console.log('success');
                    //If the email is sent successfully, remove the submit button
                    $('#submit').remove();
                    //Display the success message
                    $('#mail_success').fadeIn(500);
                } else {
                    console.log('error');
                    //Display the error message
                    $('#mail_fail').fadeIn(500);
                    // Enable the submit button again
                    $('#send_message').removeAttr('disabled').attr('value', 'ИСПРАТИ');
                }
            });
        }
    });
});