<template>
  <div ref="videoContainer" class="relative w-full bg-black video-container">
    <div :id="playerId" class="absolute top-0 left-0 w-full h-full" />
  </div>
</template>

<script setup lang="js">
const { isMuted } = useVideoMute()

///// props

const props = defineProps({
  videoId: {
    type: String,
    required: true,
  },
  playerId: {
    type: String,
    default: 'youtube-player',
  },
})

///// data

const videoContainer = ref(null)
let player = null

///// watch

watch(
  () => isMuted.value,
  (newValue) => {
    if (!player) return

    if (newValue) {
      player.unMute()
    } else {
      player.mute()
    }
  }
)

///// mounted

onMounted(() => {
  if (!window.YT) {
    const tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'
    const firstScriptTag = document.getElementsByTagName('script')[0]
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
  }

  const initPlayer = () => {
    player = new window.YT.Player(props.playerId, {
      videoId: props.videoId,
      playerVars: {
        autoplay: 1,
        mute: 1,
        loop: 1,
        playlist: props.videoId,
        controls: 0,
        showinfo: 0,
        modestbranding: 1,
        rel: 0,
        playsinline: 1,
      },
      events: {
        onReady: (event) => {
          event.target.playVideo()
        },
      },
    })
  }

  if (window.YT && window.YT.Player) {
    initPlayer()
  } else {
    window.onYouTubeIframeAPIReady = initPlayer
  }
})

///// unmounted

onUnmounted(() => {
  if (player && player.destroy) {
    player.destroy()
  }
})
</script>

<style lang="css" scoped>
.video-container {
  padding-bottom: 56.25%;
  min-height: 50vh;
}

@media (max-width: 768px) {
  .video-container {
    min-height: 50vh;
  }
}
</style>
