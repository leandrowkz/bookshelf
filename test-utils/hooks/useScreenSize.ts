import { setMedia } from 'mock-match-media'

export function useScreenSize() {
  const set = (width: string, orientation = 'landscape') => {
    setMedia({
      width,
      type: 'screen',
      orientation,
    })
  }

  return { set }
}
