import React, { cloneElement, Children, ReactElement } from 'react'
import StyledButtonMenu from './StyledButtonMenu'
import { sizes, variants } from '../Button/types'
import { ButtonMenuProps, ButtonMenuItemProps } from './types'

const ButtonMenu: React.FC<ButtonMenuProps> = ({
  activeIndex = 0,
  size = sizes.MD,
  variant = variants.PRIMARY,
  onClick,
  children,
  style,
  className
}) => {
  return (
    <StyledButtonMenu className={className} style={style} variant={variant}>
      {Children.map(children, (child: ReactElement<ButtonMenuItemProps>, index) => {
        return cloneElement(child, {
          isactive: activeIndex === index,
          onClick: onClick ? () => onClick(index) : undefined,
          size,
          variant,
        })
      })}
    </StyledButtonMenu>
  )
}

export default ButtonMenu
