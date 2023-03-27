function shelfBook(book, sciFiShelf) {
  if (sciFiShelf.length < 3) {
  return sciFiShelf.unshift(book);
  }
}

function unshelfBook(book, sciFiShelf) {
  for (var i = 0; i < sciFiShelf.length; i++) {
    if (book === sciFiShelf[i].title) {
      return sciFiShelf.splice([i], 1);
    }
  }
}

function listTitles(fantasyShelf) {
  var titles = [];
  for (var i = 0; i < fantasyShelf.length; i++) {
  titles.push(fantasyShelf[i].title);
  }
  return titles.join(", ")
}

function searchShelf(nonFictionShelf, name) {
  for (var i = 0; i < nonFictionShelf.length; i++) {
    var shelved = false;
  if (nonFictionShelf[i].title === name) {
    shelved = true
  }
  } 
  return shelved;
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};