const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

const users = {
    email: 'hattaasrirahman@gmail.com',
    password: 'HARN123' 
};

app.get('/auth/login', (req, res) => {
    res.render('login');
});

app.post('/auth/login', (req, res) => { 
    const { email, password } = req.body;
    if (email === users.email && password === users.password) {
        const profile = {
            name: 'Hatta Asri Rahman',
            nim: '2211522012',
            jurusan: 'Sistem Informasi',
            email: 'hattaasrirahman@gmail.com',
            photo: '/image/IMG_3006.jpg'
        };
        res.render('index', { profile });
    } else {
        res.send('Invalid email or password');
    }
});

app.get('/user/profile', (req, res) => { 
    const profile = {
        name: 'Hatta Asri Rahman',
        nim: '2211522012',
        jurusan: 'Sistem Informasi',
        email: 'hattaasrirahman@gmail.com',
        photo: '/image/IMG_3006.jpg'
    };
    res.render('index', { profile });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
