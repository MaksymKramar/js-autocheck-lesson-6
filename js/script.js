// Задача 1
function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Пиши код ниже этой строки

  orderedItems.forEach(function(item){totalPrice +=item
  })  

  // Пиши код выше этой строки
  return totalPrice;
}

// Задача 2
function filterArray(numbers, value) {
    const filteredNumbers = [];
    // Пиши код ниже этой строки
  
    numbers.forEach(function(number){
    if (number > value) {
      filteredNumbers.push(number)      
  };
  })
  
    // Пиши код выше этой строки
    return filteredNumbers;
  }

// Задача 3
function getCommonElements(firstArray, secondArray) {
    const commonElements = [];
    // Пиши код ниже этой строки
  
    firstArray.forEach(function (arr) {    
    if (secondArray.includes(arr)) {
      commonElements.push(arr);
    }
  }) 
  
    return commonElements;
    // Пиши код выше этой строки
  }

// Задача 4
// Пиши код ниже этой строки
const calculateTotalPrice = (quantity, pricePerItem) =>{

  // Пиши код выше этой строки
  return quantity * pricePerItem;
}

// Задача 5
// Пиши код ниже этой строки
const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// Пиши код выше этой строки


// Задача 6
// Пиши код ниже этой строки
const calculateTotalPrice = (orderedItems) => {
  let totalPrice = 0;

  orderedItems.forEach((item) => {
    totalPrice += item;
  });

  return totalPrice;
}
// Пиши код выше этой строки

// Задача 7
// Пиши код ниже этой строки
const filterArray=(numbers, value) => {
    const filteredNumbers = [];
  
    numbers.forEach((number) => {
      if (number > value) {
        filteredNumbers.push(number);
      }
    });
  
    // Пиши код выше этой строки
    return filteredNumbers;
  }

// Задача 8
// Пиши код ниже этой строки
const getCommonElements = (firstArray, secondArray)=>{
    const commonElements = [];
  
    firstArray.forEach((element)=> {
      if (secondArray.includes(element)) {
        commonElements.push(element);
      }
    });
  
    // Пиши код выше этой строки
    return commonElements;
}

// Задача 9
function changeEven(numbers, value) {
    // Пиши код ниже этой строки
  const newArray = [];
  numbers.forEach((number) => {
    
   if (number % 2 === 0) {
     newArray.push(number + value);
   } else {
     newArray.push(number);
   }
  });
  return newArray; 
    // Пиши код выше этой строки
}

// Задача 10
const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// Пиши код ниже этой строки
const planetsLengths = planets.map((planet) => planet.length);

