<script>
import BlocoHome from "@/components/BlocoHome.vue";
;
export default {
  components: { BlocoHome },
};
</script>

<template>
  <main id="content" class="content">
   <BlocoHome class="bloco1" item="Livros"/>
   <BlocoHome class="bloco2" item="Editoras"/>
   <BlocoHome class="bloco3" item="Categorias"/>
   <BlocoHome class="bloco4" item="Autores"/>
  </main>
</template>


<style scoped>
.content {
  display: flex;
  flex-wrap: wrap;
}
</style>