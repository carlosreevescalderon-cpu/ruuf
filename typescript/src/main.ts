import * as fs from 'fs';
import * as path from 'path';
import { CasoPrueba, DatosPrueba, ResultadoPrueba, CasoPruebaTriangulo, ResultadoPruebaTriangulo } from './types';
import { calcularPaneles, calcularPanelesTriangulo } from './calculator';

function principal(): void {
  console.log('\n==========================================================');
  console.log('       RUUF Solar - Calculadora de Paneles Solares        ');
  console.log('==========================================================');

  console.log('\n[TECHO RECTANGULAR]');
  const resultadosRectangulo = ejecutarPruebasRectangulo();

  console.log('\n[BONUS: TECHO TRIANGULAR ISOSCELES]');
  const resultadosTriangulo = ejecutarPruebasTriangulo();

  imprimirResumen(resultadosRectangulo, resultadosTriangulo);
}

function ejecutarPruebasRectangulo(): ResultadoPrueba[] {
  const rutaArchivo = path.join(__dirname, '..', 'casos_prueba.json');
  const datos: DatosPrueba = JSON.parse(fs.readFileSync(rutaArchivo, 'utf-8'));
  const casosPrueba = datos.casosPrueba;

  console.log('Ejecutando casos de prueba:');
  console.log('-----------------------------------------------------------');

  const resultados: ResultadoPrueba[] = casosPrueba.map((caso: CasoPrueba, indice: number) => {
    const resultado = calcularPaneles(caso.panelAncho, caso.panelAlto, caso.techoAncho, caso.techoAlto);
    const paso = resultado === caso.esperado;

    const resultadoPrueba: ResultadoPrueba = {
      numeroPrueba: indice + 1,
      panel: { ancho: caso.panelAncho, alto: caso.panelAlto },
      techo: { ancho: caso.techoAncho, alto: caso.techoAlto },
      esperado: caso.esperado,
      resultado: resultado,
      paso: paso,
    };

    imprimirResultadoRectangulo(resultadoPrueba);
    return resultadoPrueba;
  });

  return resultados;
}

function ejecutarPruebasTriangulo(): ResultadoPruebaTriangulo[] {
  const rutaArchivo = path.join(__dirname, '..', 'casos_prueba.json');
  const datos: DatosPrueba = JSON.parse(fs.readFileSync(rutaArchivo, 'utf-8'));
  const casosPrueba = datos.casosPruebaTriangulo || [];

  if (casosPrueba.length === 0) {
    console.log('No hay casos de prueba para techo triangular.');
    return [];
  }

  console.log('Ejecutando casos de prueba:');
  console.log('-----------------------------------------------------------');

  const resultados: ResultadoPruebaTriangulo[] = casosPrueba.map((caso: CasoPruebaTriangulo, indice: number) => {
    const resultado = calcularPanelesTriangulo(caso.panelAncho, caso.panelAlto, caso.trianguloBase, caso.trianguloAltura);
    const paso = resultado === caso.esperado;

    const resultadoPrueba: ResultadoPruebaTriangulo = {
      numeroPrueba: indice + 1,
      panel: { ancho: caso.panelAncho, alto: caso.panelAlto },
      triangulo: { base: caso.trianguloBase, altura: caso.trianguloAltura },
      esperado: caso.esperado,
      resultado: resultado,
      paso: paso,
    };

    imprimirResultadoTriangulo(resultadoPrueba);
    return resultadoPrueba;
  });

  return resultados;
}

function imprimirResultadoRectangulo(prueba: ResultadoPrueba): void {
  const estado = prueba.paso ? 'PASO' : 'FALLO';

  console.log(`\nPrueba ${prueba.numeroPrueba}:`);
  console.log(`  Panel:    ${prueba.panel.ancho} x ${prueba.panel.alto}`);
  console.log(`  Techo:    ${prueba.techo.ancho} x ${prueba.techo.alto}`);
  console.log(`  Esperado: ${prueba.esperado} paneles`);
  console.log(`  Obtenido: ${prueba.resultado} paneles`);
  console.log(`  Estado:   ${estado}`);
}

function imprimirResultadoTriangulo(prueba: ResultadoPruebaTriangulo): void {
  const estado = prueba.paso ? 'PASO' : 'FALLO';

  console.log(`\nPrueba ${prueba.numeroPrueba}:`);
  console.log(`  Panel:     ${prueba.panel.ancho} x ${prueba.panel.alto}`);
  console.log(`  Triangulo: base=${prueba.triangulo.base}, altura=${prueba.triangulo.altura}`);
  console.log(`  Esperado:  ${prueba.esperado} paneles`);
  console.log(`  Obtenido:  ${prueba.resultado} paneles`);
  console.log(`  Estado:    ${estado}`);
}

function imprimirResumen(resultadosRect: ResultadoPrueba[], resultadosTri: ResultadoPruebaTriangulo[]): void {
  const rectPasaron = resultadosRect.filter((r) => r.paso).length;
  const triPasaron = resultadosTri.filter((r) => r.paso).length;
  const totalPasaron = rectPasaron + triPasaron;
  const total = resultadosRect.length + resultadosTri.length;
  const todosPasaron = totalPasaron === total;

  console.log('\n===========================================================');
  console.log('RESUMEN DE RESULTADOS');
  console.log('-----------------------------------------------------------');
  console.log(`  Techo rectangular: ${rectPasaron}/${resultadosRect.length} pruebas`);
  console.log(`  Techo triangular:  ${triPasaron}/${resultadosTri.length} pruebas`);
  console.log(`  Total:             ${totalPasaron}/${total} (${((totalPasaron / total) * 100).toFixed(1)}%)`);
  console.log('-----------------------------------------------------------');

  if (todosPasaron) {
    console.log('Todas las pruebas pasaron exitosamente!');
  } else {
    console.log('Algunas pruebas fallaron. Revisa la implementacion.');
  }

  console.log('===========================================================\n');
}

principal();
