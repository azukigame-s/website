<template>
  <div class="main">
    <p>Some default layout content shared across all pages</p>
    <slot />
  </div>
</template>

<script setup lang="ts">
///// Header
useHead({
  title: 'キミノコエ',
})
</script>

<style>
:root {
  --kiminokoe-main-color: #000000;
  --kiminokoe-max-width: 1080px;
}

.main {
  max-width: var(--kiminokoe-max-width);
  margin: auto;
}
</style>
