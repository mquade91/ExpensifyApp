const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: 'Quade',
      age: 29,
    })
    // reject('something went WRONG')
  }, 1500)
})

console.log('before')

promise.then((data) => {
  console.log(data)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('other promise')
    }, 1500)
  })
  
}).then((str)=> {
  console.log('does this run?', str)
}).catch((error) => {
  console.log('error: ' + error)
})

console.log('afer')