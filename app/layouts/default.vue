<template>
  <KiNavbar />
  <div class="main">
    <slot />
  </div>
</template>

<script setup lang="ts">
///// seo

useSeoMeta({
  // テスト環境用設定
  robots: () => {
    return { noindex: true }
  },
})

///// Header

useHead({
  title: 'キミノコエ',
})
</script>

<style>
:root {
  --ki-main-color: #ffffff;
  --ki-accent-color: #b92a4f;
  --ki-base-color: #000000;
  --ki-max-width: 1080px;
}

/* Font Family */

@font-face {
  font-family: 'Noto Serif JP';
  src: url('assets/font/NotoSerifJP-VariableFont_wght.ttf') format('ttf');
}

body {
  background-color: var(--ki-base-color);
  color: var(--ki-main-color);
  font-family: 'Noto Serif JP', serif;
  font-optical-sizing: auto;
  font-style: normal;
}

.main {
  max-width: var(--ki-max-width);
  margin: auto;
}
</style>
