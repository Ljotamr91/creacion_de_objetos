/*
    Crear tres objetos que representes objetos reales.
    Los objetos con sus propiedades y uno ó varios métodos.
    Se valorará la sintaxis, la construcción de código para mi lectura como lector.
*/

var televisor = {
    marca : 'samsung',
    anyo : 2020,
    samrt : true
};
console.log(televisor);


var usuario = {
    nombre : "jose",
    edad :  28,
    verificado : true,

    datosCompletos : function(){
         this.nombre + "  " + this.edad + "  " + this.verificado;
    }
    
};
        console.log(usuario.nombre);
        console.log(usuario.edad);
        console.log(usuario.verificado);



var mascota = {
    nombre : "Rex",
    raza : "Pastor Aleman",
    edad :  4,
    vivo : true,

    fichaCliente : function(){
        this.nombre + "  " + this.raza + "  " + this.edad + "  " + this.vivo;
    }

};

        console.log(mascota.nombre);
        console.log(mascota.raza);
        console.log(mascota.edad);
        console.log(mascota.vivo);
