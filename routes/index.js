var express = require('express');
var router = express.Router();
var models = require('./../models')
var Comentario = models.Comentario


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

/* GET Post: Nos Presentamos. */
router.get('/1', function (req, res, next) {
  Comentario.findAll({
    where: {
      postId: 1
    }
  }).then(comments => {
    res.render('1-Presentacion', {
      comments
    });
  })
});

/* GET Post: Unidad 1. */
router.get('/2', function (req, res, next) {
  Comentario.findAll({
    where: {
      postId: 2
    }
  }).then(comments => {
    res.render('2-Unidad1', {
      comments
    });
  })
});

/* GET Post: Unidad 2. */
router.get('/3', function (req, res, next) {
  Comentario.findAll({
    where: {
      postId: 3
    }
  }).then(comments => {
    res.render('3-Unidad2', {
      comments
    });
  })
});

module.exports = router;