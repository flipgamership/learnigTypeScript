(() => {
let product = 'data'
console.log(product);

const productDescription = 'I am a product description'
console.log('productDescription', productDescription)

let productPrice = '100'
let isNew: boolean = false

const summary = `
title: ${product}
description: ${productDescription}
price: ${productPrice}
isNew: ${isNew}
`
console.log(summary)
})();
