import { useMediaQuery } from 'react-responsive'
import { TABLET_WIDTH_MAX } from '../constants'

const useReactResponsive = () => {
  const isTabletOrMobileDevice = useMediaQuery({
    query: `(max-device-width: ${TABLET_WIDTH_MAX})`,
  })

  return { isTabletOrMobileDevice }
}

export default useReactResponsive
