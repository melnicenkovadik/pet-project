// PORT is in .env file
const PORT = 8080;

const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.bodyParser);

// Нужно для небольшой задержки, чтобы запрос проходил не мгновенно, имитация реального апи
server.use(async (req, res, next) => {
    await new Promise((res) => {
        setTimeout(res, 300);
    });
    next();
});

// Эндпоинт для логина
server.post('/login', (req, res) => {
    try {
        const {
            username,
            password,
        } = req.body;
        if (!username || !password) {
            return res.status(400)
                .json({ message: 'Username and password are required' });
        }
        const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
        const { users = [] } = db;
        const userFromBd = users.find(
            (user) => user.username === username && user.password === password,
        );
        if (userFromBd) {
            console.log('userFromBd', userFromBd);
            return res.status(200)
                .json(userFromBd);
        }
        console.log('user not found');
        return res.status(403)
            .json({ message: 'User not found' });
    } catch (e) {
        console.log(e);
        return res.status(500)
            .json({ message: e.message });
    }
});

// проверяем, авторизован ли пользователь
// // eslint-disable-next-line
server.use((req, res, next) => {
    if (!req.headers.authorization || !req.headers.Authorization) {
        return res.status(403)
            .json({ message: 'AUTH ERROR' });
    }

    next();
});
server.use(jsonServer.defaults({}));
server.use(router);

// запуск сервера
server.listen(PORT, () => {
    console.log(`server is running on ${PORT} port`);
});
