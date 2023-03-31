(()=>{
// los unions tipes es muy comun para dar flexibilidad
//al proyecto ejemplo cuando usamos para dar flexibilidada un array
let mixedArray: (number| string |boolean | object)[] = ['hola', true, ]
mixedArray.push(12);
mixedArray.push('hola');
mixedArray.push(true);
mixedArray.push({});
mixedArray.push([]);
mixedArray.push(false);
// ahora vamos con ejemplos union

let userId: string | number;
//aconsejabe soportar de 1 a 3 es lo mas recomendado
userId = 123
userId = 'hola mundo';


//caso de uso de un union tipe
function greeting(mytext: string| number) {
  if(typeof mytext === 'string'){
    mytext.toUpperCase()
    console.log(mytext)
  }else{
    mytext.toFixed()
    console.log(mytext)
  }
}
greeting('asasa')
greeting(123.12837)

})();
