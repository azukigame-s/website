<template>
  <div>
    <!-- Hero -->
    <section id="mv" class="relative w-full h-screen min-h-[100vh]">
      <ClientOnly>
        <KiMovieBackground video-id="Qrx7Ahl8tnM" />
      </ClientOnly>
      <div class="noise absolute inset-0 pointer-events-none"></div>
    </section>

    <section
      id="hero"
      class="h-screen min-h-[100vh] py-8 md:py-20 border-t border-base-line flex items-center"
    >
      <div class="w-full mx-auto max-w-7xl px-4">
        <div class="md:max-w-2xl">
          <h1 class="text-4xl md:text-5xl text-white/95 tracking-tight">
            <KiAccent>キ</KiAccent>ミノコエ
          </h1>
          <p class="mt-3 text-base text-white/80">
            失った記憶を、声で辿るアドベンチャー＆ノベルゲーム。
          </p>
          <div class="mt-6 flex gap-3">
            <a
              href="#characters"
              @click.prevent="scrollToSection('characters')"
              class="px-5 py-2 border border-base-line hover:border-white/80 transition"
              >キャラクター</a
            >
            <a
              href="#system"
              @click.prevent="scrollToSection('system')"
              class="px-5 py-2 border border-base-line hover:border-white/80 transition"
              >システム</a
            >
            <a
              href="#lore"
              @click.prevent="scrollToSection('lore')"
              class="px-5 py-2 border border-base-line hover:border-white/80 transition"
              >資料室</a
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Characters -->
    <section
      id="characters"
      class="h-screen min-h-[100vh] py-8 md:py-24 border-t border-base-line flex items-center overflow-hidden"
    >
      <div class="mx-auto max-w-7xl px-4 w-full">
        <header class="mb-6 md:mb-8">
          <h2 class="text-2xl md:text-3xl font-semibold">キャラクター</h2>
          <p class="text-sm md:text-base text-base-mute mt-2">
            それぞれの想い。キミの想い。
          </p>
        </header>
        <div class="flex gap-4 md:gap-6 overflow-x-auto pb-4 scrollbar-hide">
          <article
            v-for="ch in characters"
            :key="ch.name"
            class="flex-shrink-0 w-32 md:w-40 border border-base-line rounded-lg overflow-hidden group cursor-pointer"
          >
            <div class="relative h-[50vh] md:h-[60vh]">
              <img
                :src="ch.image"
                :alt="ch.name"
                class="w-full h-full object-cover object-top transition-transform group-hover:scale-105"
                loading="lazy"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <div class="absolute bottom-0 left-0 right-0 p-3">
                  <h3 class="text-sm md:text-base font-medium text-white">
                    {{ ch.name }}
                  </h3>
                  <p class="text-xs text-white/80 mt-1">{{ ch.role }}</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- System -->
    <section
      id="system"
      class="h-screen min-h-[100vh] py-8 md:py-24 border-t border-base-line flex items-center"
    >
      <div class="mx-auto max-w-7xl px-4">
        <header class="mb-8">
          <h2 class="text-3xl font-semibold">システム</h2>
          <p class="text-base-mute mt-2">
            アドベンチャーとノベル。ふたつの異なるゲーム性を組み合わせた、新しい体験。
          </p>
        </header>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="f in features"
            :key="f.title"
            class="p-5 border border-base-line rounded-lg"
          >
            <h3 class="text-lg font-medium">{{ f.title }}</h3>
            <p class="mt-1 text-sm text-base-mute">{{ f.text }}</p>
            <NuxtLink
              :to="`/system#${f.anchor}`"
              class="mt-3 inline-block text-sm text-white/80 hover:text-white"
              >詳しく →</NuxtLink
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Scrapbook -->
    <section
      id="lore"
      class="h-screen min-h-[100vh] py-8 md:py-24 border-t border-base-line flex items-center overflow-hidden"
    >
      <div class="mx-auto max-w-7xl px-4 w-full">
        <header class="mb-6 md:mb-8">
          <h2 class="text-2xl md:text-3xl font-semibold">資料室</h2>
          <p class="text-sm md:text-base text-base-mute mt-2">
            舞台となる地域・伝承・用語を静かに紐解く。
          </p>
        </header>
        <div class="flex gap-4 md:gap-6 overflow-x-auto pb-4 scrollbar-hide">
          <NuxtLink
            v-for="r in regions"
            :key="r.name"
            :to="`/scrapbook/${r.slug}`"
            class="flex-shrink-0 w-48 md:w-56 border border-base-line rounded-lg overflow-hidden group cursor-pointer hover:border-white/80 transition-colors"
          >
            <div class="relative h-[40vh] md:h-[50vh]">
              <img
                :src="r.image"
                :alt="r.name"
                class="w-full h-full object-cover transition-transform group-hover:scale-105"
                loading="lazy"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <div class="absolute bottom-0 left-0 right-0 p-3">
                  <h3 class="text-sm md:text-base font-medium text-white">
                    {{ r.name }}
                  </h3>
                  <p class="text-xs text-white/80 mt-1 line-clamp-2">
                    {{ r.summary }}
                  </p>
                  <div class="mt-2 text-xs text-white/60">読む →</div>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA（静かに） -->
    <section
      id="cta"
      class="h-screen min-h-[100vh] py-8 md:py-24 border-t border-base-line flex items-center"
    >
      <div
        class="mx-auto max-w-7xl px-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
      >
        <div>
          <h2 class="text-2xl md:text-3xl font-semibold">事前登録</h2>
          <p class="mt-2 text-base-mute">
            最新情報や限定特典を静かにお届けします。
          </p>
        </div>
        <div class="flex gap-3">
          <NuxtLink
            to="/"
            class="px-5 py-2 border border-base-line hover:border-base-text"
            >PIC Hub</NuxtLink
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// スムーズスクロール機能
const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}

