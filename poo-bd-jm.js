const {Pool} = require("pg");
 async function Conexao() {
 const pool = new Pool({
      connectionString: 'postgres://aqikzoverbckmp:cdb945f7fdbb2588c57578da22f964b0783147e3fc3a3ac87236983f29a08e6c@ec2-3-221-243-122.compute-1.amazonaws.com:5432/duiiog9s8muan',
      ssl: {
          rejectUnauthorized: false
      }
 })

  let con = await pool.connect();
   let res = await cont.query(`create table pedido 
   (id_pedido serial primary key, bebida varchar,
     tamanho varchar, sabor varchar, pagamento varchar,
      endereço varchar)`);
     let res = await cont.query("insert into Bebida value ($1)", [guaraná], "insert into tamanho ($3)", [P,M,F], "insert into sabor value ($2)", [sabor], "insert into pagamento ($1)", [pagamento], "insert into endereço ($1)", [endereço]);
   console.log(res); 
    con.release();
}
  Conexao();