export interface CasoPrueba {
  panelAncho: number;
  panelAlto: number;
  techoAncho: number;
  techoAlto: number;
  esperado: number;
}

export interface CasoPruebaTriangulo {
  panelAncho: number;
  panelAlto: number;
  trianguloBase: number;
  trianguloAltura: number;
  esperado: number;
}

export interface DatosPrueba {
  casosPrueba: CasoPrueba[];
  casosPruebaTriangulo?: CasoPruebaTriangulo[];
}

export interface ResultadoPrueba {
  numeroPrueba: number;
  panel: { ancho: number; alto: number };
  techo: { ancho: number; alto: number };
  esperado: number;
  resultado: number;
  paso: boolean;
}

export interface ResultadoPruebaTriangulo {
  numeroPrueba: number;
  panel: { ancho: number; alto: number };
  triangulo: { base: number; altura: number };
  esperado: number;
  resultado: number;
  paso: boolean;
}
