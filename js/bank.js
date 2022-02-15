document.getElementById('login-btn').addEventListener('click', function(){
    //get user email
    const emailField = document.getElementById('email');
    const userEmail = emailField.value;
    //get user password
    const passField = document.getElementById('password');
    const userPass = passField.value;  

    
    if(userEmail == 'sontan@baap.com' && userPass == 'secret'){
        location.href = 'banking.html';
    }
    else{
        console.log('unKnown user');
    }
});