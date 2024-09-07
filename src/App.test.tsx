import { expect, test } from 'vitest'
import { render, screen } from "@testing-library/react"
import App from './App'

test('renders search input', () => {
  render(<App />)
  expect(screen.getByPlaceholderText('Název léku')).toBeDefined()
})

test('renders menu', () => {
  render(<App />)
  expect(screen.getByLabelText('menu')).toBeDefined()
})

test('renders loading', () => {
  render(<App />)
  expect(screen.getByText('Loading ...')).toBeDefined()
})
