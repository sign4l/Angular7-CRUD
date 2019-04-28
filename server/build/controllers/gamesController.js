"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GamesController {
    list(req, res) {
        res.json({ text: "listando juegos" });
    }
    getOne(req, res) {
        res.json({ text: "solo el juego numero " + req.params.id });
    }
    create(req, res) {
        res.json({ text: "creando un juego" });
    }
    update(req, res) {
        res.json({ text: "actualizando un juego " + req.params.id });
    }
    delete(req, res) {
        res.json({ text: "eliminando un juego " + req.params.id });
    }
}
exports.gamesController = new GamesController();
exports.default = exports.gamesController;
