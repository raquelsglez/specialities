const express = require('express');
const app = express();

const usersData = [
    { id: 1, name: 'Alice', age: 28, specialty: 'marketing' },
    { id: 2, name: 'Bob', age: 35, specialty: 'developers' },
    { id: 3, name: 'Charlie', age: 30, specialty: 'developers' },
    { id: 4, name: 'David', age: 25, specialty: 'QAs' },
    { id: 5, name: 'Emma', age: 32, specialty: 'ventas' },
    { id: 6, name: 'Frank', age: 28, specialty: 'marketing' },
    { id: 7, name: 'Grace', age: 34, specialty: 'developers' },
    { id: 8, name: 'Hank', age: 27, specialty: 'QAs' },
    { id: 9, name: 'Ivy', age: 31, specialty: 'ventas' },
    { id: 10, name: 'Jack', age: 29, specialty: 'marketing' },
    { id: 11, name: 'Karen', age: 36, specialty: 'developers' },
    { id: 12, name: 'Leo', age: 26, specialty: 'QAs' },
    { id: 13, name: 'Mia', age: 33, specialty: 'ventas' },
    { id: 14, name: 'Nathan', age: 30, specialty: 'marketing' },
    { id: 15, name: 'Olivia', age: 37, specialty: 'developers' },
    { id: 16, name: 'Paul', age: 24, specialty: 'QAs' },
    { id: 17, name: 'Quinn', age: 32, specialty: 'ventas' },
    { id: 18, name: 'Ryan', age: 28, specialty: 'marketing' },
    { id: 19, name: 'Sara', age: 35, specialty: 'developers' },
    { id: 20, name: 'Tom', age: 29, specialty: 'QAs' },
    { id: 21, name: 'Uma', age: 30, specialty: 'ventas' },
    { id: 22, name: 'Victor', age: 27, specialty: 'marketing' },
    { id: 23, name: 'Wendy', age: 34, specialty: 'developers' },
    { id: 24, name: 'Xander', age: 31, specialty: 'QAs' },
    { id: 25, name: 'Yara', age: 33, specialty: 'ventas' },
    { id: 26, name: 'Zack', age: 28, specialty: 'marketing' },
    { id: 27, name: 'Ava', age: 36, specialty: 'developers' },
    { id: 28, name: 'Bryan', age: 26, specialty: 'QAs' },
    { id: 29, name: 'Cynthia', age: 32, specialty: 'ventas' },
    { id: 30, name: 'Derek', age: 30, specialty: 'marketing' },
];

function usersSpecialty(specialty){
    const users = [];

    usersData.forEach(user => {
        if(user.specialty === specialty) {
            users.push(user);
        };
    });

    return users;
};

app.get('/', (req, res) => {
    res.send(`<h1>Home</h1>
              <p><a href="/marketing">Marketing</a></p>
              <p><a href="/developers">Developers</a></p>
              <p><a href="/QAs">QAs</a></p>
              <p><a href="/ventas">Ventas</a></p>`);
});
  
app.get('/marketing', (req, res) => {
    let marketingUsers = usersSpecialty('marketing');
    
    let userInfo = '';
    marketingUsers.forEach(user => {
        userInfo += `<ul><li>id: ${user.id}, Nombre: ${user.name}, Edad: ${user.age}</li></ul>`;
    });

    res.send(`<h1>Marketing</h1>
            <h2>Total de usuarios: ${marketingUsers.length}</h2>
            ${userInfo}
            <p><a href="/">Home</a></p>
            <p><a href="/developers">Developers</a></p>
            <p><a href="/QAs">QAs</a></p>
            <p><a href="/ventas">Ventas</a></p>`);
});

app.get('/developers', (req, res) => {
    let developerUsers = usersSpecialty('developers');
    
    let userInfo = '';
    developerUsers.forEach(user => {
        userInfo += `<ul><li>id: ${user.id}, Nombre: ${user.name}, Edad: ${user.age}</li></ul>`;
    });
    
    res.send(`<h1>Developers</h1>
            <h2>Total de usuarios: ${developerUsers.length}</h2>
            ${userInfo}
            <p><a href="/">Home</a></p>
            <p><a href="/marketing">Marketing</a></p>
            <p><a href="/QAs">QAs</a></p>
            <p><a href="/ventas">Ventas</a></p>`);
});
  
app.get('/QAs', (req, res) => {
    let QAsUsers = usersSpecialty('QAs');
    
    let userInfo = '';
    QAsUsers.forEach(user => {
        userInfo += `<ul><li>id: ${user.id}, Nombre: ${user.name}, Edad: ${user.age}</li></ul>`;
    });
    
    res.send(`<h1>QAs</h1>
            <h2>Total de usuarios: ${QAsUsers.length}</h2>
            ${userInfo}
            <p><a href="/">Home</a></p>
            <p><a href="/marketing">Marketing</a></p>
            <p><a href="/developers">Developers</a></p>
            <p><a href="/ventas">Ventas</a></p>`);
});
  
app.get('/ventas', (req, res) => {
    let ventasUsers = usersSpecialty('ventas');

    let userInfo = '';
    ventasUsers.forEach(user => {
        userInfo += `<ul><li>id: ${user.id}, Nombre: ${user.name}, Edad: ${user.age}</li></ul>`;
    });
    
    res.send(`<h1>Ventas</h1>
            <h2>Total de usuarios: ${ventasUsers.length}</h2>
            ${userInfo}
            <p><a href="/">Home</a></p>
            <p><a href="/marketing">Marketing</a></p>
            <p><a href="/developers">Developers</a></p>
            <p><a href="/QAs">QAs</a></p>`);
});
  
app.use((req, res) => {
    res.status(404).send('<h1>Página no encontrada</h1><a href="/">home</a>');
});
  
app.listen(3000, () => {
    console.log('Node.js está escuchando en el puerto 3000');
});
