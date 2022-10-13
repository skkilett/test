import { Router, Request, Response } from "express";
import CryptoController from "./controller";


const router = Router();

router.get('/crypto', async (req: Request, res: Response) => {
    res.send(await CryptoController.getBalance(req, res));
  });


export default router;  