import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../App';

describe('App Component', () => {
    it('deve renderizar o título Vite + React', () => {
        render(<App />);
        const titleElement = screen.getByText(/Vite \+ React/i);
        expect(titleElement).toBeInTheDocument();
    });

    it('deve iniciar com count igual a 0', () => {
        render(<App />);
        const button = screen.getByRole('button', { name: /count is 0/i });
        expect(button).toBeInTheDocument();
    });

    it('deve incrementar o count quando botão é clicado', () => {
        render(<App />);
        const button = screen.getByRole('button', { name: /count is/i });

        fireEvent.click(button);
        expect(screen.getByText(/count is 1/i)).toBeInTheDocument();

        fireEvent.click(button);
        expect(screen.getByText(/count is 2/i)).toBeInTheDocument();
    });

    it('deve renderizar os logos do Vite e React', () => {
        render(<App />);
        const viteLogo = screen.getByAltText(/Vite logo/i);
        const reactLogo = screen.getByAltText(/React logo/i);

        expect(viteLogo).toBeInTheDocument();
        expect(reactLogo).toBeInTheDocument();
    });
});