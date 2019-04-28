import { Request, Response } from "express";
import { gamesController } from "./gamesController";

class IndexController {
   public index (req: Request, res: Response) {
        res.json({text: 'Api esta en /api/games'})
   } 
}

export const indexController = new IndexController();
