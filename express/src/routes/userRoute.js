const fs = require('fs');
const { join } = require('path')

const filePath = join(__dirname, 'users.json')

const getUsers = () => {
    const data = fs.existsSync(filePath)
    ? fs.readFileSync(filePath)
    : []

    try {
        return JSON.parse(data)
    } catch (error) {
        return []
    }
}

const saveUser = (users) => fs.writeFileSync(filePath, JSON.stringify(users, null, '\t'))

const userRoute = (app) => { // ROTA COMPLETA COM TODOS OS MÉTODOS GET, POST, PUT E DELETE
    app.route('/users/:id?')
    .get((req, res) => {
        const users = getUsers()

        res.send({ users })
    })
    .post((req, res) => {// cadastrar cidade
        const users = getUsers()

        users.push(req.body)
        saveUser(users)

        res.status(201).send('Cliente e ou Cidade cadastrados')
    })
    .put((req, res) => {
        const users = getUsers()

        saveUser(users.map(user => {
            if(user.id === req.params.id){
                return {
                    ...user,
                    ...req.body
                }
            }

            return user
        }))

        res.status(200).send('Atualizado!')
    })
    .delete((req, res) => {
        const users = getUsers()

        saveUser(users.filter(user => user.id != req.body.id))

        res.status(200).send('Usuário deletado!')
    })
}

module.exports = userRoute