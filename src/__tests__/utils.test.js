import { describe, it, expect } from 'vitest';
import { add, multiply, formatName, isEven, capitalize } from '../utils';

describe('Utility Functions', () => {
    describe('add function', () => {
        it('deve somar dois números positivos', () => {
            expect(add(2, 3)).toBe(5);
            expect(add(10, 15)).toBe(25);
        });

        it('deve somar números negativos', () => {
            expect(add(-2, -3)).toBe(-5);
            expect(add(-10, 5)).toBe(-5);
        });
    });

    describe('formatName function', () => {
        it('deve formatar nome completo', () => {
            expect(formatName('João', 'Silva')).toBe('João Silva');
        });

        it('deve retornar apenas primeiro nome se não tiver sobrenome', () => {
            expect(formatName('João', '')).toBe('João');
            expect(formatName('Maria')).toBe('Maria');
        });

        it('deve retornar "Usuário Anônimo" se não tiver nenhum nome', () => {
            expect(formatName('', '')).toBe('Usuário Anônimo');
            expect(formatName()).toBe('Usuário Anônimo');
        });
    });

    describe('isEven function', () => {
        it('deve identificar números pares', () => {
            expect(isEven(2)).toBe(true);
            expect(isEven(4)).toBe(true);
            expect(isEven(0)).toBe(true);
        });

        it('deve identificar números ímpares', () => {
            expect(isEven(1)).toBe(false);
            expect(isEven(3)).toBe(false);
            expect(isEven(-1)).toBe(false);
        });
    });

    describe('capitalize function', () => {
        it('deve capitalizar primeira letra', () => {
            expect(capitalize('hello')).toBe('Hello');
            expect(capitalize('WORLD')).toBe('World');
        });

        it('deve retornar string vazia se input for vazio', () => {
            expect(capitalize('')).toBe('');
            expect(capitalize()).toBe('');
        });
    });
});