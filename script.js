const map = L.map('map').setView([53.3900, -3.0148], 9);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

L.circle([53.3900, -3.0148], {
    color: '#FFFF00',
    fillColor: '#FFFF00',
    fillOpacity: 0.15,
    radius: 15000
}).addTo(map);