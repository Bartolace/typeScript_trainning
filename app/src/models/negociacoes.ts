import { Modelo } from "../interfaces/modelo.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements Modelo<Negociacoes> {
  //private negociacoes: Array<Negociacao> = [];
  private negociacoes: Negociacao[] = [];
  //simplificado
  public adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }

  public lista(): readonly Negociacao[] {
    //ReadonlyArray<Negociacao> - mais verboso
    // ...this.negociacoes]; cria um novo endereço de memoria. Deixando a verdadeira Negociacao livre.
    //mas podemos usar apenas usar o readonly
    return this.negociacoes;
  }

  public paraTexto(): string {
    return JSON.stringify(this.negociacoes, null, 2);
  }

  public ehIgual(negociacoes: Negociacoes): boolean {
    return JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes.lista())
  }
}
