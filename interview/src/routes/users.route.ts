import { NextFunction, Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";

const usersRoute = Router();

usersRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {// BUSCAR TODOS OS USUÁRIOS
    const users = [{ userName: 'Arthur' }];
    res.status(StatusCodes.OK).send({users});
});

usersRoute.get('/users/saldo', (req: Request, res: Response, next: NextFunction) => {// OBTER O SALDO
    const users = [
        { userName: 'Arthur', saldo: "4.500"  },
        { userName: 'Izadora', saldo: "2.500"  },
        { userName: 'José Bruno', saldo: "12.500"}
    ];
    res.status(StatusCodes.OK).send({users});
});

usersRoute.get('/users/extrato', (req: Request, res: Response, next: NextFunction) => {// OBTER O EXTRATO
    const users = [
        { userName: 'Arthur', agencia: 1111, extrato: "4.500"  },
        { userName: 'Izadora', agencia: 2222, extrato: "2.500"  },
        { userName: 'José Bruno', agencia: 3333, extrato: "12.500"}
    ];
    res.status(StatusCodes.OK).send({users});
});

usersRoute.get('/users/:uuid', (req: Request<{uuid: string }>, res: Response, next: NextFunction) => {//BUSCAR USUÁRIO POR ID
    const uuid = req.params.uuid;
    res.status(200).send({ uuid })
});

usersRoute.post('/users', (req: Request, res: Response, next: NextFunction) => {// CRIAR UM USUÁRIO
    const newUser = req.body;  
    res.status(StatusCodes.CREATED).send(newUser);
});

usersRoute.put('/users/:uuid', (req: Request<{uuid: string }>, res: Response, next: NextFunction) => {// ATUALIZAR UM USUÁRIO
    const uuid = req.params.uuid;
    const modifiedUser = req.body;

    modifiedUser.uuid = uuid

    res.status(StatusCodes.OK).send(modifiedUser);
});

usersRoute.delete('/users/:uuid', (req: Request<{uuid: string }>, res: Response, next: NextFunction) => {// ATUALIZAR UM USUÁRIO
    res.sendStatus(StatusCodes.OK);
});

export default usersRoute;