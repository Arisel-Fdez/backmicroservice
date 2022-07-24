import { getImg } from '../models/img.model.js';

const img = async (req, res, upload) => {
    getImg.create({
        name: req.body.name,
        nombre: req.body.nombre,
        precio: req.body.precio,
        cantidad: req.body.cantidad,
        stock: req.body.stock,
        inf: req.body.inf
    },
        { fields: ['name','nombre', 'precio', 'cantidad', 'stock', 'inf'] })
        .then(img => {
            res.send(img)

        })
        .catch(err => {
            res.status(400).send(err)
        });
};

const img_get = async (req, res, upload) => {
    getImg.findAll({
        name: req.body.name,
        nombre: req.body.nombre,
        precio: req.body.precio,
        cantidad: req.body.cantidad,
        stock: req.body.stock,
        inf: req.body.inf
    },
        { fields: ['name','nombre', 'precio', 'cantidad', 'stock', 'inf'] })
        .then(img => {
            res.send(img)

        })
        .catch(err => {
            res.status(400).send(err)
        });
};


const produc_create = async function (req, res, upload) {
    upload.single("name");
    getProduc.products
        .create(
            {
                name: req.file.originalname,
                description: req.body.description,
                price: req.body.price,
                amount: req.body.amount,
            },
            {
                fields: ["name", "description", "price", "amount"],
            }
        )
        .then((img) => {
            res.send(img);
        })
        .catch((err) => {
            console.log(err);
        });
};


const delete_products = async function (req, res, upload) {
    upload.single("id");
    getProduc.destroy({
        where: {
            id: req.file.originalname
        }
    })
}

const img_create = async function (req, res, upload) {
    upload.single("name");
    getImg.img
        .create(
            {
                name: req.file.originalname,
            },
            {
                fields: ["name"],
            }
        )
        .then((img) => {
            res.send(img);
        })
        .catch((err) => {
            console.log(err);
        });
};



export const imgController = { img, img_get };