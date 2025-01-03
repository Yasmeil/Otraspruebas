// Simulación de datos de migración en tiempo real
document.addEventListener('DOMContentLoaded', function() {
    let entries = 350;
    let exits = 200;
    let alerts = 5;

    const entryElement = document.getElementById('entries');
    const exitElement = document.getElementById('exits');
    const alertElement = document.getElementById('alerts');

    function updateStats() {
        // Simula un cambio en los datos
        entries += Math.floor(Math.random() * 10);
        exits += Math.floor(Math.random() * 5);
        alerts = Math.max(0, alerts + Math.floor(Math.random() * 2 - 1)); // Mantiene alertas entre 0 y 10

        // Actualiza la interfaz
        entryElement.textContent = entries;
        exitElement.textContent = exits;
        alertElement.textContent = alerts;
    }

    // Actualiza los datos cada 5 segundos
    setInterval(updateStats, 5000);

    // Configurar el mapa utilizando Leaflet.js
    const map = L.map('map').setView([20.0, 0.0], 2); // Coordenadas del mundo

    // Capa de mapa base de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Función para añadir marcadores de ubicación
    function addMarker(lat, lon, type) {
        let markerColor = type === 'entry' ? 'green' : 'red'; // Diferenciar entre entrada y salida
        let marker = L.circleMarker([lat, lon], {
            color: markerColor,
            radius: 8
        }).addTo(map);

        marker.bindPopup(`<b>${type === 'entry' ? 'Entrada' : 'Salida'}</b><br>Lat: ${lat}, Lon: ${lon}`).openPopup();
    }

    // Añadir algunas ubicaciones de ejemplo
    addMarker(40.7128, -74.0060, 'entry'); // Nueva York
    addMarker(34.0522, -118.2437, 'exit'); // Los Ángeles
    addMarker(51.5074, -0.1278, 'entry'); // Londres
    addMarker(-33.8688, 151.2093, 'exit'); // Sídney

    // Simulación de nuevas entradas/salidas en el mapa
    setInterval(() => {
        const lat = (Math.random() * 180) - 90;
        const lon = (Math.random() * 360) - 180;
        const type = Math.random() > 0.5 ? 'entry' : 'exit';
        addMarker(lat, lon, type);
    }, 5000);
});
