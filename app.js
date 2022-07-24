import { api } from './config/config.js';
import swaggerDocs from './config/swagger.config.js';
import middleware from './middlewares/token.middleware.js'
import { validate } from './config/mailer.js';

import express from 'express';

import user from './routes/user.routes.js';
import email from './routes/email.routes.js';
import img from './routes/img.routes.js';


const app = express();

app.use(express.json());
// ROUTERS
app.use('/api/user', user);
app.use('/api/email', email);
app.use('/api/img', img);
// app.use('/api/profile', middleware, profile);



// SERVIDOR ACTIVO
app.listen(api.port, () => {
    console.log(`Servidor corriento en el puerto => ${api.port}`);
    swaggerDocs(app, api.port);
});

app.listen(validate.portEmail, () => {
    console.log(`Puerto De email => ${validate.port}`);
    console.log("Servicio de email Functional")

})

