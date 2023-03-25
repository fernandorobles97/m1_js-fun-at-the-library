function createTitle(bookTitle) {
  var bookIdea = "The " + bookTitle;
  return bookIdea
}

console.log(createTitle("Dancing Sushi"));



function buildMainCharacter(name, age, pronouns) {
  var object = {
    name: `${name}`,
    age: `${age}`,
    pronouns: `${pronouns}`
  }
  return object
}

console.log(buildMainCharacter("Vassya", 16, "she/her"));


function saveReview(description, reviews) {
  if (reviews.indexOf(description) > -1) {
  } else {
    return reviews.push(description);
  }
}


function calculatePageCount(bookTitle) {
  return bookTitle.length * 20;
}

function writeBook(bookTitle, bookCharacter, genre) {
 var book = {
 }
 book.title = bookTitle
 book.mainCharacter = bookCharacter
 book.pageCount = calculatePageCount(bookTitle)
 book.genre = genre
 return book
}

function editBook(book) {
  return book.pageCount = book.pageCount * .75;
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}