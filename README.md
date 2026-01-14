# RUUF Solar - Desafio Tecnico: Cuantos paneles caben?

Solucion al desafio tecnico de RUUF Solar para la posicion de Junior Software Developer.

## Objetivo

El objetivo de este ejercicio es demostrar habilidades como programador/a, la forma de plantear un problema, como resolverlo y comunicar el razonamiento y resultados.

## Problema

Encontrar la maxima cantidad de rectangulos (paneles solares) de dimensiones `A × B` que caben dentro de un rectangulo (techo) de dimensiones `X × Y`.

## Solucion en TypeScript

```bash
cd typescript
npm install
npm start
```

## Casos de Prueba

| Panel | Techo | Resultado |
|-------|-------|-----------|
| 1×2   | 2×4   | 4         |
| 1×2   | 3×5   | 7         |
| 2×2   | 1×10  | 0         |

## Tu Solucion

[Link al video explicando la solucion]

## Enfoque del Algoritmo

El algoritmo considera que los paneles pueden colocarse en dos orientaciones:
- Horizontal: mantiene orientacion original (A × B)
- Vertical: rotado 90 grados (B × A)

Para maximizar la cantidad de paneles, se exploran todas las combinaciones posibles de dividir el techo en secciones con diferentes orientaciones.

## Bonus: Techo Triangular Isosceles

Implemente la extension para techos triangulares isosceles. El algoritmo calcula el ancho disponible en cada fila del triangulo (que disminuye linealmente hacia el vertice) y determina cuantos paneles caben en cada nivel.

Casos de prueba triangulares:
| Panel | Triangulo (base x altura) | Resultado |
|-------|---------------------------|----------|
| 1×1   | 6×4                       | 8        |
| 2×1   | 10×5                      | 9        |
| 3×3   | 4×6                       | 0        |

## Supuestos y Decisiones

1. Los paneles no se superponen: cada panel ocupa un espacio unico en el techo
2. No hay espaciado entre paneles: los paneles pueden estar adyacentes sin separacion
3. Solo se permiten rotaciones de 90 grados: los paneles pueden estar horizontales o verticales
4. Dimensiones enteras: se trabaja con numeros enteros para las dimensiones

## Autor

Carlos
