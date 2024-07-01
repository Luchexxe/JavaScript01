//Lista Usuarios
const Users = [
    { username: 'lreyes', password: 'passw' },
    { username: 'admin01', password: 'passw' },
    { username: 'supervisor', password: 'passw' }
];

///////////////////////////////////////

// Limpieza Formulario
const clearForm = () => 
    {
    resetForm();
    document.getElementById('form_Login').reset();
    };

// Limpieza Estilos
const resetForm = () => 
    {
    const entradas = document.querySelectorAll('input');

   entradas.forEach(input => 
        {
        input.classList.remove('is-invalid');
        });
    const general= document.getElementById('alertMessage');
    const user = document.getElementById('userErrMes');
    const pass = document.getElementById('passErrMes');

    general.classList.remove('show', 'alert-warning', 'alert-danger', 'alert-success');
    user.classList.remove('show', 'alert-warning', 'alert-danger', 'alert-success');
    pass.classList.remove('show', 'alert-warning', 'alert-danger', 'alert-success');
    };
/////////////////////////////////////////////

// Valiaciones formulario
const valForm = (event) => 
    {
    event.preventDefault(); 
    resetForm();

    const userInput = document.getElementById('username');
    const username = userInput.value.trim();

    const pwdInput = document.getElementById('password');   
    const password = pwdInput.value.trim();

    if (username === '' && password === '') 
        {
        AlertGeneral('Ingrese usuario y contraseña', 'alert-danger');
        return;
        }
  
    if (username === '') 
        {
        AlertUsurio('Ingrese usuario', 'alert-danger');
        return;
        }

    if (password === '') 
        {
        AlertPass('Ingrese contraseña', 'alert-danger');
        return;
        }

   
    
     const UserAuth = Users.find(user => user.username === username && user.password === password);

    if (UserAuth) 
        {
        Alertsuccess(`Sesión iniciada para ${UserAuth.username}.`, 'alert-success');
        } 
    else{
        AlertGeneral('Credenciales incorrectas', 'alert-danger');
        return;
        }
};

////////////////////////////////////////////////

//Alertas

const Alertsuccess = (message, alertType) => {
    const alertMessage = document.getElementById('alertMessage');
    const alertText = document.getElementById('alertText');

    alertText.textContent = message;
    alertMessage.classList.add('show', alertType);
   
};


const AlertGeneral = (message, alertType) => {
    const alertMessage = document.getElementById('alertMessage');
    const alertText = document.getElementById('alertText');
    const alertboxuser = document.getElementById('username');
    const alertboxpwd = document.getElementById('password');
    alertboxuser.classList.add('is-invalid');
    alertboxpwd.classList.add('is-invalid');
    alertText.textContent = message;
    alertMessage.classList.add('show', alertType);
   
};

const AlertUsurio = (message, alertType) => {
    const alertMessage = document.getElementById('userErrMes');
    const alertText = document.getElementById('userErrText');
    const alertbox = document.getElementById('username');
    alertbox.classList.add('is-invalid');
    alertText.textContent = message;
    alertMessage.classList.add('show', alertType);
};

const AlertPass = (message, alertType) => {
    const alertMessage = document.getElementById('passErrMes');
    const alertText = document.getElementById('passErrText');
    const alertbox = document.getElementById('password');
    alertbox.classList.add('is-invalid');
    alertText.textContent = message;
    alertMessage.classList.add('show', alertType);
  
};

/////////////////////////////////////////////////

//Eventos
document.getElementById('form_Login').addEventListener('submit', valForm);
document.getElementById('btnLimpiar').addEventListener('click', clearForm);
