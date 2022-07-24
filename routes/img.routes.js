import { Router } from 'express';
import { imgController } from '../controllers/img.controller.js';


/**
 * @openapi
 * '/api/img/imgs':
 *  post:
 *     tags:
 *     - Img
 *     summary: Agregar Producto
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - nombre
 *              - precio
 *              - cantidad
 *              - stock
 *              - inf
 *              - imagenes
 *            properties:
 *              nombre:
 *                type: string
 *                default: Curso javascript
 *              precio:
 *                type: string
 *                default: 10
 *              cantidad:
 *                type: string
 *                default: 50 cupos
 *              stock:
 *                type: string
 *                default: 30 disposable
 *              inf:
 *                type: string
 *                default: Aprende javascript con cursos de 8 horas
 *              imagenes:
 *                type: bigint
 *                default: img
 *     responses:
 *      200:
 *        description: Create
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */




const router = Router();

router.post('/form', async (req, res) => { imgController.img(req, res) })
/**
 * @openapi
 * '/api/img/getimg':
 *  post:
 *     tags:
 *     - Img
 *     summary: Agregar Producto
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - nombre
 *              - precio
 *              - cantidad
 *              - stock
 *              - inf
 *              - imagenes
 *            properties:
 *              nombre:
 *                type: string
 *                default: Curso javascript
 *              precio:
 *                type: string
 *                default: 10
 *              cantidad:
 *                type: string
 *                default: 50 cupos
 *              stock:
 *                type: string
 *                default: 30 disposable
 *              inf:
 *                type: string
 *                default: Aprende javascript con cursos de 8 horas
 *              imagenes:
 *                type: bigint
 *                default: img
 *     responses:
 *      200:
 *        description: Create
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */

router.get('/getimg', async (req, res) => { imgController.img_get(req, res) })

export default router