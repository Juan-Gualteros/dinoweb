import {Request, Response } from 'express';

class IndexControllers{

    public index (req: Request, res: Response){
        res.json({text: 'API is /api/books or /api/authors'});
    }  

}

export const indexController = new IndexControllers();