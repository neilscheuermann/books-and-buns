import { useMediaQuery } from 'react-responsive'
import { TABLET_WIDTH_MAX } from '../constants'

const useReactResponsive = () => {
  const isTabletOrMobileDevice = useMediaQuery({
    query: `(max-device-width: ${TABLET_WIDTH_MAX})`,
  })
  const isTabletOrMobile = useMediaQuery({
    query: `(max-width: ${TABLET_WIDTH_MAX})`,
  })

  return { isMobile: isTabletOrMobileDevice || isTabletOrMobile }
}

export default useReactResponsive
