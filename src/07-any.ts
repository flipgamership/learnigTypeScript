(()=>{
  let myDynamicVariable: any ;
  // basicamente esta variable puede funcionar como lo hacia js
  myDynamicVariable = 100;
  console.log(myDynamicVariable)
  myDynamicVariable = null;
  console.log(myDynamicVariable)
  myDynamicVariable = '';
  console.log(myDynamicVariable)
  myDynamicVariable = {};
  console.log(myDynamicVariable)
  // en ambiente de un proyecto de typescript no debes de usar any ya que se puede considerar mala practica
  // pero se puede usar para cuando estas migrando un proyecto puede ser muy util pero sigue siendo mala practically
})();
