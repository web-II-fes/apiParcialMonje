import * as express from 'express';
import { pedidoSchema } from '../schemas/pedidos';

const router = express.Router();

router.get('/pedido',  async (req, res) => {

    try{
        let pedidos = await pedidoSchema.find()
         res.send(pedidos);
    }catch(err){
        throw err;
    }

    });

router.get('/pedidoId/:id',  async (req, res) => {
    let IdPedidos = req.params.id;
        try{
            let pedidos = await pedidoSchema.findById(IdPedidos);
             res.send(pedidos);
        }catch(err){
            throw err;
        }
    
});   


router.post('/pedido', async (req, res)=> {

   
    try{
        const pedido = new pedidoSchema(req.body);
        await pedido.save();

        res.send(pedido);
    }catch(err){
        throw err;
    }

    });

router.put('/pedido/:_id', async (req, res) => {
   try{
        let pedido = await pedidoSchema.findByIdAndUpdate(req.params._id, req.body);
        res.send(pedido);
    } catch (err){
        throw err;
    } 
});
    
    router.delete('/pedido/:_id', async (req, res, next) =>{
        // console.log('Viene del DELETE', req.params._id);
       let pedidos = await pedidoSchema.findByIdAndRemove(req.params._id, function(err, pedidos) {
        if(err){
            console.log("Error", err);
        }
        console.log("Borrado: ", pedidos);
        res.json(pedidos);
    });
    });    
      


export = router;