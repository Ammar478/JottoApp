import type { Config } from 'jest'

const config: Config = {
    verbose: true,
    collectCoverageFrom: [
        '**/*.{ts,tsx}',
        '!**/node_modules/**',
        '!**/vendor/**',
    ],
    testEnvironment: 'jsdom',
    transform: {
        '\\.[jt]sx?$': 'babel-jest',
    },
    moduleDirectories: ['node_modules', 'src'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
}

export default config
