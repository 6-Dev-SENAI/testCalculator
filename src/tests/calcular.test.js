const mult = require("../utils/calculadora.js").mult;

const division = require("../utils/calculadora.js").division;

const somar = require("../utils/calculadora.js").somar;
const sub = require("../utils/calculadora.js").sub;

describe("#Calculadora", () => {
   describe("@Adição", () => {
       const numPositivo = 1
       const numNegativo = -7
       const zero = 0
       const numPositivoGrande = 8
       it ("Soma de dois números positivos devem resultar em um número positivo", () => {
           const resultado = somar(numPositivo, numPositivo)

           expect(resultado).toBeGreaterThanOrEqual(0)
      })

      it ("Soma de um número negativo com um número positivo, deve resultar em negativo", () => {
         const resultado = somar(numNegativo, numPositivo)

           expect(resultado).toBeLessThan(0)     })

   it ("Soma de um número negativo com um número positivo de maior valor, deve resultar em positivo", () => {
           const resultado = somar(numNegativo, numPositivoGrande)

           expect(resultado).toBeGreaterThanOrEqual(0)
       })

       it ("Soma de dois números negativos devem resultar em um número negativo", () => {
           const resultado = somar(numNegativo , numNegativo)

           expect(resultado).toBeLessThan(0)
       })

       it ("Soma de um número com zero, deve retornar ele mesmo", () => {
           const resultadoA = somar(numNegativo, zero)
           expect(resultadoA).toBe(numNegativo)

           const resultadoB = somar(numPositivo, zero)
           expect(resultadoB).toBe(numPositivo)
       })
   })

   describe("@Subtração", () => {
       const numNegativoGrande = -7
       const numNegativo1 = -2
       const numPositivo1 = 5
       const numPositivo2 = 2
       const zero = 0     
        it("A subtração de dois numeros negativos pode resultar em numero positivo, negativo, ou zero", () => {
           const resultadoA = sub(numNegativo1, numNegativoGrande)
           expect(resultadoA).toBeGreaterThanOrEqual(0)

           const resultadoB = sub(numNegativoGrande, numNegativo1)
           expect(resultadoB).toBeLessThan(0)      })       it("A subtração de um numero negativo com um positivo tende a resultar negativo", () => { //         const resultadoA = sub(numNegativo1, numPositivo1)
           expect(resultadoA).toBeLessThan(0)

       })
     it("A subtração de dois numeros positivos pode resultar em numero negativo, positivo, ou zero", () => {
           const resultadoA = sub(numPositivo2, numPositivo1)
           expect(resultadoA).toBeLessThan(0)
         const resultadoB = sub(numPositivo1, numPositivo2)
          expect(resultadoB).toBeGreaterThanOrEqual(0);
      })

      it("A subtração de um numero com zero deve retornar ele mesmo", () => {
          const resultadoA = sub(numNegativo1, zero)
          expect(resultadoA).toBe(numNegativo1)

          const resultadoB = sub(numPositivo1, zero)
          expect(resultadoB).toBe(numPositivo1)
      })
       it("A subtração de um  numero positivo com um negativo resultara em um numero positvo", () => {
           const resultadoA = sub(numPositivo1, numNegativo1)
           expect(resultadoA).toBeGreaterThan(0)
  })

  })

  describe("@Divisão", () => {
      const numPositivo = 6
      const numNegativo = -2
      const zero = 0

      it("A divisão de um numero por ele mesmo é 1", () => {
          const resultadoA = division(numPositivo, numPositivo)
          expect(resultadoA).toBe(1)
      })

  it("A divisão de um positivo por um numero positivo deve resultar em positivo", () => {
      const resultadoA = division(numPositivo, numPositivo)
      expect(resultadoA).toBeGreaterThan(0)
  })

  it("A divisão de um numero negativo por outro negativo deve resultar em positivo", () => {
      const resultadoB = division(numNegativo, numNegativo)
      expect (resultadoB).toBeGreaterThan(0)
  })

  it("A divisão de um numero positivo com um negativo resultam em negativo", () => {
      const resultadoA = division(numPositivo, numNegativo)
      expect(resultadoA).toBeLessThan(0)
  })

   it("A divisão de um numero negativo com um positivo resultam em negativo", () => {
     const resultadoA = division(numNegativo, numPositivo);
     expect(resultadoA).toBeLessThan(0);
   })

  })

  describe("@Multiplicação", () => {
    const numPositivo = 6;
    const numNegativo = -2;
    const zero = 0;

    it("A multiplicação de um numero com 0 resulta em 0", () => {
      const resultadoA = mult(numPositivo, zero);
      expect(resultadoA).toBe(0);
    });
      it("A multiplicação de um numero positivo com um negativo resulta em numero negativo", () => {
          const resultadoA = mult(numPositivo, numNegativo)
          expect(resultadoA).toBeLessThan(0)
      })
      it("A multiplicação de um numero negativo com um positivo resulta em numero negativo", () => { 
          const resultadoA = mult(numNegativo, numPositivo)
          expect(resultadoA).toBeLessThan(0)
      })

      it("A multiplicação de dois numeros negativos resulta em positivo", () => { 
          const resultadoA = mult(numNegativo, numNegativo)
          expect(resultadoA).toBeGreaterThan(0)
      })


      it("A multiplicação de dois numeros positivos resulta em positivo", () => { 
          const resultadoA = mult(numPositivo, numPositivo)
          expect(resultadoA).toBeGreaterThan(0)
      })
  });
});
