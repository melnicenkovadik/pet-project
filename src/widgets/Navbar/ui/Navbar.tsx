import React, { FC, useCallback } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { routeConfig } from 'shared/config/routeConfig/route.config';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import s from './Navbar.module.scss';

interface NavbarProps {
    className?: string;

}

export const Navbar: FC<NavbarProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    const [isAuthModalOpen, setIsAuthModalOpen] = React.useState(false);

    const onCloseModal = useCallback(() => {
        setIsAuthModalOpen((prev) => !prev);
    }, []);

    return (
        <div className={cn(s.navbar, [className])}>
            <Modal
                isOpen={isAuthModalOpen}
                onClose={onCloseModal}
            >
                <div className={cn(s.modal)}>
                    <div className={cn(s.modalContent)}>
                        <div className={cn(s.modalTitle)}>
                            {t('modalTitle')}
                        </div>
                        <div className={cn(s.modalText)}>
                            {t('modalText')}
                        </div>
                        <div className={cn(s.modalBtns)}>
                            <Button
                                theme={ThemeButton.OUTLINE}
                                onClick={onCloseModal}
                            >
                                {t('ok')}
                            </Button>
                            <Button
                                theme={ThemeButton.OUTLINE}
                                onClick={onCloseModal}
                            >
                                {t('cancel')}
                            </Button>
                        </div>
                    </div>
                </div>
            </Modal>
            <div className={cn(s.links)}>
                <Button
                    theme={ThemeButton.CLEAR_INVERTED}
                    onClick={onCloseModal}
                >
                    {t('enter')}
                </Button>
            </div>
        </div>
    );
};
