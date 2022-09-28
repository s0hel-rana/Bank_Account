document.getElementById('login_submit').addEventListener('click',function(){
    const emailField = document.getElementById('usr_email');
    const useEmail = emailField.value;

    emailField.value = '';

    //use password

    const passField = document.getElementById('usr_pass');
    const usePass = passField.value;
    usePass.value = '';

    if(useEmail == 'sohel@gmail.com' && usePass == '12345'){
        window.location.href = 'bank.html';
    }

})