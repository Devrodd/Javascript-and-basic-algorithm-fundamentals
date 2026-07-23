const produto = {
    nome: "PC",
    preco: 3000.0
}

// JSON é um padrão universal de representar dados na forma de texto

const obj1 = {
    "nome": "Notebook",
    "preco": 3000.0,
    "due-date": "2026-07-22"
}

const obj2 = {
    "nome": "sorvete",
    "preco": 5.0,
    "due-date": "2026-07-22"
}

const obj3 = {
    id: 53,
    date: "2021-10-20",
    items: [
        {
            description: "celular",
            price: 1499.99,
            quantity: 1
        },

        {
            description: "Mouse",
            price: 100.0,
            quantity: 2
        }
    ],
    cliente: {
        name: "Bernardo filho",
        email: "bernardofilho@email.com",
        active: true
    }
};

console.log(obj1);
console.log(obj2);
console.log(obj3);

// Navegando pelo objeto

console.log(obj3.date);
console.log(obj3.cliente);
console.log(obj3.cliente.name);

// Parse / stringify

const txt = `{"name": "PC", "price": 50.9, "due-date": "2025-04-05"}`;