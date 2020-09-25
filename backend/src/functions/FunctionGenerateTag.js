const ModelBook = require('../models/ModelBook');

async function generateTag(Idbook) {
  const regex = /[\s.,\/ \-]/;
  let tags = [];
  const response = await ModelBook.findById(Idbook)
  if (response.title) {
    text1 = response.name;
    tags.push(...text1.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase().split(regex));
  }
  if (response.description) {
    text1 = response.description;
    tags.push(...text1.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase().split(regex));
  }
  if (response.author) {
    text1 = response.author;
    tags.push(...text1.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase().split(regex));
  }
  return tags;
}

async function saveTags(Idbook) {
  let tags = await generateTag(Idbook);
  await ModelBook.findByIdAndUpdate(
    { '_id': Idbook },
    { 'tags': tags },
    { new: true }
  ).
    then(response => {
      return res.status(200).json(response);

    }
    ).catch(err => {
      return res.status(500).json(err);
    })

}

module.exports = saveTags