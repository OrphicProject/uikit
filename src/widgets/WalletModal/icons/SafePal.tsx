import React from 'react'
import Svg from '../../../components/Svg/Svg'
import { SvgProps } from '../../../components/Svg/types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 31 35" fill="none" {...props}>
      <path d="M31,20.5V23c0,7-10.2,11-13.3,12l0,0l-1.1,0.4v-4.3l0.6-0.2c4.9-1.8,9.8-4.9,9.8-7.9l0,0  v-2.5H31z M15.5,0l4.2,1.3v4.4l-4.2-1.3l-0.3,0.1v9.9h4.4v4.1h-4.4v16.8l-1.2-0.4c-0.5-0.2-1.4-0.5-2.5-1l0,0l-0.5-0.2V1.3L15.5,0z   M9.8,1.8v4.4L4.1,7.9v6.5h5.7v18.9l-1.3-0.6c-3.9-2-8.5-5.3-8.5-10l0,0v-2.2h4.1v2.2c0,1,0.5,2,1.5,3l0,0v-7.2H0V4.7L9.8,1.8z   M20.9,1.7l10,3.1v13.8h-5.9v6c0,0-1.3,1.7-4.1,3.1c0-0.8,0-12.9,0-20.3L20.9,1.7z M25.1,7.3v7.1h1.8V7.9L25.1,7.3z" />
    </Svg>
  )
}

export default Icon
