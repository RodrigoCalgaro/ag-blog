var express = require('express');
var router = express.Router();
var models = require('./../models')
var Comentario = models.Comentario

router.post('/add', function (req, res, next) {
    var nuevoComentario = Comentario.build(req.body.comentario);
    //Inserting Data into database
    nuevoComentario
        .save()
        .then(comentario => {
            console.log("Successfully created an comentario.");
            res.redirect(req.headers.referer)
        })
        .catch(error => {
            console.log('Error in Inserting Record: ' + error);
            res.redirect(req.headers.referer)
        });
});

router.get('/api/findAll', function (req, res, next) {
    Comentario.findAll().then(comments => {
        res.send({
            comments
        })
    })
})

router.delete('/api/delete/:id', function (req, res, next) {
    Comentario.destroy({
        where: {
            idComentario: req.params.id
        }
    }).then(comment => {
        res.send({
            comment
        })
    })
})

module.exports = router;