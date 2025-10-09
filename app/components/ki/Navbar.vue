<template>
  <header
    class="sticky z-40 top-0 bg-white/10 backdrop-blur-sm w-full flex justify-center"
  >
    <div class="container flex h-14 max-w-screen-2xl items-center px-4">
      <NuxtLink to="/">
        <div class="md:mr-1 md:flex"><KiAccent>キ</KiAccent>ミノコエ</div>
      </NuxtLink>
      <div class="flex flex-1 items-center justify-end space-x-2">
        <Volume2 v-if="isMuted" @click="toggleMute" />
        <VolumeOff v-else @click="toggleMute" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { VolumeOff, Volume2 } from 'lucide-vue-next'
const { isMuted, toggleMute } = useVideoMute()
</script>
