export function calcularPaneles(
  anchoPanel: number,
  altoPanel: number,
  anchoTecho: number,
  altoTecho: number
): number {
  if (anchoPanel <= 0 || altoPanel <= 0 || anchoTecho <= 0 || altoTecho <= 0) {
    return 0;
  }

  if (anchoPanel === altoPanel) {
    return Math.floor(anchoTecho / anchoPanel) * Math.floor(altoTecho / altoPanel);
  }

  return calcularMaximoPaneles(anchoPanel, altoPanel, anchoTecho, altoTecho);
}

export function calcularPanelesTriangulo(
  anchoPanel: number,
  altoPanel: number,
  baseTriangulo: number,
  alturaTriangulo: number
): number {
  if (anchoPanel <= 0 || altoPanel <= 0 || baseTriangulo <= 0 || alturaTriangulo <= 0) {
    return 0;
  }

  const horizontal = calcularPanelesEnTriangulo(anchoPanel, altoPanel, baseTriangulo, alturaTriangulo);
  const vertical = calcularPanelesEnTriangulo(altoPanel, anchoPanel, baseTriangulo, alturaTriangulo);

  return Math.max(horizontal, vertical);
}

function calcularPanelesEnTriangulo(
  anchoP: number,
  altoP: number,
  base: number,
  altura: number
): number {
  let totalPaneles = 0;
  const numFilas = Math.floor(altura / altoP);

  for (let fila = 0; fila < numFilas; fila++) {
    const yInferior = fila * altoP;
    const ySuperior = (fila + 1) * altoP;
    const anchoEnInferior = base * (1 - yInferior / altura);
    const anchoEnSuperior = base * (1 - ySuperior / altura);
    const anchoDisponible = Math.min(anchoEnInferior, anchoEnSuperior);

    const panelesEnFila = Math.floor(anchoDisponible / anchoP);
    totalPaneles += panelesEnFila;
  }

  return totalPaneles;
}

function calcularMaximoPaneles(anchoP: number, altoP: number, anchoT: number, altoT: number): number {
  let maxPaneles = 0;

  const soloHorizontal = contarPaneles(anchoP, altoP, anchoT, altoT);
  maxPaneles = Math.max(maxPaneles, soloHorizontal);

  const soloVertical = contarPaneles(altoP, anchoP, anchoT, altoT);
  maxPaneles = Math.max(maxPaneles, soloVertical);

  for (let divisionY = 0; divisionY <= altoT; divisionY++) {
    const combinacion1 = contarPaneles(anchoP, altoP, anchoT, divisionY) + contarPaneles(altoP, anchoP, anchoT, altoT - divisionY);
    maxPaneles = Math.max(maxPaneles, combinacion1);

    const combinacion2 = contarPaneles(altoP, anchoP, anchoT, divisionY) + contarPaneles(anchoP, altoP, anchoT, altoT - divisionY);
    maxPaneles = Math.max(maxPaneles, combinacion2);
  }

  for (let divisionX = 0; divisionX <= anchoT; divisionX++) {
    const combinacion3 = contarPaneles(anchoP, altoP, divisionX, altoT) + contarPaneles(altoP, anchoP, anchoT - divisionX, altoT);
    maxPaneles = Math.max(maxPaneles, combinacion3);

    const combinacion4 = contarPaneles(altoP, anchoP, divisionX, altoT) + contarPaneles(anchoP, altoP, anchoT - divisionX, altoT);
    maxPaneles = Math.max(maxPaneles, combinacion4);
  }

  return maxPaneles;
}

function contarPaneles(anchoPanel: number, altoPanel: number, anchoArea: number, altoArea: number): number {
  if (anchoPanel <= 0 || altoPanel <= 0 || anchoArea <= 0 || altoArea <= 0) {
    return 0;
  }
  return Math.floor(anchoArea / anchoPanel) * Math.floor(altoArea / altoPanel);
}
