function HideRegister() {
    document.getElementById('Register').style.display = 'none';
    document.getElementById('Login').style.display = 'block';
    document.getElementById('LoginButton').style.display = 'none';
    document.getElementById('RegisterButton').style.display = 'block';
    document.getElementById('LoginInnhold').style.display = 'flex';
    document.getElementById('RegisterInnhold').style.display = 'none';
    document.getElementById('Top2').style.display = 'none';
    
    
    
}

function HideLogin() {

    document.getElementById('Login').style.display = 'none';
    document.getElementById('Register').style.display = 'block';
    document.getElementById('RegisterButton').style.display = 'none';
    document.getElementById('LoginButton').style.display = 'flex';
    document.getElementById('LoginInnhold').style.display = 'none';
    document.getElementById('RegisterInnhold').style.display = 'flex';
    document.getElementById('Top2').style.display = 'flex';
}