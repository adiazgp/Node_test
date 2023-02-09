var Bicicleta = function (id,color,modelo,ubicacion){
    this.id = id ;
    this.color = color ;
    this.modelo = modelo ;
    this.ubicacion = ubicacion ;
}

Bicicleta.prototype.toString = function(){
    return 'id: '+this.id+ " | color: "+ this.color ;
}

Bicicleta.allBicis = [] ;
Bicicleta.add = function(aBici) {
    Bicicleta.allBicis.push(aBici) ;
}

Bicicleta.findById = function(aBiciId) {
    var aBici = Bicicleta.allBicis.find(x => x.id == aBiciId)  // error
    console.log(aBici)
    if (aBici)
        return aBici ;
    else  
        throw new Error(`No existe una bicleta con el id ${aBiciId}`) ;
}

Bicicleta.removeById = function(aBiciId) {
    var aBici = Bicicleta.findById(aBiciId) ; //no es necesario porque abajo se busca uno a uno.
    for(var i=0; i < Bicicleta.allBicis.length ; i++){
        if (Bicicleta.allBicis[i].id == aBiciId) {
            Bicicleta.allBicis.splice(i,1) ;
            break ;
        }
    }
}


var a = new Bicicleta(1, 'rojo' , 'urbana' ,[11.022880,-74.869794]) ;
var b = new Bicicleta(2, 'blanca' , 'urbana' ,[11.033570, -74.869233]) ;
var c = new Bicicleta(3, 'Negra' , 'deportiva' ,[10.9685460,-74.7813260]) ;

Bicicleta.add(a) ;
Bicicleta.add(b) ;
Bicicleta.add(c) ;

module.exports = Bicicleta ;