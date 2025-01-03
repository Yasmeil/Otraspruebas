document.addEventListener('DOMContentLoaded', function () {
    // Gráfico de entradas y salidas
    const entryExitCtx = document.getElementById('entryExitChart').getContext('2d');
    const entryExitChart = new Chart(entryExitCtx, {
        type: 'line',
        data: {
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
            datasets: [{
                label: 'Entradas',
                data: [1200, 1500, 1300, 1700, 1600, 1900, 1800],
                borderColor: '#1abc9c',
                fill: false,
                tension: 0.1
            }, {
                label: 'Salidas',
                data: [1000, 1400, 1200, 1600, 1500, 1800, 1700],
                borderColor: '#e74c3c',
                fill: false,
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Estadísticas de Entradas y Salidas'
                }
            }
        }
    });

    // Gráfico de documentos rechazados vs aceptados
    const docStatusCtx = document.getElementById('docStatusChart').getContext('2d');
    const docStatusChart = new Chart(docStatusCtx, {
        type: 'pie',
        data: {
            labels: ['Aceptados', 'Rechazados'],
            datasets: [{
                label: 'Documentos',
                data: [75, 25],
                backgroundColor: ['#3498db', '#e74c3c']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Documentos Rechazados vs Aceptados'
                }
            }
        }
    });
});
