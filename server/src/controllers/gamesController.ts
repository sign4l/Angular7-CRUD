import { Request, Response } from "express";

import pool from "../database";

class GamesController {
  public list(req: Request, res: Response) {
    res.json({ text: "listando juegos" });
  }

  public getOne(req: Request, res: Response) {
    res.json({ text: "solo el juego numero " + req.params.id });
  }

  public create(req: Request, res: Response) {
    res.json({ text: "creando un juego" });
  }

  public update(req: Request, res: Response) {
    res.json({ text: "actualizando un juego " + req.params.id });
  }

  public delete(req: Request, res: Response) {
    res.json({ text: "eliminando un juego " + req.params.id });
  }
}

export const gamesController = new GamesController();
export default gamesController;
