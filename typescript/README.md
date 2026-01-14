# RUUF Solar - Calculadora de Paneles Solares

Solucion al desafio tecnico de RUUF Solar para calcular la cantidad maxima de paneles solares que caben en un techo rectangular.

## Problema

Dado un techo rectangular de dimensiones `X × Y` y paneles solares de dimensiones `A × B`, encontrar la maxima cantidad de paneles que pueden colocarse sin superposicion ni exceder los limites del techo.

## Enfoque de Solucion

El algoritmo considera que los paneles pueden colocarse en dos orientaciones:
- Horizontal: el panel mantiene su orientacion original (A × B)
- Vertical: el panel se rota 90 grados (B × A)

Para encontrar el maximo, el algoritmo:

1. Calcula la opcion simple: todos los paneles en una sola orientacion
2. Explora combinaciones: divide el techo en secciones (horizontal y verticalmente) y prueba diferentes combinaciones de orientaciones en cada seccion
3. Selecciona el maximo: retorna la configuracion que permite colocar mas paneles

### Complejidad
- Tiempo: O(max(W, H)) donde W y H son las dimensiones del techo
- Espacio: O(1)

## Como Ejecutar

### Prerrequisitos
- Node.js (v18+)
- npm

### Instalacion

```bash
cd typescript
npm install
```

### Ejecucion

```bash
npm start
```

## Casos de Prueba - Techo Rectangular

| Panel | Techo | Esperado | Explicacion |
|-------|-------|----------|-------------|
| 1×2   | 2×4   | 4        | 2 columnas × 2 filas de paneles |
| 1×2   | 3×5   | 7        | Combinacion optima de orientaciones |
| 2×2   | 1×10  | 0        | Panel mas ancho que el techo |

## Bonus: Techo Triangular Isosceles

El algoritmo para triangulos calcula iterativamente cuantos paneles caben en cada fila, considerando que el ancho disponible disminuye linealmente hacia el vertice.

| Panel | Triangulo (base x altura) | Esperado |
|-------|---------------------------|----------|
| 1×1   | 6×4                       | 8        |
| 2×1   | 10×5                      | 9        |
| 3×3   | 4×6                       | 0        |

## Estructura del Proyecto

```
typescript/
├── src/
│   ├── main.ts        # Punto de entrada
│   ├── calculator.ts  # Logica de calculo
│   └── types.ts       # Definiciones de tipos
├── test_cases.json
├── package.json
├── tsconfig.json
└── README.md
```

## Decisiones de Diseno

1. Separacion de responsabilidades: el codigo esta dividido en modulos con responsabilidades claras
2. Tipado estricto: se utilizan interfaces TypeScript para garantizar type safety
3. Validacion de entrada: el algoritmo valida que las dimensiones sean positivas

## Autor

Carlos
