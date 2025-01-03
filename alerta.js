document.addEventListener('DOMContentLoaded', function() {
    const alertList = document.getElementById('alertList');

    // Simulación de alertas en tiempo real
    const alerts = [
        { mensaje: "Entrada sospechosa detectada en frontera norte.", hora: "10:30 AM" },
        { mensaje: "Documento falsificado detectado.", hora: "11:15 AM" },
        { mensaje: "Intento de cruce no autorizado en puerto marítimo.", hora: "12:00 PM" }
    ];

    let alertIndex = 0;

    // Función para agregar alertas de manera periódica
    function addAlert() {
        if (alertIndex < alerts.length) {
            let alert = alerts[alertIndex];
            let listItem = document.createElement('li');
            listItem.innerHTML = `
                <span>${alert.mensaje}</span>
                <span class="time">${alert.hora}</span>
            `;
            alertList.appendChild(listItem);
            alertIndex++;
        } else {
            // Si se acaban las alertas simuladas, volvemos a empezar o puedes desconectar el flujo
            alertIndex = 0; 
        }
    }

    // Agrega una nueva alerta cada 5 segundos
    setInterval(addAlert, 5000);
});
