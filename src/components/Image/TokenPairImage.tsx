import React from 'react'

import { TokenPairImageProps, variants } from './types'
import { StyledPrimaryImage, StyledSecondaryImage } from './styles'
import Wrapper from './Wrapper'

const TokenPairImage: React.FC<TokenPairImageProps> = ({
  primarySrc,
  secondarySrc,
  width,
  height,
  variant = variants.DEFAULT,
  primaryImageProps = {},
  secondaryImageProps = {},
  ...props
}) => {
  const secondaryImageSize = variant !== variants.EQUIVAlENT ? Math.floor(width / 2) : width

  return (
    <Wrapper width={width} height={height} {...props}>
      {/* @ts-ignore */}
      <StyledPrimaryImage variant={variant} src={primarySrc} width={width} height={height} {...primaryImageProps} />
      <StyledSecondaryImage
        variant={variant}
        // @ts-ignore
        src={secondarySrc}
        width={secondaryImageSize}
        height={secondaryImageSize}
        {...secondaryImageProps}
      />
    </Wrapper>
  )
}

export default TokenPairImage
