'use strict';

// Inventario de la demo: mismas tecnologías que package.json y requirements.txt.
const INVENTORY = [
  { name: 'TRENDnet TEW-657BRM', version: '1.00.1', type: 'Router (firmware)' },
  { name: 'D-Link DIR-600L', version: '2.17', type: 'Router (firmware)' },
  { name: 'sigoden dufs', version: '0.1', type: 'Servidor de archivos' },
  { name: 'izhaorui Zr.Admin.NET', version: 'e6ceaf47548f1a485f3ba3f4c139905e90fee0a2', type: 'Framework de administración (.NET)' }
];

function renderInventory() {
  const body = document.getElementById('inventory-body');
  if (!body) return;

  for (const item of INVENTORY) {
    const row = document.createElement('tr');
    for (const value of [item.name, item.version, item.type]) {
      const cell = document.createElement('td');
      cell.textContent = value; // textContent: sin inyección de HTML
      row.appendChild(cell);
    }
    body.appendChild(row);
  }
}

document.addEventListener('DOMContentLoaded', renderInventory);
