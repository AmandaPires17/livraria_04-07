<script>
import { v4 as uuid} from "uuid";
export default {
  data() {
    return {
      novo_livro: "",
      livros: [
        { id: "98940c1e-e312-4f81-801b-ec969b2e6ed4", name: "A Cinco Passos de Você" },
        { id: "3f8e15ef-cf81-4596-9f02-e51a6a9b38a3", name: "Orgulho e Preconceito" },
        { id: "2be66caf-d783-426e-8723-55f518c06a6f", name: "Através da Minha Janela" },
        { id: "9a7c7c02-874d-4556-8a13-4a33c56571d1", name: "Como Eu Era Antes de Você" },
      ],
    };
  },
  methods: {
    salvar() {
      if (this.novo_livro !== ""){
        const novo_id=uuid();
        this.livros.push({
          id: novo_id,
          name: this.novo_livro,
        });
        this.novo_livro = "";
      }
    },
    excluir(livro){
      const indice = this.livros.indexOf(livro);
      this.livros.splice(indice, 1);
    },
  },
};
</script>
<template>
  <div class="container">
    <div class="title">
      <h2>Gerenciamento de Livros</h2>
    </div>
    <div class="form-input">
      <input type="text" placeholder="Nome" v-model="novo_livro" @keypress.enter="salvar" />
      <button @click="salvar">Salvar</button>
    </div>
    <div class="list-items">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="livro in livros" :key="livro.id">
            <td>{{ livro.id }}</td>
            <td>{{ livro.name }}</td>
            <td>
              <button @click="excluir(livro)">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style></style>
