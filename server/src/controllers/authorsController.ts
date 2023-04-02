import {request, Request, Response } from 'express';
import pool from '../database';


class authorsControllers{

    public async list (req: Request, res: Response){
       const authors =  await pool.query('SELECT * FROM authors');
        res.json(authors);
       
    } 

    public async getOne(req: Request, res: Response): Promise<any>{
        const { id } = req.params;
        const authors = await pool.query('SELECT * FROM authors WHERE author_id = ?', [id]);
        if(authors.length > 0) {
            return res.json(authors[0]);
        }
        res.status(404).json({text: "'The author does't exist"});
    }
    


    public async update(req: Request, res: Response): Promise<void>{
        const { id } =req.params;
        await pool.query('UPDATE name set ? WHERE author_id = ?', [req.body, id]);
        res.json({message: 'The author was updated'});
    }

    public async delete (req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await pool.query('DELETE FROM authros WHERE author_id = ?', [id]);
        res.json ({text:'The author was deleted '});
    }


}

export const AuthorsController = new authorsControllers();
