const chai = require("chai");
const chaiHttp = require("chai-http"); // simular uma request a nossa API, ou seja, criar seu próprio listen()
const sinon = require("sinon"); // cria os dubles (stubs) para a função de leitura 'fs'

const app = require("../../src/app");
const connection = require("../../src/db/connection");

const { expect, use } = chai;

use(chaiHttp);

const peopleList = [
  {
    id: 1,
    firstName: "Luke",
    lastName: "Skywalker",
    email: "luke.skywalker@trybe.com",
    phone: "851 678 4453",
  },
  {
    id: 2,
    firstName: "Dart",
    lastName: "Vader",
    email: "dart.vader@trybe.com",
    phone: "851 678 5665",
  },
];

describe("Testando os endpoints de people", function () {
  it("Testando o cadastro de uma pessoa ", async function () {
    sinon.stub(connection, "execute").resolves([{ insertId: 42 }]);

    const response = await chai.request(app).post("/people").send({
      firstName: "Luke",
      lastName: "Skywalker",
      email: "luke.skywalker@trybe.com",
      phone: "851 678 4453",
    });

    expect(response.status).to.equal(201);
    expect(response.body).to.deep.equal({
      message: "Pessoa cadastrada com sucesso com o id 42",
    });
  });
  it("Testando a listagem de todas as pessoas", async function () {
    sinon.stub(connection, "execute").resolves([peopleList]);
    const response = await chai.request(app).get("/people");

    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal(peopleList);
  });

  afterEach(sinon.restore);
});
