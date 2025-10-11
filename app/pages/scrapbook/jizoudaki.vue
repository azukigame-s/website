<template>
  <div>
    <!-- Hero Section -->
    <section class="py-8 md:py-12">
      <div class="w-full mx-auto max-w-7xl px-4">
        <div class="md:max-w-2xl">
          <h1 class="text-3xl md:text-4xl text-white/95 tracking-tight">
            地蔵焚
          </h1>
          <p class="mt-2 text-sm md:text-base text-white/80">
            小さな罅が、大きな歪みを隠す村
          </p>
        </div>
      </div>
    </section>

    <!-- Content Section -->
    <section class="py-8 md:py-12 border-t border-base-line">
      <div class="mx-auto max-w-7xl px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <!-- Image -->
          <div class="order-2 lg:order-1">
            <img
              src="/images/jizoudaki.jpg"
              alt="地蔵焚"
              class="w-full h-96 lg:h-[500px] object-cover rounded-lg"
              loading="lazy"
            />
          </div>

          <!-- Content -->
          <div class="order-1 lg:order-2 flex flex-col justify-between h-full">
            <div class="space-y-4">
              <div>
                <h2 class="text-lg md:text-xl font-semibold text-white/95 mb-3">
                  地蔵焚（じぞうだき）の由来
                </h2>
                <div
                  class="text-xs md:text-sm text-white/80 leading-relaxed space-y-3"
                >
                  <p>
                    主人公の故郷である地蔵焚（じぞうだき）。北に海、南に山と自然豊かなその村は、かつて古い『しきたり』を守っていた。
                  </p>

                  <p>
                    この村では兄弟それぞれが小さな地蔵を持つことにしていた。<br />
                    兄弟が同時に病むと、どちらかの枕元に置いた地蔵を囲炉裏で焚べる。最初に罅の入った部分が「引き受けた病の場所」とされ、燃やしたその地蔵は川に流す。<br />
                    燃やさなかった地蔵を持つ兄弟は必ず快復するが、引き受けた側は床に伏す。
                  </p>

                  <p>
                    やがて村人たちは気づいた——小さな地蔵を焚き続ければ、大きな災いを無数の小さな痛みに分けて払えることに。
                  </p>

                  <p>
                    この『しきたり』が根付き、村では毎晩、誰かが順番に小さな地蔵を火に焚べるようになった。<br />
                    罅の入る音が聞こえるたび、村のどこかで誰かが小さく咳をし、指先を切り、階段で躓く。<br />
                    燃やされた地蔵は山から流れる川へ——村人は「兄の水」「弟の水」と呼ぶ二筋の流れに、交互に流していく。
                  </p>

                  <p>
                    今ではそんな『しきたり』も忘れ去られているが、村の端には焚き場の跡が残っている。<br />
                    地蔵を焚くことで災いを退ける……いつしかこの地は地蔵焚と呼ばれるようになった。
                  </p>
                </div>
              </div>
            </div>

            <!-- Navigation -->
            <div class="mt-6 pt-4 border-t border-base-line">
              <NuxtLink
                to="/"
                class="inline-block text-xs md:text-sm text-white/80 hover:text-white transition"
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
      content: '小さな罅が、大きな歪みを隠す村',
    },
  ],
})
</script>

<style scoped>
/* 必要に応じて追加のスタイル */
</style>
