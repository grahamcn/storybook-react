import React from 'react'

type Variant = 'primary' | 'secondary' | 'tertiary' | 'danger'
type ButtonType = 'button' | 'submit' | 'reset'

import './Button.scss'

export interface Props {
  variant?: Variant
  size?: 'small' | 'default'
  label: string
  type?: ButtonType
  onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  variant = 'primary',
  size = undefined,
  label,
  ...props
}: Props): React.ReactElement => (
  <button
    type="button"
    className={['button', variant, size].join(' ')}
    {...props}
  >
    {label}
  </button>
)

export default Button
