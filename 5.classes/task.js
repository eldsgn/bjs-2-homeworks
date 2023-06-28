class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    fix() {
        if(this.state != 0 && this.state != 100) {
            this.state *= 1.5;
            if(this.state > 100) {
                this.state = 100;
            }
        }
    }
    set state(newState) {
        if(newState < 0) {
            this._state = 0;
        }
        else if (newState > 100) {
            this._state = 100;
        }
        this._state = newState;
    }
    
    get state() {
        return this._state;
    }
};

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'book';
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }
}

class Library {
    constructor(name, books) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if(book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        const findBook = this.books.find(book => book[type] === value);
        if(findBook) {
            return findBook;
        }
        return null;
    }

    giveBookByName(bookName) {
        const foundBookIndex = this.books.findIndex((book) => book.name === bookName);
        if(foundBookIndex !== -1) {
            const givenBook = this.books[foundBookIndex];
            this.books.splice(foundBookIndex, 1);
            return givenBook;
        }
        return null;
    }
}

class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    addMark(score, schoolSubject) {
        if(score < 2 || score > 5) {
            return;
        }
        if(!this.marks.hasOwnProperty(schoolSubject)) {
            this.marks[schoolSubject] = [];
        }
        this.marks[schoolSubject].push(score);
    }

    getAverageBySubject(schoolSubject) {
        if(!this.marks.hasOwnProperty(schoolSubject)) {
            return 0;
        }
        const score = this.marks[schoolSubject];
        const sum = score.reduce((acc, number) => acc + number, 0);
        const length = score.length;
        return sum / length;
    }

    getAverage() {
        const subjects = Object.keys(this.marks);
        if(subjects.length != 0) {
            let sum = 0;
            for(let i = 0; i < subjects.length; i++) {
                sum = sum + this.getAverageBySubject(subjects[i]);
            }
            return sum / subjects.length;
        }
        return 0;
    }
}