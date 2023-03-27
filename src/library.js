function createLibrary(name) {
  var denverLibrary = {};
  denverLibrary.name = (name);
  var fantasy = [];
  var fiction = [];
  var nonFiction = [];
  denverLibrary.shelves = {fantasy, fiction, nonFiction};
  return denverLibrary
}

function addBook(denverLibrary, title) {
  if (title.genre === "fantasy") {
    denverLibrary.shelves.fantasy.push(title);
  } else if (title.genre === "fiction") {
    denverLibrary.shelves.fiction.push(title);
  } else {
    denverLibrary.shelves.nonFiction.push(title);
  }

}

function checkoutBook(denverLibrary, title, genre) {
  var titleFound = false;
  for ( i = 0; i < denverLibrary.shelves[genre].length; i++) {
    if (denverLibrary.shelves[genre][i].title === title) {
    denverLibrary.shelves[genre].splice(i, 1);
    titleFound = true;
    break;
  }
}
if (titleFound) {
  return `You have now checked out ${title} from the ${denverLibrary.name}.`;
} else {
  return `Sorry, there are currently no copies of ${title} available at the ${denverLibrary.name}.`;
}
}

function takeStock (library, genre) {
// count book# on a different shelf from a different library
// for loop through library genre amount  
  var thisLibrary = library.name;
  console.log(thisLibrary)
  var bookAmount = 0;
  // console.log(Object.keys(library.shelves))
  console.log(Object.values(library.shelves))
  for (var i = 0; i < Object.values(library.shelves).length; i++) {
    bookAmount = bookAmount + Object.values(library.shelves).length
    return `There are a total of ${bookAmount} ${genre} books at the ${library.name}.`
  }
}


// var libraryCount = 0;
//     for(var i=0; i< Object.keys(library.shelves).length; i++) {
//       libraryCount = libraryCount + Object.values(library.shelves)[i].length;
//     }
//     return `There are a total of ${libraryCount} books at the ${library.name}.`
//   }

module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock
};