import { cn } from './classNames';

describe('cn', () => {
    test('should return empty string', () => {
        expect(cn()).toBe('');
    });

    test('should return mods with boolean values', () => {
        expect(cn({ active: true, disabled: false })).toBe('active');
    });

    test('should return mods with string values', () => {
        expect(cn('active', ['disabled'])).toBe('active disabled');
    });

    test('should return mods with array values', () => {
        expect(cn({ active: true, disabled: false }, 'active', ['disabled'])).toBe('active active disabled');
    });
});
