import { expect } from 'vitest'
import { render, screen, fireEvent } from "@testing-library/react"
import { vi } from 'vitest'
import App from './App'

import * as db from './helpers/db'

it('renders search input', () => {
  render(<App />)
  expect(screen.getByPlaceholderText('Název léku')).toBeDefined()
})

it('renders menu', () => {
  render(<App />)
  expect(screen.getByLabelText('menu')).toBeDefined()
})

it('renders loading', () => {
  render(<App />)
  expect(screen.getByText('Načítání ...')).toBeDefined()
})

describe('fetchDrugList', () => {
  const mockDrugList = [
    {
      id: 'zinnat-500-mg-id-2',
      name: 'Zinnat 500 mg',
      keywords: 'antibiotika'
    }
  ]

  beforeEach(() => {
    vi.spyOn(db, 'fetchDrugList')
      .mockImplementation(
        () => new Promise((res) => setTimeout(() => res(mockDrugList), 200))
      )
  })

  it('renders search results', async () => {
    render(<App />)
    const input = screen.getByPlaceholderText('Název léku')
    fireEvent.change(input, { target: { value: 'zinnat' } })

    const searchResults = await screen.findByTestId('zinnat-500-mg-id-2')
    expect(searchResults).toBeDefined()
  })

  it('renders empty results on non-existing drug', async () => {
    render(<App />)
    const input = screen.getByPlaceholderText('Název léku')
    fireEvent.change(input, { target: { value: 'non-existing-drug' } })

    const searchResults = await screen.findByText('Žádný lek nenalezen')
    expect(searchResults).toBeDefined()
  })
})