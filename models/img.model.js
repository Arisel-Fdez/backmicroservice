import { getData } from '../config/connection.config.js';
import { DataTypes } from 'sequelize';


const Img = getData.sequelizeClient.define('cat_Imagen', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    precio: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cantidad: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    stock: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    inf: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

}, {
    tableName: 'cat_Imagen',
    freezeTableName: true,

});

export const getImg = Img;