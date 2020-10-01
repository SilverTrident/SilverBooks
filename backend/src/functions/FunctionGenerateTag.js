
const { text } = require('express');
const ModelBook = require('../models/ModelBook');

 function generateTag(title, description, author) {
  const regex = /[\s.,\/ \-]/;
  let tags = []
  if (title) {
    let tex1 = title;
    tags.push(...tex1.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase().split(regex));
  }
  if (description) {
    let text1 = description;
    tags.push(...text1.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase().split(regex));
  }
  if (author) {
    let text1 = author;
    tags.push(...text1.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase().split(regex));
  }

  return tags;
}

async function saveTags(Idbook) {

  let tags = []
  
  await ModelBook.findById(Idbook).then(response => {
   tags = generateTag(response.title, response.description, response.author);
  }).catch(err => {
    return tags
  })
 
  await ModelBook.findByIdAndUpdate(
    { '_id': Idbook },
    { 'tags': tags },
    { new: true }
  ).
    then(response => {
      return console.log('');

    }
    ).catch(err => {
      return console.log('erro ao gerar tags')
    })

}



module.exports = saveTags