let map = L.map('map').setView([51.2194, 4.4025], 11);

  
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

 
  L.marker([51.284709, 4.442854]).addTo(map)
      .bindPopup('Nicholas Kuppens<br>Student AP Hogeschool')
      .openPopup();