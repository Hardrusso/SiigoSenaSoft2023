//validacion de los formulario para registrar una pocision
$(document).ready(function(){
    $('#formularioUbicacion').validate({
        rules:{
            nombre:{
                required:true
            },
            posicionX:{
                required:true,
                number:true,
                minlength:1,
                maxlength:3
            },
            posicionY:{
                required:true,
                number:true,
                minlength:1,
                maxlength:3
            },
            peso:{
                required:true,
                number:true
            },
            Nconexiones:{
                required:true
            },
            conexion1:{
                required:true,
            },
            conexion2:{
                required:true,
            },
            conexion3:{
                required:true,
            },
            conexion4:{
                required:true
            },
            peso1:{
                required:true,
                number:true
            },
            peso2:{
                required:true,
                number:true
            },
            peso3:{
                required:true,
                number:true
            },
            peso4:{
                required:true,
                number:true
            }
        },
        messages:{
            nombre:{
                required:"El nombre debe ir definido"
            },
            posicionX:{
                required:"Define una pocision",
                number:"Este campo es numerico",
                max:"maximo 3 caracteres",
                min:"define un valor"
            },
            posicionY:{
                required:"Define una pocision",
                number:"Este campo es numerico",
                max:"maximo 3 caracteres",
                min:"define un valor"
            },
            peso1:{
                required:"define el peso",
                Number:"Este campo es numerico"
            },
            peso2:{
                required:"define el peso",
                Number:"Este campo es numerico"
            },
            peso3:{
                required:"define el peso",
                Number:"Este campo es numerico"
            },
            peso4:{
                required:"define el peso",
                Number:"Este campo es numerico"
            },
            Nconexiones:{
                required:"selecciona una opcion"
            },
            conexion1:{
                required:"Define una ruta"
            },
            conexion2:{
                required:"Define una ruta"
            },
            conexion3:{
                required:"Define una ruta"
            },
            conexion4:{
                required:"Define una ruta"
            }
        } 
    });

});

$('#registrarse').click(function (event) {
    event.preventDefault(); 

    var recolec = $('#formularioRegister').serialize();

    $.ajax({
    url: '/config/registrar_user.php', 
    type: 'POST',
    data: recolec,
    success: function (vs) {
        if(vs == 1){
            $("#formularioRegister").trigger("reset");
            alertify.success(`<p class="text-white font-medium">Usuario Registrado Correctamente</p>`);
        }else if (vs == 2){
            alertify.error(`<p class="text-white font-medium">Todos los campos son requeridos</p>`);
        }else if (vs == 3){
            alertify.error(`<p class="text-white font-medium">Error al registrar el usuario!!</p>`);
        }else if (vs == "correoExiste"){
            alertify.error(`<p class="text-white font-medium">Este correo ya esta regitrado</p>`);
        }else if (vs == "correoInvalido"){
            alertify.error(`<p class="text-white font-medium">Digita un correo valido</p>`);
        }
    }
    });
});


$('#loginBtn').click(function (event) {
    event.preventDefault(); 

    var recolec = $('#formulariologin').serialize();

    $.ajax({
    url: '/config/login.php', 
    type: 'POST',
    data: recolec,
    success: function (vs) {
        if(vs == 1){
            $(location).attr('href','/index.php');
            alertify.success(`<p class="text-white font-medium">Bienvenido!</p>`);
        }else if (vs == 3){
            alertify.error(`<p class="text-white font-medium">Todos los campos son requeridos</p>`);
        }else if (vs == 2){
            alertify.error(`<p class="text-white font-medium">Usuario o Contraseña incorrectos!!</p>`);
        }else if (vs == "logeado"){
            alertify.error(`<p class="text-white font-medium">Ya tienes una sesion Iniciada</p>`);
        }
    }
    });
});


