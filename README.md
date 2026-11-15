# SoSafety · Landing demo

Landing estática de SoSafety, pensada como **repositorio de ejemplo** para demostrar el escaneo de tecnologías desde un repositorio.

## Tecnologías declaradas

Están en `package.json` (sección `dependencies`) y en `requirements.txt`:

| Tecnología | Versión |
| --- | --- |
| TRENDnet TEW-657BRM | 1.00.1 |
| D-Link DIR-600L | 2.17 |
| sigoden dufs | 0.1 |
| izhaorui Zr.Admin.NET | e6ceaf47548f1a485f3ba3f4c139905e90fee0a2 |

> Son tecnologías de demostración: no son paquetes npm/pip instalables, así que **no ejecutes `npm install` ni `pip install -r requirements.txt`**. El sitio no necesita dependencias.

## Ejecutar

Abrí `index.html` en el navegador, o levantá un servidor local:

```bash
npm start          # usa npx serve en http://localhost:8080
# o
python -m http.server 8080
```

## Estructura

```
├── index.html        # Landing
├── styles.css        # Estilos
├── script.js         # Renderiza la tabla de inventario
├── assets/shield.svg # Logo
├── package.json      # Dependencias a escanear
└── requirements.txt  # Dependencias a escanear (formato alternativo)
```

## Seguridad

- Sin scripts ni estilos de terceros.
- Content-Security-Policy restrictiva (`default-src 'self'`).
- El inventario se inserta con `textContent` (sin `innerHTML`).
