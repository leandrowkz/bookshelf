import '@testing-library/jest-dom/extend-expect'
import 'mock-match-media/polyfill'

jest.mock('next/router', () => require('next-router-mock'))
