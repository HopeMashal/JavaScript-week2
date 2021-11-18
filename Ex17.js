const books = [{
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36
  }
]
function Filter(array){
    return array.filter(book => book.rating>4.3)
}
function foreach(array){
    return array.forEach(book => console.log(book.title))
}
function map(array){
    return array.map(book => book.authors)
}
console.log('The books have rating largest than 4.3 are:', Filter(books))
console.log('The books titles are:');foreach(books);
console.log('The books authors are:', map(books))
