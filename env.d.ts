// / <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_APP_BASE_URL: string
  // Другие переменные окружения
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
