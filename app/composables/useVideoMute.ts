// composables/useVideoMute.ts
export const useVideoMute = () => {
  const isMuted = useState('videoMuted', () => false)

  const toggleMute = () => {
    isMuted.value = !isMuted.value
  }

  return {
    isMuted,
    toggleMute,
  }
}
