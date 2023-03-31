(() => {
  let productPrice = 100;
  productPrice = 12;
  console.log('productPrice', productPrice);
  //no insertar nada que  no sea un number en una variable
  //trabajandolo de forma inferida
  let customerAge: number = 28;
  customerAge = customerAge + 1;
  //pero no puedes hacer esto customerAge = customerAge + '1' ya que esto seria
  //conquetenacion pero de string en js pero estamos en ts
  let productInStock: number;
  //esto puede ser util a la hora de crear clases o modelos de db como dto
  // console.log('productInStock', productInStock); no puedo ejecutar nada que no tenga un valor esto es un error


})();
