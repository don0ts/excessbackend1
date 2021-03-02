const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const playerSchema = new Schema ({
    playerAcademy: { type: String, trim: true },
    playerName: { type: String , trim: true },
    playerPosition: { type: String, trim: true },
    playerClass: { type: Number, trim: true },
    playerDOB: { type: Date },
    playerHeight: { type: String, trim: true },
    playerWeight: { type: String, trim: true },
    playerBats: { type: String, trim: true },
    playerThrows: { type: String, trim: true },
}, {
    timestamps: true,
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;