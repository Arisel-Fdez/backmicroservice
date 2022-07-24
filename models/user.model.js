import { getData } from '../config/connection.config.js';
import { DataTypes } from 'sequelize';
import bcryptjs from 'bcryptjs';

const User = getData.sequelizeClient.define('cat_users', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Ingrese un nombre'
            }
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
            arg: true,
            msg: ''
        },
        validate: {
            notNull: {
                msg: 'Ingrese un correo'
            }
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Ingrese una contraseña'
            }
        }
    },

}, {
    tableName: 'cat_users',
    freezeTableName: true,
    hooks: {
        beforeCreate: (user, options) => {
            {
                user.password = user.password && user.password != "" ? bcryptjs.hashSync(user.password, 10) : "";
            }
        }
    }

});

const User_Recovery = getData.sequelizeClient.define('cat_user_Recovery', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
            arg: true,
            msg: ''
        },
        validate: {
            notNull: {
                msg: 'Ingrese un correo'
            }
        }
    },
    token: {
        type: DataTypes.STRING,
        allowNull: false,
    },

}, {
    tableName: 'cat_user_Recovery',
    freezeTableName: true,

});


export const getUser = User;
