const express = require('express')
const router = express.Router()

const Book = require('./../models/book.model')



// Endpoints
router.get('/', (req, res) => res.render('pages/index'))

router.get('/libros', (req, res) => {

    Book
        .find()
        .then(allBooks => res.render('pages/books-list', { allBooks }))
        .catch(err => console.log('Error!', err))
})


router.get('/libros/detalles/:book_id', (req, res) => {

    const { book_id } = req.params

    Book
        .findById(book_id)
        .then(theBook => res.render('pages/book-detail', theBook))
        .catch(err => console.log('Error!', err))
})



module.exports = router