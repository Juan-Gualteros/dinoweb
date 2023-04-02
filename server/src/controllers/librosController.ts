import {request, Request, Response } from 'express';
import pool from '../database';


class LibrosControllers{

    public async list (req: Request, res: Response){
       const books =  await pool.query('SELECT * FROM books');
        res.json(books);
       
    } 

    public async getOne(req: Request, res: Response): Promise<any>{
        const { id } = req.params;
        const books = await pool.query('SELECT * FROM books WHERE book_id = ?', [id]);
        if(books.length > 0) {
            return res.json(books[0]);
        }
        res.status(404).json({text: "'The book does't exist"});
    }
    
    public async create (req: Request, res: Response): Promise<void>{
        await pool.query('INSERT INTO books set ?', [req.body]);
        res.json({message: 'Book saved'});
    }

    public async delete (req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await pool.query('DELETE FROM books WHERE book_id = ?', [id]);
        res.json ({text:'The book was deleted '});
    }

    public async update(req: Request, res: Response): Promise<void>{
        const { id } =req.params;
        await pool.query('UPDATE books set ? WHERE book_id = ?', [req.body, id]);
        res.json({message: 'The book was updated'});
    }

}

export const librosController = new LibrosControllers();
