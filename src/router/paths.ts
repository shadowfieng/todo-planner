type Path = {
  name: string
  value: string
}

export const PATHS: Record<string, Path> = {
  HOME: { name: 'Home', value: '/' },
  ABOUT: { name: 'About', value: '/about' }
} as const
