<template>
  <div>
    <!-- Hero Section -->
    <section class="py-8 md:py-12">
      <div class="w-full mx-auto max-w-7xl px-4">
        <div class="md:max-w-2xl">
          <h1 class="text-3xl md:text-4xl text-white/95 tracking-tight">
            <KiAccent>童</KiAccent>歌
          </h1>
          <p class="mt-2 text-sm md:text-base text-white/80">
            祈りは忘れられ、調べだけが継ぐ
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
              src="/images/futakojizou.jpg"
              alt="ふたこじぞう"
              class="w-full h-96 lg:h-[500px] object-cover rounded-lg"
              loading="lazy"
            />
          </div>

          <!-- Content -->
          <div class="order-1 lg:order-2 flex flex-col justify-between h-full">
            <div class="space-y-4">
              <div>
                <h2 class="text-lg md:text-xl font-semibold text-white/95 mb-3">
                  童歌「ふたこじぞう」
                </h2>
                <div
                  class="text-xs md:text-sm text-white/80 leading-relaxed space-y-3"
                >
                  <p class="leading-[2] mb-6">
                    <KiAccent>じぞうさま　じぞうさま</KiAccent><br />
                    <KiAccent>どちらの子が　ピーヒョロロ</KiAccent><br />
                    <KiAccent>ひび割れた　ひび割れた</KiAccent><br />
                    <KiAccent>あたまおなか　手とあし</KiAccent><br />
                    <KiAccent>ぱちぱち燃えたら</KiAccent><br />
                    <KiAccent>川へゆく　川へゆく</KiAccent>
                  </p>

                  <p>
                    この村では古くから童歌が残っている。
                    「ふたこじぞう」と呼ばれるこの歌は、村にある2体の並んだ地蔵にちなんだものだと思われているが、その由来は本来、過去の古い『しきたり』からくるものである。
                  </p>

                  <p>
                    今では子供たちも歌の意味を知らない。祖父母から教わり、ただ手遊びをしながら楽しげに口ずさむだけだ。<br />
                    かつて毎晩誰かが小さな地蔵を焚べていた頃、この歌は村人たちにとって祈りであり、覚悟でもあった。
                    小さな痛みを引き受けることで、大きな災いから村を守る——その『しきたり』の記憶だけが、子守唄のように今も残っている。
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
