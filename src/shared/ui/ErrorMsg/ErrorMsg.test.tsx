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
});
