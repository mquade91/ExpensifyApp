const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('something went WRONG')
  }, 1500)
})

console.log('before')

promise.then((data) => {
  console.log(data)
}).catch((error) => {
  console.log('error: ' + error)
})

console.log('afer')