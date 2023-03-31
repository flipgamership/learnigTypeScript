(()=>{
  type UserID = string | number | boolean;

  let userId: UserID;
  function greeting(userId: UserID) {
    if(typeof userId === 'string'){
      userId.toUpperCase()
      console.log(userId)
    }
  }
  //literal types
  let shirtSize: 'S' | 'M'| 'L'| 'XL';
  shirtSize = 'M'
  shirtSize = 'L'
  shirtSize = 'XL'

})();
