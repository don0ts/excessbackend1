const router = require('express').Router();
let Player = require('../models/player.model');

router.route('/').get((req, res) => {
    Player.find()//paola isaabel rios ordoñez 
        .then(players => res.json(players))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const playerAcademy = req.body.playerAcademy;
    const playerName = req.body.playerName;
    const playerPosition = req.body.playerPosition;
    const playerPOB = req.body.playerPOB;
    const playerHeight = req.body.playerHeight;
    const playerWeight = req.body.playerWeight;
    const playerBats = req.body.playerBats;
    const playerThrows = req.body.playerThrows;
    const playerDOB = req.body.playerDOB;
    const playerClass = req.body.playerClass;

    const newPlayer = new Player({
        playerAcademy,
        playerName,
        playerPosition,
        playerPOB,
        playerHeight,
        playerWeight,
        playerBats,
        playerThrows,
        playerDOB,
        playerClass
    });

    newPlayer.save()
        .then(() => res.json('Entrada añadida con éxito!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Player.findById(req.params.id)
        .then(player => res.json(player))
        .catch(err => res.status(400).json('Error' + err));
});


router.route('/:id').delete((req, res) => {
    Player.findByIdAndDelete(req.params.id)
        .then(Player => res.json('Entrada eliminada.'))
        .catch(err => res.status(400).json('Error' + err));
});


router.route('/update/:id').put((req, res) => {
    Player.findById(req.params.id)
        .then(Player => {
            Player.playerAcademy = req.body.playerAcademy;
            Player.playerName = req.body.playerName;
            Player.playerPosition = req.body.playerPosition;
            Player.playerPOB = req.body.playerPOB;
            Player.playerHeight = req.body.playerHeight;
            Player.playerWeight = req.body.playerWeight;
            Player.playerBats = req.body.playerBats;
            Player.playerThrows = req.body.playerThrows;
            Player.playerDOB = req.body.playerDOB;
            Player.playerClass = req.body.playerClass;

            Player.save()
                .then(() => res.json('Información actualizada.'))
                .catch(() => res.status(400).json('Error' + err));
        })
        .catch(err => res.status(400).json('Error' + err));
});

module.exports = router;