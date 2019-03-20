var express = require('express');
var router = express.Router();
var models = require('./../models')
var Comentario = models.Comentario
/* 
var comments = [{
  id: 1,
  postId: 1,
  nombre: 'Juan Alberto',
  fecha: new Date("2019-3-13"),
  comentario: 'Excelente artículo espero mas material.'
}, {
  id: 2,
  postId: 1,
  nombre: 'Fernando Gago',
  fecha: new Date("2019-3-13"),
  comentario: 'Cambio.'
}, {
  id: 3,
  postId: 1,
  nombre: 'Marcelo Benedetto',
  fecha: new Date("2019-3-14"),
  comentario: 'Y va el tercero y va el tercero..'
}] */


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

module.exports = router;