import { ComponentProps } from 'react'

type CoontrolProps = ComponentProps<'input'>

export function Control({ ...rest }: CoontrolProps) {
  return <input className="sr-only" type="file" id="photo" />
}
