import { Router } from 'express';

import {AuthorsController} from '../controllers/authorsController';

class authors {
    
    public router : Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/',AuthorsController.list);
        this.router.get('/:id', AuthorsController.getOne);
        this.router.put('/:id', AuthorsController.update);
        this.router.delete('/:id', AuthorsController.delete);
    }

}

const Authors = new authors();
export default Authors.router;