var Bicicleta = require('../../models/bicicleta') ;
var request = require('request') ;
var server = require('../../bin/www') ;

describe('Bicicleta Api', () => {
    describe('GET Bicicletas /:', () => {
        it('Status 200', (done) => {
            expect(Bicicleta.allBicis.length).toBe(3);
           
            try {
                  /* var req = request.get('http://localhost:3000/api/bicicletas', function(error, response, body){
                             console.log('RepuestaGet:',response.statusCode);
                             expect(response.statusCode).toBe(200);
                  }); */

                  var req = request.get('http://localhost:3000/api/bicicletas').on('response', function(response) {
                           //console.log(response.statusCode) ; // 200 
                             console.log('RepuestaGet:',response.statusCode);
                             console.log(response.headers['content-type']) ;// 'image/png' 
                             expect(response.statusCode).toBe(200);
                   });

                  req.on('error', function (e) {
                       // General error, i.e.
                      //  - ECONNRESET - server closed the socket unexpectedly
                      //  - ECONNREFUSED - server did not listen
                      //  - HPE_INVALID_VERSION
                      //  - HPE_INVALID_STATUS
                      //  - ... (other HPE_* codes) - server returned garbage
                     console.log(e);
                  });
            } catch (error) {
                    console.error(error);
                    // Expected output: ReferenceError: nonExistentFunction is not defined
                    // (Note: the exact output may be browser-dependent)
            }
            done() ;           

        });    
    });

    describe('POST Bicicletas /create:', () => {
        it('Status 200', (done) => {
           
            try {
                  var headers = { 'content-type' : 'application/json'} ;
                  var a = '{"id" : 5  , "color" : "rojo colonial"  , "modelo" : "custom"  , "latitud" : 11.032880 ,"longitud" : -74.869794}' ;

                  var req = request.post({ headers : headers  , url :'http://localhost:3000/api/bicicletas/create', body : a },
                                           function(error, response, body){
                                                    console.log('RespuestaPost: ', response.statusCode);
                                                    expect(response.statusCode).toBe(200);
                                                    expect(Bicicleta.findById(5).color).toBe("rojo colonial");
                                                    done() ;
                                            });

                  req.on('error', function (e) {
                       // General error, i.e.
                      //  - ECONNRESET - server closed the socket unexpectedly
                      //  - ECONNREFUSED - server did not listen
                      //  - HPE_INVALID_VERSION
                      //  - HPE_INVALID_STATUS
                      //  - ... (other HPE_* codes) - server returned garbage
                     console.log(e);
                  });
            } catch (error) {
                    console.error(error);
                    // Expected output: ReferenceError: nonExistentFunction is not defined
                    // (Note: the exact output may be browser-dependent)
            }
                        

        });    
    });


    describe('POST Bicicletas /update:', () => {
        it('Status 200', (done) => {
           
            try {
                  var headers = { 'content-type' : 'application/json'} ;
                  var a = '{"id" : 3  , "color" : "rojo Brillante"  , "modelo" : "familiar"  , "latitud" : 11.032880 ,"longitud" : -74.869794}' ;

                  var req = request.post({ headers : headers  , url :'http://localhost:3000/api/bicicletas/update', body : a },
                                           function(error, response, body){
                                                    console.log('RespuestaUpdate: ', response.statusCode);
                                                    expect(response.statusCode).toBe(200);
                                                    expect(Bicicleta.findById(3).color).toBe("rojo Brillante");
                                                    done() ;
                                            });

                  req.on('error', function (e) {
                       // General error, i.e.
                      //  - ECONNRESET - server closed the socket unexpectedly
                      //  - ECONNREFUSED - server did not listen
                      //  - HPE_INVALID_VERSION
                      //  - HPE_INVALID_STATUS
                      //  - ... (other HPE_* codes) - server returned garbage
                     console.log(e);
                  });
            } catch (error) {
                    console.error(error);
                    // Expected output: ReferenceError: nonExistentFunction is not defined
                    // (Note: the exact output may be browser-dependent)
            }
                        

        });    
    });


    describe('DELETE Bicicletas /delete:', () => {
        it('Status 200', (done) => {
           
            try {

                  d = Bicicleta.allBicis.length
                  var headers = { 'content-type' : 'application/json'} ;
                  var a = '{"id" :2  , "color" : "rojo Brillante"  , "modelo" : "familiar"  , "latitud" : 11.032880 ,"longitud" : -74.869794}' ;
                  
                  var req = request.delete({ headers : headers  , url :'http://localhost:3000/api/bicicletas/delete', body : a },
                                           function(error, response, body){
                                                    console.log('RespuestaDelete: ', response.statusCode);
                                                    expect(response.statusCode).toBe(204 || 200);
                                                    e = Bicicleta.allBicis.length
                                                    expect(d).not.toEqual(e) ;
                                                    done() ;
                                            });

                  req.on('error', function (e) {
                       // General error, i.e.
                      //  - ECONNRESET - server closed the socket unexpectedly
                      //  - ECONNREFUSED - server did not listen
                      //  - HPE_INVALID_VERSION
                      //  - HPE_INVALID_STATUS
                      //  - ... (other HPE_* codes) - server returned garbage
                     console.log(e);
                  });
            } catch (error) {
                    console.error(error);
                    // Expected output: ReferenceError: nonExistentFunction is not defined
                    // (Note: the exact output may be browser-dependent)
            }
                        

        });    
    });





}) ;




