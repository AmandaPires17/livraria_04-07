<script>
import { v4 as uuid} from "uuid";
export default {
  data() {
    return {
      nova_categoria: "",
      categorias: [
        { id: "98940c1e-e312-4f81-801b-ec969b2e6ed4", name: "Terror" },
        { id: "3f8e15ef-cf81-4596-9f02-e51a6a9b38a3", name: "Romance" },
        { id: "2be66caf-d783-426e-8723-55f518c06a6f", name: "Aventura" },
        { id: "9a7c7c02-874d-4556-8a13-4a33c56571d1", name: "Ficção" },
      ],
    };
  },
  methods: {
    salvar() {
      if (this.nova_categoria !== ""){
        const novo_id=uuid();
        this.categorias.push({
          id: novo_id,
          name: this.nova_categoria,
        });
        this.nova_categoria = "";
      }
    },
    excluir(categoria){
      const indice = this.categorias.indexOf(categoria);
      this.categorias.splice(indice, 1);
    },
  },
};
</script>
<template>
  <div class="container">
    <div class="title">
      <h2>Gerenciamento de Categorias</h2>
    </div>
    <div class="form-input">
      <input type="text" placeholder="Nome" v-model="nova_categoria" @keypress.enter="salvar" />
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
          <tr v-for="categoria in categorias" :key="categoria.id">
            <td>{{ categoria.id }}</td>
            <td>{{ categoria.name }}</td>
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
