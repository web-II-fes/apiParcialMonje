import {Schema, model} from 'mongoose';

const schemaPedidos = new Schema({
    nombreCliente: String,
    direccionCliente: String,
    pedidoCliente: String,
    fechaEntrega: Date
});

export let pedidoSchema = model('ped', schemaPedidos , 'pedidos');