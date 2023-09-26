$(document).ready(function(){

    $('#formularioUbicacion').validate({

        rules:{
            nombre:{
                required:true
            },
            posicionX:{
                required:true,
                number:true,
                max:2,
                min:1
            },
            posicionY:{
                required:true,
                number:true,
                max:2,
                min:1
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

