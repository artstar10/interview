
import express, { NextFunction, Request, Response } from "express"; // EXPRESS É UM GERENCIADOR DE ROTAS
import statusRoute from "./routes/status.route";
import usersRoute from "./routes/users.route";

const app = express();

// Configurações de aplicação para trabalahr com json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configurações de Rotas CRUD
app.use(usersRoute);

app.use(statusRoute, (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({ foo: 'sucesso!' });
});// ENDPOINT: status

// Inicialização do servidor
app.listen(3000, () => {
    console.log('Aplicação executando na porta 3000!');
})