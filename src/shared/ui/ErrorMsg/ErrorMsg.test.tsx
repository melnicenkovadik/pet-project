import { render, screen } from '@testing-library/react';
import { ErrorMsg } from 'shared/ui/ErrorMsg/ErrorMsg';

describe('ErrorMsg', () => {
    test('Test render', () => {
        render(<ErrorMsg
            error="Test"
        />);
        expect(screen.getByText('Test'))
            .toBeInTheDocument();
    });

    test('Test render without error', () => {
        render(<ErrorMsg />);
        expect(screen.queryByText('Test'))
            .not.toBeInTheDocument();
    });

    test('Test render with empty error', () => {
        render(<ErrorMsg
            error=""
        />);
        expect(screen.queryByText('Test'))
            .not.toBeInTheDocument();
    });

    test('Test render with undefined error', () => {
        render(<ErrorMsg
            error={undefined}
        />);
        expect(screen.queryByText('Test'))
            .not.toBeInTheDocument();
    });

    test('Test render with html', () => {
        render(<ErrorMsg
            error="<div>Test</div>"
        />);
        expect(screen.getByText('<div>Test</div>'))
            .toBeInTheDocument();
    });
});
