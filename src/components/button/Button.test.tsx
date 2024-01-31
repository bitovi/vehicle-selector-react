/**
* @vitest-environment jsdom
*/

import { fireEvent, render, screen } from '@testing-library/react'
import { Button } from './Button'

import { describe, expect, it, mock } from "bun:test";
// import { describe, expect, it, vi } from 'vitest'

function getMockFn() {
  return mock(() => { }); // Bun
  // return vi.fn();  // Vitest
}

describe('Button', () => {
  it('renders', () => {
    const handleClick = getMockFn()

    render(
      <Button onClick={handleClick}>
        Click me
      </Button>
    )
    screen.getByRole('button', { name: /click me/i })
  })

  it('calls onClick when clicked', () => {
    const handleClick = getMockFn()

    render(
      <Button onClick={handleClick}>
        Click me
      </Button>
    )

    const button = screen.getByRole('button', { name: /click me/i })
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('does not call onClick when disabled', () => {
    const handleClick = getMockFn()

    render(
      <Button onClick={handleClick} disabled>
        Click me
      </Button>
    )

    const button = screen.getByRole('button', { name: /click me/i })
    fireEvent.click(button)
    expect(handleClick).not.toHaveBeenCalled()
  })
})