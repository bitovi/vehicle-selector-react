import { toSelectOptions } from "./toSelectOptions"
// import { describe, expect, it } from "bun:test";
import { describe, expect, it } from 'vitest'

describe('toSelectOptions', () => {
  it('returns empty array if items is undefined', () => {
    expect(toSelectOptions()).toEqual([])
  })

  it('returns empty array if items is empty', () => {
    expect(toSelectOptions([])).toEqual([])
  })

  it('returns array of select options', () => {
    expect(toSelectOptions(['foo', 'bar'])).toEqual([
      { label: 'foo', value: 'foo' },
      { label: 'bar', value: 'bar' },
    ])
  })
});