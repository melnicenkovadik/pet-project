import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { render, screen } from '@testing-library/react';

const text = 'TEST';
describe('Button', () => {
    test('render btn', () => {
        render(<Button>{text}</Button>);
        expect(screen.getByText(text)).toBeInTheDocument();
    });

    test('with only first param', () => {
        const className = ThemeButton.CLEAR;
        render(<Button theme={className}>{text}</Button>);
        expect(screen.getByText(text)).toHaveClass(className);
    });

    test('test click', () => {
        const onClick = jest.fn();
        render(<Button onClick={onClick}>{text}</Button>);
        screen.getByText(text).click();
        expect(onClick).toBeCalledTimes(1);
    });

    test('test children', () => {
        render(<Button>{text}</Button>);
        expect(screen.getByText(text)).toBeInTheDocument();
    });
});
