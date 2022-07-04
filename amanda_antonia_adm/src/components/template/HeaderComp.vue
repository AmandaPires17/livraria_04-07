<template>
  <header class="menu-superior">
    <div class="menu-esquerdo">
      <span>
        <RouterLink to="/">Home</RouterLink>
      </span>
      <span>|</span>
      <span>
        <RouterLink to="/livros">Livros</RouterLink>
      </span>
      <span>|</span>
      <span>
        <RouterLink to="/Autores">Autor</RouterLink>
      </span>
      <span>|</span>
      <span>
        <RouterLink to="/categorias">Categoria</RouterLink>
      </span>
      <span>|</span>
      <span>
        <RouterLink to="/editoras">Editoras</RouterLink>
      </span>
    </div>
    <div class="menu-direto">
      <span>
        <RouterLink to="/adm">ADM</RouterLink>
      </span>
    </div>
  </header>
</template>

<style>
header span {
  padding: 0 20px;
}

.menu-superior {
  justify-content: space-between;
}
</style>
