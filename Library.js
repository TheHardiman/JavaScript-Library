class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  set isCheckedOut(value) {
    this._isCheckedOut = value;
  }

  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }

  getAverageRating() {
    let ratingSum = this._ratings.reduce(
      (accumulator, rating) => accumulator + rating,
      0
    );
    return ratingSum / this._ratings.length;
  }

  addRating(value) {
    this._ratings.push(value);
  }
}

class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(director, runTime, title) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }
}

class CD extends Media {
  constructor(artist, title, runTime) {
    super(title);
    this._artist = artist;
    this._runTime = runTime;
  }

  get artist() {
    return this._artist;
  }

  get runTime() {
    return this._runTime;
  }
}

// Creating instances of each media type
const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
historyOfEverything.toggleCheckOutStatus();
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

const avengers = new Movie('Joss Whedon', 143, 'The Avengers');
avengers.toggleCheckOutStatus();
avengers.addRating(5);
avengers.addRating(4.5);

const thriller = new CD('Michael Jackson', 'Thriller', '42:19');
thriller.toggleCheckOutStatus();
thriller.addRating(5);
thriller.addRating(4);

// Creating a catalog
const catalog = [historyOfEverything, avengers, thriller];

// Accessing catalog items
console.log(catalog);
