'use strict';

// Inventario de la demo: mismas tecnologías que package.json y requirements.txt.
const INVENTORY = [
  { name: 'Linux Foundation Magma', version: '1.0', type: 'Plataforma de red móvil (core)' },
  { name: 'Unknown WPGraphQL', version: '0', type: 'Plugin de WordPress (API GraphQL)' },
  { name: 'Apache Software Foundation Apache Shiro', version: '0', type: 'Framework de seguridad (Java)' }
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
