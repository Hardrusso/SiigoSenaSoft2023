//se recibe y valida el archivo JSON que se cargo en el formulario
document.getElementById('loadButton').addEventListener('click', function () {
    const fileInput = document.getElementById('fileInput');
    // Verifica si se seleccionó un archivo
    if (fileInput.files.length === 0) {
        alert('Por favor, seleccione un archivo JSON.');
        return;
    }
    const selectedFile = fileInput.files[0];
    // Verifica si el archivo seleccionado es un archivo JSON
    if (selectedFile.type !== 'application/json') {
        alert('El archivo seleccionado no es un archivo JSON válido.');
        return;
    }
    const reader = new FileReader();
    reader.onload = function (event) {
        try {
        const datosJSON = JSON.parse(event.target.result);
        
        const jsonString = JSON.stringify(datosJSON);
        localStorage.setItem('datos', jsonString);
        } catch (error) {
        alert('Error al analizar el archivo JSON.');
        }
    };
    reader.readAsText(selectedFile);
    });