<script>
export default {
  props: ['item']
}
</script>
<template>
  <RouterLink class="block" :to="item">
    <h1>{{ item }}</h1>
  </RouterLink>
</template>