// Script Digital Clock
function updateClock() {
  var now = new Date();
  var dname = now.getDay(),
    mo = now.getMonth(),
    dnum = now.getDate(),
    yr = now.getFullYear(),
    hou = now.getHours(),
    min = now.getMinutes(),
    sec = now.getSeconds(),
    pe = 'AM';

  if (hou == 0) {
    hou = 12;
  }
  if (hou > 12) {
    hou = hou - 12;
    pe = 'PM';
  }

  Number.prototype.pad = function (digits) {
    for (var n = this.toString(); n.length < digits; n = 0 + n);
    return n;
  };

  var months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
  var week = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', "Jum'at", 'Sabtu'];
  var ids = ['dayname', 'month', 'daynum', 'year', 'hour', 'minutes', 'second', 'period'];
  var values = [week[dname], months[mo], dnum.pad(2), yr, hou.pad(2), min.pad(2), sec.pad(2), pe];
  for (var i = 0; i < ids.length; i++) document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}

function initClock() {
  updateClock();
  window.setInterval('updateClock()', 1);
}

// Script bar chart
const labels = ['Laki-laki', 'Perempuan', 'Total'];

const data = {
  labels: labels,
  datasets: [
    {
      label: 'Jumlah Penduduk',
      backgroundColor: '#2e94e3',
      borderColor: '#2e94e3',
      data: [5634, 5635, 11269],
    },
  ],
};

const config = {
  type: 'bar',
  data: data,
  options: {},
};
const myChart = new Chart(document.getElementById('myChart'), config);

// Leaflet For Map
var locations = [['Kandang Mas', -3.8617497731506907, 102.3145013393356]];

var map = L.map('map').setView([-3.8617497731506907, 102.3145013393356], 12);
mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; ' + mapLink + ' Contributors',
  maxZoom: 18,
}).addTo(map);

for (var i = 0; i < locations.length; i++) {
  marker = new L.marker([locations[i][1], locations[i][2]]).bindPopup(locations[i][0]).addTo(map);
}

const elementclose = document.getElementsByClassName('overlay');
for (let i = 0; i < elementclose.length; i++) {
  elementclose[i].addEventListener('click', function () {
    let url = window.location.href.substr(0, window.location.href.indexOf('#'));
    window.location = url;
  });
}
