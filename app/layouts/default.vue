<template>
  <div class="main">
    <p>Some default layout content shared across all pages</p>
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
  --kiminokoe-main-color: #000000;
  --kiminokoe-max-width: 1080px;
}

/* Font Family */

@font-face {
  font-family: 'Noto Serif JP';
  src: url('assets/font/NotoSerifJP-VariableFont_wght.ttf') format('ttf');
}

.main {
  max-width: var(--kiminokoe-max-width);
  margin: auto;

  font-family: 'Noto Serif JP', serif;
  font-optical-sizing: auto;
  font-style: normal;
}
</style>
