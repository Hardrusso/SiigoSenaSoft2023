
        // Obtener el canvas y su contexto
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");

        // JSON con las ubicaciones y conexiones
        var data = {
            "ubicaciones": [
                {
                    "nombre": "A",
                    "posX": 200,
                    "posY": 200
                },
                {
                    "nombre": "B",
                    "posX": 450,
                    "posY": 300
                },
                {
                    "nombre": "C",
                    "posX": 790,
                    "posY": 450
                },
                {
                    "nombre": "D",
                    "posX": 560,
                    "posY": 395
                },
                {
                    "nombre": "E",
                    "posX": 860,
                    "posY": 95
                },
                {
                    "nombre": "F",
                    "posX": 150,
                    "posY": 420
                },
                {
                    "nombre": "G",
                    "posX": 340,
                    "posY": 160
                },
                {
                    "nombre": "H",
                    "posX": 690,
                    "posY": 370
                },
                {
                    "nombre": "I",
                    "posX": 720,
                    "posY": 150
                },
                {
                    "nombre": "J",
                    "posX": 950,
                    "posY": 400
                },
                {
                    "nombre": "K",
                    "posX": 300,
                    "posY": 50
                },
                {
                    "nombre": "L",
                    "posX": 250,
                    "posY": 390
                },
                {
                    "nombre": "M",
                    "posX": 480,
                    "posY": 280
                },
                {
                    "nombre": "N",
                    "posX": 840,
                    "posY": 240
                },
                {
                    "nombre": "O",
                    "posX": 670,
                    "posY": 100
                },
                {
                    "nombre": "P",
                    "posX": 120,
                    "posY": 290
                },
                {
                    "nombre": "Q",
                    "posX": 920,
                    "posY": 450
                },
                {
                    "nombre": "R",
                    "posX": 160,
                    "posY": 50
                },
                {
                    "nombre": "S",
                    "posX": 430,
                    "posY": 350
                },
                {
                    "nombre": "T",
                    "posX": 720,
                    "posY": 250
                },
                {
                    "nombre": "U",
                    "posX": 260,
                    "posY": 90
                },
                {
                    "nombre": "V",
                    "posX": 880,
                    "posY": 350
                },
                {
                    "nombre": "W",
                    "posX": 600,
                    "posY": 40
                },
                {
                    "nombre": "X",
                    "posX": 150,
                    "posY": 170
                },
                {
                    "nombre": "Y",
                    "posX": 330,
                    "posY": 430
                },
                {
                    "nombre": "Z",
                    "posX": 980,
                    "posY": 220
                }
            ],
            "conexiones": [
                {
                    "ubicacion1": "A",
                    "ubicacion2": "B",
                    "peso": 20
                },
                {
                    "ubicacion1": "C",
                    "ubicacion2": "D",
                    "peso": 50
                },
                {
                    "ubicacion1": "A",
                    "ubicacion2": "C",
                    "peso": 70
                },
                {
                    "ubicacion1": "D",
                    "ubicacion2": "E",
                    "peso": 10
                },
                {
                    "ubicacion1": "B",
                    "ubicacion2": "E",
                    "peso": 80
                },
                {
                    "ubicacion1": "A",
                    "ubicacion2": "D",
                    "peso": 5
                },
                {
                    "ubicacion1": "F",
                    "ubicacion2": "G",
                    "peso": 30
                },
                {
                    "ubicacion1": "H",
                    "ubicacion2": "I",
                    "peso": 60
                },
                {
                    "ubicacion1": "J",
                    "ubicacion2": "K",
                    "peso": 40
                },
                {
                    "ubicacion1": "L",
                    "ubicacion2": "M",
                    "peso": 25
                },
                {
                    "ubicacion1": "N",
                    "ubicacion2": "O",
                    "peso": 35
                },
                {
                    "ubicacion1": "P",
                    "ubicacion2": "Q",
                    "peso": 55
                },
                {
                    "ubicacion1": "R",
                    "ubicacion2": "S",
                    "peso": 15
                },
                {
                    "ubicacion1": "T",
                    "ubicacion2": "U",
                    "peso": 45
                },
                {
                    "ubicacion1": "V",
                    "ubicacion2": "W",
                    "peso": 90
                },
                {
                    "ubicacion1": "X",
                    "ubicacion2": "Y",
                    "peso": 75
                },
                {
                    "ubicacion1": "Z",
                    "ubicacion2": "A",
                    "peso": 30
                },
                {
                    "ubicacion1": "B",
                    "ubicacion2": "C",
                    "peso": 65
                },
                {
                    "ubicacion1": "D",
                    "ubicacion2": "F",
                    "peso": 50
                },
                {
                    "ubicacion1": "G",
                    "ubicacion2": "H",
                    "peso": 35
                },
                {
                    "ubicacion1": "I",
                    "ubicacion2": "K",
                    "peso": 80
                },
                {
                    "ubicacion1": "J",
                    "ubicacion2": "L",
                    "peso": 20
                },
                {
                    "ubicacion1": "M",
                    "ubicacion2": "O",
                    "peso": 30
                },
                {
                    "ubicacion1": "P",
                    "ubicacion2": "R",
                    "peso": 45
                },
                {
                    "ubicacion1": "S",
                    "ubicacion2": "U",
                    "peso": 70
                },
                {
                    "ubicacion1": "V",
                    "ubicacion2": "X",
                    "peso": 15
                },
                {
                    "ubicacion1": "Y",
                    "ubicacion2": "Z",
                    "peso": 25
                }
            ],
            "inicio": "A"
        }
        

        // Dibujar las ubicaciones en el canvas
        data.ubicaciones.forEach(function(ubicacion) {
            ctx.beginPath();
            ctx.arc(ubicacion.posX, ubicacion.posY, 5, 0, 2 * Math.PI);
            ctx.fillStyle = "blue";
            ctx.fill();
            ctx.font = "12px Arial";
            ctx.fillText(ubicacion.nombre, ubicacion.posX + 10, ubicacion.posY - 10);
        });

        // Dibujar las conexiones en el canvas
        ctx.strokeStyle = "green";
        ctx.lineWidth = 2;
        data.conexiones.forEach(function(conexion) {
            var ubicacion1 = data.ubicaciones.find(function(ubicacion) {
                return ubicacion.nombre === conexion.ubicacion1;
            });
            var ubicacion2 = data.ubicaciones.find(function(ubicacion) {
                return ubicacion.nombre === conexion.ubicacion2;
            });
            ctx.beginPath();
            ctx.moveTo(ubicacion1.posX, ubicacion1.posY);
            ctx.lineTo(ubicacion2.posX, ubicacion2.posY);
            ctx.stroke();
            ctx.fillStyle = "black";
            ctx.fillText(conexion.peso, (ubicacion1.posX + ubicacion2.posX) / 2, (ubicacion1.posY + ubicacion2.posY) / 2);
        });

