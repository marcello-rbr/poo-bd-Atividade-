let db = require("./db");
let Cliente = require("./model/Cliente");

async function sincronizar(){
    await db.sync();
}

async function inserir(obj) {
   let res = await Cliente.create(obj)
    console.log(res);
}

let cliente1 = {nome: joao_marcello, endereco: Rua_Abel_da_Silva};
inserir(cliente1);

let cliente2 = {nome: marcellin, endereco: rua_0800};
inserir(cliente2);

let cliente3 = {nome: joaozin, endereco: rua_do_carrin_sem_freio};
inserir(cliente3);

let cliente4 = {nome:chiquin, endereco: rua_picole_da_silva};
inserir(cliente4);

let cliente5 = {nome:carlinha, endereco: rua_luiz_gonzaga};
inserir(cliente5);



async function consultar() {
    let resultado = await Cliente.findAll();
    console.log(resultado[0]);
}
consultar();

async function consultar() {
    let resultado = await cliente1.findAll();
    console.log(resultado[0]);
}
consultar();

async function consultar() {
    let resultado = await cliente2.findAll();
    console.log(resultado[0]);
}
consultar();

async function consultar() {
    let resultado = await cliente3.findAll();
    console.log(resultado[0]);
}
consultar();

async function consultar() {
    let resultado = await cliente4.findAll();
    console.log(resultado[0]);
}
consultar();

async function consultar() {
    let resultado = await cliente6.findAll();
    console.log(resultado[0]);
}
consultar();