// スクロール関数を更新
const scrollToSection = (sectionId: string) => {
  smoothScrollTo(sectionId)
}

// セクション単位スクロール制御
const sections = ['mv', 'hero', 'characters', 'system', 'lore', 'cta']
let currentSectionIndex = 0
let isScrolling = false

// マウススクロール制御
const handleWheel = (event: WheelEvent) => {
  if (isScrolling) return

  event.preventDefault()
  isScrolling = true

  if (event.deltaY > 0) {
    // 下スクロール
    if (currentSectionIndex < sections.length - 1) {
      currentSectionIndex++
      const nextSection = sections[currentSectionIndex]
      if (typeof nextSection === 'string') {
        smoothScrollTo(nextSection)
      }
    }
  } else {
    // 上スクロール
    if (currentSectionIndex > 0) {
      currentSectionIndex--
      const prevSection = sections[currentSectionIndex]
      if (typeof prevSection === 'string') {
        smoothScrollTo(prevSection)
      }
    }
  }
  setTimeout(() => {
    isScrolling = false
  }, 800) // モバイルでも適切に動作するよう時間を短縮
}

// タッチスクロール制御（モバイル対応）
const handleTouchStart = (event: TouchEvent) => {
  const touch = event.touches[0]
  if (!touch) return
  const startY = touch.clientY
  let startTime = Date.now()

  const handleTouchEnd = (event: TouchEvent) => {
    const touch = event.changedTouches[0]
    if (!touch) return
    const endY = touch.clientY
    const endTime = Date.now()
    const deltaY = startY - endY
    const deltaTime = endTime - startTime

    // スワイプの判定（距離と時間）
    if (Math.abs(deltaY) > 50 && deltaTime < 300) {
      if (deltaY > 0) {
        // 上スワイプ（下スクロール）
        if (currentSectionIndex < sections.length - 1) {
          currentSectionIndex++
          const nextSection = sections[currentSectionIndex]
          if (typeof nextSection === 'string') {
            smoothScrollTo(nextSection)
          }
        }
      } else {
        // 下スワイプ（上スクロール）
        if (currentSectionIndex > 0) {
          currentSectionIndex--
          const prevSection = sections[currentSectionIndex]
          if (typeof prevSection === 'string') {
            smoothScrollTo(prevSection)
          }
        }
      }
    }

    document.removeEventListener('touchend', handleTouchEnd)
  }

  document.addEventListener('touchend', handleTouchEnd)
}

// マウント時にスクロールイベントを追加
onMounted(() => {
  document.addEventListener('wheel', handleWheel, { passive: false })
  document.addEventListener('touchstart', handleTouchStart, { passive: true })
})

// アンマウント時にイベントを削除
onUnmounted(() => {
  document.removeEventListener('wheel', handleWheel)
  document.removeEventListener('touchstart', handleTouchStart)
})

// モックデータ（差し替え前提）
const characters = [
  {
    name: '主人公',
    role: '主人公',
    image: 'https://placehold.co/960x720',
    desc: '…………。',
    slug: '',
  },
  {
    name: 'スグ',
    role: '弟',
    image: usePublicPath('/images/sugu.jpg'),
    desc: '…………。',
    slug: '',
  },
  {
    name: 'イロ',
    role: '妹',
    image: 'https://placehold.co/960x720',
    desc: 'おかえり！　私のこと覚えてる？',
    slug: '',
  },
]
const features = [
  {
    title: 'アドベンチャー',
    text: '声に導かれるように、失われた過去の記憶が蘇る。',
    anchor: '',
  },
  {
    title: 'ノベル',
    text: '繊細な心情の変化や深い感情を追加体験する。',
    anchor: '',
  },
]
const regions = [
  {
    name: '地蔵焚',
    summary: '小さな罅が、大きな歪みを隠す村',
    image: usePublicPath('/images/jizoudaki.jpg'),
    slug: 'jizoudaki',
  },
  {
    name: '童歌',
    summary: '祈りは忘れられ、調べだけが継ぐ',
    image: usePublicPath('/images/futakojizou.jpg'),
    slug: 'warabeuta',
  },
  {
    name: '未定',
    summary: '考えてはいるが、まだ決まっていない',
    image: 'https://placehold.co/960x720',
    slug: '',
  },
]
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
