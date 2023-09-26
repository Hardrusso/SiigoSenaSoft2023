$(document).ready(function(){

    $('#formularioUbicacion').validate({

        rules:{
            nombre:{
                required:true
            },
            posicionY:{
                required:true,
                number:true,
                max:2,
                min:1
            },
            posicionX:{
                required:true,
                number:true,
                max:2,
                min:1
            },
            peso:{
                required:true,
                number:true
            },
            conexion:{
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
            peso:{
                required:"define el peso",
                Number:"Este campo es numerico"
            },
            conexion:{
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