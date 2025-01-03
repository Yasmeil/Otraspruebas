document.addEventListener('DOMContentLoaded', function() {
    const visaTable = document.getElementById('visaTable');
    const documentHistory = document.getElementById('documentHistory');
    const uploadForm = document.getElementById('uploadForm');

    // Simulación de datos de visas
    const visas = [
        { nombre: "Carlos Perez", pais: "México", tipoVisa: "Turismo", expiracion: "2024-12-10", estado: "Válida" },
        { nombre: "Sara Gómez", pais: "Colombia", tipoVisa: "Trabajo", expiracion: "2025-06-20", estado: "Válida" },
        { nombre: "John Smith", pais: "EE.UU.", tipoVisa: "Residencia", expiracion: "2023-11-05", estado: "Expirada" }
    ];

    // Cargar datos de visa en la tabla
    function loadVisaData() {
        visaTable.innerHTML = '';
        visas.forEach(visa => {
            let row = document.createElement('tr');
            row.innerHTML = `
                <td>${visa.nombre}</td>
                <td>${visa.pais}</td>
                <td>${visa.tipoVisa}</td>
                <td>${visa.expiracion}</td>
                <td>${visa.estado}</td>
            `;
            visaTable.appendChild(row);
        });
    }

    // Historial de documentos subidos
    const uploadedDocuments = [];

    // Manejo del formulario de subida de documentos
    uploadForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const documentType = document.getElementById('documentType').value;
        const fileInput = document.getElementById('uploadFile');
        const fileName = fileInput.files[0].name;

        // Añadir documento al historial
        uploadedDocuments.push({ tipo: documentType, nombre: fileName, fecha: new Date().toLocaleDateString() });
        updateDocumentHistory();

        // Limpiar el formulario
        uploadForm.reset();
    });

    // Actualizar historial de documentos
    function updateDocumentHistory() {
        documentHistory.innerHTML = '';
        uploadedDocuments.forEach(doc => {
            let listItem = document.createElement('li');
            listItem.textContent = `${doc.tipo}: ${doc.nombre} (Subido el ${doc.fecha})`;
            documentHistory.appendChild(listItem);
        });
    }

    // Inicializar con datos de visa cargados
    loadVisaData();
});
