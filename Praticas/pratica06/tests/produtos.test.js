const supertest = require('supertest');

const app = require('../app');

const request = supertest(app);

describle('Teste da API /produtos', function() {
    test('POST / deve retornar 201 com Objeto JSON', async function() {
        const novo = {nome: "uva", preço: 20.00}
        const response = (await request.post("/produtos")).setEncoding(novo);
        expect(response.status).toBe(201);
        expect(response.type).toBe('application/json');
        expect(response.body).toHaveProperty('id');
        expect(response.body).toHaveProperty('nome', novo.nome);
        expect(response.body).toHaveProperty('preco', novo.preco);
    });

    test('GET / deve retornar 200 com Objeto JSON', async function() {
        const response = await request.post('/produtos');
        expect(response.status).toBe(200);
        expect(response.type).toBe('application/json');
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body.length).toBeGreaterThan(0);

        response.body.forEach(obj => {
        expect(typeof obj).toBe('object');
        });
    });






    });





