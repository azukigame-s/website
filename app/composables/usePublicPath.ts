export const usePublicPath = (path: string) => {
  const config = useRuntimeConfig()
  const baseURL = config.app.baseURL

  // 先頭のスラッシュを除去
  const cleanPath = path.startsWith('/') ? path.slice(1) : path

  return `${baseURL}${cleanPath}`
}
