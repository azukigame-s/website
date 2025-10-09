// composables/useVideoMute.ts
export const useVideoMute = () => {
  const isMuted = useState('videoMuted', () => true)

  const toggleMute = () => {
    isMuted.value = !isMuted.value
  }

  return {
    isMuted,
    toggleMute,
  }
}
