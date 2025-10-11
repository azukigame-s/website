<template>
  <div>
    <!-- Hero Section -->
    <section class="py-12 md:py-20">
      <div class="w-full mx-auto max-w-7xl px-4">
        <div class="md:max-w-2xl">
          <h1 class="text-4xl md:text-5xl text-white/95 tracking-tight">
            地蔵焚
          </h1>
          <p class="mt-3 text-base text-white/80">
            理科準備室の鍵は、まだ戻っていない。
          </p>
        </div>
      </div>
    </section>

    <!-- Content Section -->
    <section class="py-16 md:py-24 border-t border-base-line">
      <div class="mx-auto max-w-7xl px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <!-- Image -->
          <div class="order-2 lg:order-1">
            <img
              src="https://picsum.photos/seed/d/800/600"
              alt="地蔵焚"
              class="w-full h-96 lg:h-[500px] object-cover rounded-lg"
              loading="lazy"
            />
          </div>

          <!-- Content -->
          <div class="order-1 lg:order-2">
            <div class="space-y-6">
              <div>
                <h2 class="text-2xl font-semibold text-white/95 mb-4">
                  理科準備室の鍵
                </h2>
                <p class="text-base text-white/80 leading-relaxed">
                  夕暮れ時、理科準備室の鍵が戻っていないことに気づいたのは、彼女が最後に使った時だった。鍵は机の上に置いたはずなのに、今はそこにない。窓の外では、地蔵焚の煙が静かに立ち上っている。
                </p>
              </div>

              <div>
                <h3 class="text-lg font-medium text-white/90 mb-3">
                  静寂の記憶
                </h3>
                <p class="text-sm text-base-mute leading-relaxed">
                  準備室には、いつもと変わらない静寂が漂っている。実験器具が整然と並び、黒板には今日の授業の痕跡が残っている。しかし、何かが違う。空気が重く、時間の流れが遅くなったような感覚。
                </p>
              </div>

              <div>
                <h3 class="text-lg font-medium text-white/90 mb-3">夜の訪れ</h3>
                <p class="text-sm text-base-mute leading-relaxed">
                  外では地蔵焚の火が燃え続けている。その煙は、学校の窓からも見える。昔から、この時期になると地蔵焚が行われる。しかし、今年は何かが違う。煙の向こうから、かすかな声が聞こえてくるような気がする。
                </p>
              </div>
            </div>

            <!-- Navigation -->
            <div class="mt-8 pt-6 border-t border-base-line">
              <NuxtLink
                to="/"
                class="inline-block text-sm text-white/80 hover:text-white transition"
              >
                ← トップページに戻る
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// ページのメタデータ
useHead({
  title: '地蔵焚 - キミノコエ',
  meta: [
    {
      name: 'description',
      content:
        '理科準備室の鍵は、まだ戻っていない。地蔵焚の煙が立ち上る中で、静かな恐怖が始まる。',
    },
  ],
})
</script>

<style scoped>
/* 必要に応じて追加のスタイル */
</style>
