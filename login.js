	function validate(form){
		if(form.username.value.length==0){
			alert("You did not enter a username or password! \n Try again!");
			form.username.focus();
			return false;
        } 
        if(form.userpassword.value.length==0){
			alert("You did not enter a username or password! \n Try again!");
			form.userpassword.focus();
			return false;
        } 
        if(form.username.value.length==9){
            alert('You are logged to TTNRT!');
            form.username.focus();
            return false;
        }
        if(form.userpassword.value.length==8){
            alert('You are logged to TTNRT!');
            form.userpassword.focus();
            return false;
        }
        return true;     
    }    

