const usuario = {
  login: "admin",
  senha: "1234",
  tipo: "administrador"
};

console.log(`O login do ${usuario.tipo} é ${usuario.login} e a senha é ${usuario.senha}, muito fraca por sinal.`);

const aluno = {
  nome: "Nikolas Silva",
  curso: "Desenvolvimento de Sistemas",
  turma: "2º DS"
};

console.log(`O aluno ${aluno.nome} está matriculado no curso de ${aluno.curso}, na turma ${aluno.turma}.`);


const professor = {
  nome: "Eduardo",
  disciplina: "JavaScript",
  turno: "manhã"
};

console.log(`O professor ${professor.nome} ministra a disciplina de ${professor.disciplina} no turno da ${professor.turno}.`);

const empresa = {
  nome: "Tech Solutions",
  area: "Tecnologia",
  cidade: "São Paulo" 
};

console.log(`A empresa ${empresa.nome} atua na área de ${empresa.area} e fica em ${empresa.cidade}.`);


const computador = {
  marca: "Dell",
  processador: "Intel i5",
  memoria: "8GB"
};

console.log(`O computador da marca ${computador.marca} possui processador ${computador.processador} e memória de ${computador.memoria}.`);



const livro = {
  titulo: "JavaScript Básico",
  autor: "Ana Silva",
  paginas: 200
};

console.log(`O livro ${livro.titulo} foi escrito por ${livro.autor} e possui ${livro.paginas} páginas.`);



const filme = {
  nome: "Matrix",
  genero: "Ficção",
  ano: 1999
};

console.log(`O filme ${filme.nome} é do gênero ${filme.genero} e foi lançado em ${filme.ano}.`);

const conta = {
  usuario: "eduardo",
  senha: "1234",
  nivel: "administrador"
};

console.log(`O usuário ${conta.usuario} possui nível ${conta.nivel} e utiliza a senha ${conta.senha}, muito fraca por sinal.`);


const escola  = { 

  Nome: "Escola Sesi",
  cidade: "Guarulhos",
  turno: "Manhã" 



}; 


const Usuario = {
  usuario: "nikolas silva",
  senha: "1234",
  nome: "Nikolas Silva",
  email: "nikolassilvamatos@email.com",
  nivel: "administrador",
  curso: "Desenvolvimento de Sistemas",
  turma: "DS 1 ",
  idade: 18
};

    
console.log("Nome do usuário:", Usuario.usuario);
console.log("Nome completo:", Usuario.nome);
console.log("E-mail:", Usuario.email);
console.log("Curso:", Usuario.curso);
console.log("Turma:", Usuario.turma);
console.log("Idade:", Usuario.idade);
console.log("Nível de acesso:", Usuario.nivel);
console.log("Senha:", Usuario.senha);


const mensagem = `O usuário ${Usuario.usuario}, de ${Usuario.idade} anos, está matriculado no curso de ${Usuario.curso}, turma ${Usuario.turma}. Seu nível de acesso é ${Usuario.nivel} e seu e-mail é ${Usuario.email}. A senha cadastrada é ${Usuario.senha}.`;

console.log(mensagem);








