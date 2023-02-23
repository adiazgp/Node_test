var mongoose = require('mongoose') ;
var Bicicleta = require('../../models/bicicleta') ;

describe('Testing Bicicleta con mongoDB',() => {

  beforeAll(() => {
   //jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
  })

  beforeEach(function () {
    var mongoDB = 'mongodb://localhost/testdb' ;
    mongoose.connect(mongoDB,{useNewUrlParser: true}) ;
    //mongoose.set('strictQuery', false);
   //jasmine.DEFAULT_TIMEOUT_INTERVAL = 80000;
   
    const db = mongoose.connection ;
    db.on('error', console.error.bind(console, 'MongoDB conection Error:')) ;
    db.once('open', function() {
       console.log('Estamos conectados al test de MongoDB') ;
      // done() ; 
    }) ;
  }) ;  
   
  afterEach(function (done){

    Bicicleta.deleteMany({},function(err, success) {
      if (err) console.log(err) ;
      done();
    }) ;  
  }) ;     

  describe('Bicicleta.createInstance',() => {
    it('Crear una Instancia Bicicleta:', () => {
      var bici  = Bicicleta.createInstance(1,"verde","urbana",[10.9795460,-74.7813260]) ;

      expect(bici.code).toBe(1) ;
      expect(bici.color).toBe("verde") ;
      expect(bici.modelo).toBe("urbana") ;
      expect(bici.ubicacion[0]).toEqual(10.9795460) ;
      expect(bici.ubicacion[1]).toEqual(-74.7813260) ;
    });
  }) ;

  describe('Bicicleta.allBicis', () => {
    it('Valida inicio en blanco:', (done) => {
      Bicicleta.allBicis(function(err,bicis){
        expect(bicis.length).toBe(0) ;
        done();
      });
    }); 
  }) ;

  describe('Bicicleta.add', () => {
    it('Agrega una Bicicleta:', (done) => {
        var aBici = new Bicicleta({code: 1, color: "verde", modelo: "urbana"}) ;
        Bicicleta.add(aBici, function(err, newBici) {
          if (err) console.log(err) ;
          Bicicleta.allBicis(function(err,bicis){
            expect(bicis.length).toEqual(1) ;
            expect(bicis[0].code).toEqual(aBici.code) ;
            done();
          });
        });
    }); 
  }) ;

}) ;    

//---------------------------------------------------------------------------------------------------------------
//describe('testeando...', () => {  beforeEach(function () { system.log('testeando…')}) ; }) ;
//beforeEach( () => {Bicicleta.allBicis = []; }) ;

/*describe('Bicicleta.allBicis', () => {
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
}) ; */