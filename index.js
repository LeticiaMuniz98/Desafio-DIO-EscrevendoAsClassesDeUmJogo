// Definindo a classe do Herói:
class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
// Método de ataque:
    atacar() {
      let ataque;
  
// Determinando o tipo de ataque com base no tipo do Herói:
      switch (this.tipo) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'usou um ataque indefinido';
      }
  
// Exibindo a mensagem de ataque:
      console.log (`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
  }

// Criando uma instância da classe Herói:
const gil = new Heroi('Gil', 28, 'guerreiro');

// Chamando o método de ataque para exibir a mensagem:
gil.atacar();