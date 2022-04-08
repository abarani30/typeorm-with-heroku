import { Request, Response } from "express";

export default class MyController {
  static async sayHello(req: Request, res: Response): Promise<object> {
    return res.send("<h1>Hello guys from Ali Sattar :)</h1>");
  }
}
