var Bicicleta = require('../../models/bicicleta') ;

//beforeEach( () => {Bicicleta.allBicis = []; }) ;

describe('Bicicleta.allBicis', () => {
         it('Inicia Elementos:', () => {
            expect(Bicicleta.allBicis.length).toBe(3) ;
         });
}) ;

describe('Bicicleta.add', () => {
    it('Adiciona Elementos:', () => {
       expect(Bicicleta.allBicis.length).toBe(3) ;
       var d = new Bicicleta(4, 'Verde' , 'Carrera' ,[10.9785460,-74.7813260]) ;
       Bicicleta.add(d) ;
       expect(Bicicleta.allBicis.length).toBe(4) ;
       expect(Bicicleta.allBicis[3]).toEqual(d) ;
    });
}) ;

describe('Bicicleta.findById', () => {
    it('Buscar por Id:', () => {
      var d = Bicicleta.findById(2) ;
      expect(d.color).toEqual("blanca") ;

    });
}) ;

describe('Bicicleta.removeById', () => {
    it('Borrar por Id:', () => {
      d = Bicicleta.allBicis.length
      Bicicleta.removeById(2) ;
      e = Bicicleta.allBicis.length
      expect(d).not.toEqual(e) ;

    });
}) ;
