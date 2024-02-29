import { Modal } from 'shared/ui/Modal/Modal';
import { cn } from 'shared/lib/classNames/classNames';
import { LoginFormAsync } from 'features/AuthByUsername/ui/LoginForm/LoginForm.async';
import { Suspense } from 'react';
import { Loader } from 'shared/ui/Loader/Loader';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = ({
    className,
    isOpen,
    onClose,
}: LoginModalProps) => (
    <Modal
        className={cn({}, [className])}
        isOpen={isOpen}
        onClose={onClose}
        lazy
    >
        <Suspense fallback={<Loader />}>
            <LoginFormAsync />
        </Suspense>

    </Modal>
);
