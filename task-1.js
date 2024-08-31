import fs from 'fs'

fs.mkdir('myFolder', (error) => {
    if (error) {
        console.error(error)
    } else {
        console.log("Дирректория создана!")
    }        
})

setTimeout(() => {
    fs.rmdir("myFolder", (error) => {
      if (error) {
        console.error(error)
      } else {
        console.log("Дирректория удалена!")
      }
    })
}, 2500)