// Задача 11
const books = [
    { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
    { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
    { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
    { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
    { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
  ];
  // Пиши код ниже этой строки
  
const titles = books.map(book => book.title);
  
// Задача 12
const books = [
    {
      title: 'Последнее королевство',
      author: 'Бернард Корнуэлл',
      genres: ['приключения', 'историческое']
    },
    {
      title: 'На берегу спокойных вод',
      author: 'Роберт Шекли',
      genres: ['фантастика']
    },
    {
      title: 'Красна как кровь',
      author: 'Ли Танит',
      genres: ['ужасы', 'мистика']
    }
  ];
  // Пиши код ниже этой строки
  
  const genres = books.flatMap(book=>book.genres);

// Задача 13
// Пиши код ниже этой строки
const getUserNames = users =>users.map(user=>user.name);
  
// Пиши код выше этой строки

// Задача 14
// Пиши код ниже этой строки
const getUserEmails = users => users.map(user=>user.email);
  // Пиши код выше этой строки

// Задача 15
const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Пиши код ниже этой строки

const evenNumbers = numbers.filter(number=> number % 2 ===0);
const oddNumbers = numbers.filter(number=> number % 2);

// Задача 16
const books = [
    {
      title: 'Последнее королевство',
      author: 'Бернард Корнуэлл',
      genres: ['приключения', 'историческое']
    },
    {
      title: 'На берегу спокойных вод',
      author: 'Роберт Шекли',
      genres: ['фантастика', 'мистика']
    },
    {
      title: 'Красна как кровь',
      author: 'Ли Танит',
      genres: ['ужасы', 'мистика', 'приключения']
    }
  ];
  // Пиши код ниже этой строки
  const allGenres = books.flatMap(book=>book.genres);
  const uniqueGenres = allGenres.filter((book,index,array)=>array.indexOf(book)===index);

// Задача 17
const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
];

const MIN_RATING = 8;
const AUTHOR = 'Бернард Корнуэлл';
// Пиши код ниже этой строки

const topRatedBooks = books.filter(book=>book.rating>=MIN_RATING);
const booksByAuthor = books.filter(book=>book.author===AUTHOR);

// Задача 18
// Пиши код ниже этой строки
const getUsersWithEyeColor = (users, color) => {
 
return users.filter(user=>user.eyeColor === color)
};
// Пиши код выше этой строки

// Задача 19
// Пиши код ниже этой строки
const getUsersWithAge = (users, minAge, maxAge) => 
 users.filter(user=> user.age >= minAge && user.age < maxAge);
// Пиши код выше этой строки

// Или Деструкторизация 
const getUsersWithAge = (users, minAge, maxAge) => 
 users.filter(({age})=> age >= minAge && age < maxAge);

// Задача 20
// Пиши код ниже этой строки
const getUsersWithFriend = (users, friendName) => {
    return users.filter(user => user.friends.includes(friendName))    
};
// Пиши код выше этой строки


// Задача 21
// Пиши код ниже этой строки
const getFriends = (users) =>   users.flatMap(user=>user.friends).filter((user,index,array)=>array.indexOf(user)===index);
// Пиши код выше этой строки

// Задача 22
// Пиши код ниже этой строки
const getActiveUsers = (users) => 
  users.filter(user=>user.isActive); 
// Пиши код выше этой строки


// Задача 23
// Пиши код ниже этой строки
const getInactiveUsers = (users) => users.filter(user=>!user.isActive);
// Пиши код выше этой строки


// Задача 24
const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
];
const BOOK_TITLE = 'Сон смешного человека';
const AUTHOR = 'Роберт Шекли';
// Пиши код ниже этой строки

const bookWithTitle = books.find(book=>book.title === BOOK_TITLE);
const bookByAuthor = books.find(book=>book.author === AUTHOR);


// Задача 25
// Пиши код ниже этой строки
const getUserWithEmail = (users, email) => users.find(user=>user.email === email);
// Пиши код выше этой строки


// Задача 26
const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Пиши код ниже этой строки

const eachElementInFirstIsEven = firstArray.every(element=>element%2===0);
const eachElementInFirstIsOdd = firstArray.every(element=>element%2===!0);

const eachElementInSecondIsEven = secondArray.every(element=>element%2===0);
const eachElementInSecondIsOdd = secondArray.every(element=>!element%2===0);

const eachElementInThirdIsEven = thirdArray.every(element=>element%2===0);
const eachElementInThirdIsOdd = thirdArray.every(element=>element%2===0);

// Задача 27
// Пиши код ниже этой строки
const isEveryUserActive = (users) => users.every(user=>user.isActive);
// Пиши код выше этой строки


// Задача 28
const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Пиши код ниже этой строки

const anyElementInFirstIsEven = firstArray.some(element=>element%2===0);
const anyElementInFirstIsOdd = firstArray.some(element=>element%2===!0);

const anyElementInSecondIsEven = secondArray.some(element=>element%2===0);
const anyElementInSecondIsOdd = secondArray.some(element=>!element%2===0);

const anyElementInThirdIsEven = thirdArray.some(element=>element%2===0);
const anyElementInThirdIsOdd = thirdArray.some(element=>!element%2===0);


// Задача 29
// Пиши код ниже этой строки
const isAnyUserActive = users => users.some(user=>user.isActive);
// Пиши код выше этой строки

// Задача 30
const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]
// Пиши код ниже этой строки

const totalPlayTime = playtimes.reduce((acc,players)=>acc + players);

// Пиши код выше этой строки
const averagePlayTime = totalPlayTime / playtimes.length;

// Задача 31
const players = [
  { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
  { name: 'Поли', playtime: 469, gamesPlayed: 2 },
  { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
  { name: 'Киви', playtime: 241, gamesPlayed: 1 },
];
// Пиши код ниже этой строки

const totalAveragePlaytimePerGame = players.reduce((acc, player)=>{
  return acc + player.playtime / player.gamesPlayed; 
},0);

// Или другая запись  !!!Дальше буду писать так
const totalAveragePlaytimePerGame = players.reduce((acc, player)=> acc + player.playtime / player.gamesPlayed
,0);

// Задача 32
// Пиши код ниже этой строки
const calculateTotalBalance = users => 
  users.reduce((acc,user)=>acc+user.balance,0);
// Пиши код выше этой строки

// Задача 33
// Пиши код ниже этой строки
const getTotalFriendCount = users => users.reduce((allFriends, user) => allFriends + user.friends.length,0);
// Пиши код выше этой строки

// Задача 34
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  'Ли Танит',
  'Бернард Корнуэлл',
  'Роберт Шекли',
  'Федор Достоевский'
];
// Пиши код ниже этой строки

const ascendingReleaseDates = [...releaseDates].sort();

const alphabeticalAuthors = [...authors].sort();

// Задача 35
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// Пиши код ниже этой строки

const ascendingReleaseDates = [...releaseDates].sort((a,b)=>a-b);

const descendingReleaseDates = [...releaseDates].sort((a,b)=>b-a);

// Задача 36
const authors = [
    'Ли Танит',
    'Бернард Корнуэлл',
    'Роберт Шекли',
    'Федор Достоевский',
    'Говард Лавкрафт'
  ];
  // Пиши код ниже этой строки
  
  const authorsInAlphabetOrder = [...authors].sort((a,b)=>a.localeCompare(b));
  
  const authorsInReversedOrder = [...authors].sort((a,b)=>b.localeCompare(a));

// Задача 37
const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
];
// Пиши код ниже этой строки

const sortedByAuthorName = [...books].sort((firstAuthor, secondAuthor)=>firstAuthor.author.localeCompare(secondAuthor.author));

const sortedByReversedAuthorName = [...books].sort((firstAuthor, secondAuthor)=>secondAuthor.author.localeCompare(firstAuthor.author));

const sortedByAscendingRating = [...books].sort((firstRating, secondRating)=>firstRating.rating-secondRating.rating);

const sortedByDescentingRating =[...books].sort((firstRating, secondRating)=>secondRating.rating-firstRating.rating);

// Задача 38
// Пиши код ниже этой строки
const sortByAscendingBalance = users => 
   users.sort((firstBalance, secondBalance)=>firstBalance.balance - secondBalance.balance);
// Пиши код выше этой строки

// Задача 39
// Пиши код ниже этой строки
const sortByDescendingFriendCount = users =>[...users].sort((firstFriend, secondFriend) => secondFriend.friends.length - firstFriend.friends.length);

// Пиши код выше этой строки

// Задача 40
// Пиши код ниже этой строки
const sortByName = users => [...users].sort((firstName, secondName) => firstName.name.localeCompare(secondName.name));

// Пиши код выше этой строки

// Задача 41
const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
  { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
];
const MIN_BOOK_RATING = 8;
// Пиши код ниже этой строки
const names = [...books].filter((bookRating) => bookRating.rating > MIN_BOOK_RATING)
  .map((book) => book.author)  
.sort((firstName, secondName) => firstName.localeCompare(secondName));

// Задача 42
// Пиши код ниже этой строки
const getNamesSortedByFriendCount = users => 
  [...users].filter(user => user.friends)            
    .sort((firstFriend, secondFriend) => firstFriend.friends.length - secondFriend.friends.length)
  .map(user=>user.name);
// Пиши код выше этой строки

// Задача 43
// Пиши код ниже этой строки
const getSortedFriends = users => 
  [...users].flatMap(user => user.friends)
    .filter((user, index, array) => array.indexOf(user) === index)
  .sort((firstName,secondName)=>firstName.localeCompare(secondName));
// Пиши код выше этой строки

// Задача 44
const getTotalBalanceByGender = (users, gender) =>
  [...users].filter(user=>user.gender)
    .reduce((acc, user) => {
    if (user.gender === gender) {
      return acc += user.balance;
    }
    return acc
  },0);