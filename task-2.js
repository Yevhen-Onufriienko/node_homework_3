import fs from "fs"

fs.writeFile("info.txt", "Node.js is awesome!", (error) => {
  if (error) {
    console.error("Ошибка создания и записи в файл!")
  } else {
    console.log('Добавлена запись в файл "info.txt"')
    }
    fs.readFile("info.txt", "utf-8", (error, data) => {
      if (error) {
        console.error('Ошибка чтения файла "info.txt"!')
      } else {
        console.log("Файл прочитан!")
        console.log("Содержимое файла:", data)
      }
    })
})

