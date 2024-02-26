import React, { FC, useCallback, useEffect } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthData } from 'entities/User/model/selectors/getAuthData';
import { userActions } from 'entities/User';
import s from './Navbar.module.scss';

interface NavbarProps {
    className?: string;

}

export const Navbar: FC<NavbarProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    const [isAuthModalOpen, setIsAuthModalOpen] = React.useState(false);
    const authData = useSelector(getAuthData);
    const dispatch = useDispatch();

    const onCloseModal = useCallback(() => {
        setIsAuthModalOpen(false);
    }, []);

    const onOpenModal = () => {
        setIsAuthModalOpen(true);
    };

    const onLogout = () => {
        dispatch(userActions.logout());
    };

    const isAuth = !!authData?.username;
    const userActionBtn = isAuth ? (
        <Button
            theme={ThemeButton.CLEAR_INVERTED}
            onClick={onLogout}
        >
            {t('exit')}
        </Button>
    ) : (
        <Button
            theme={ThemeButton.CLEAR_INVERTED}
            onClick={onOpenModal}
        >
            {t('enter')}
        </Button>
    );

    useEffect(() => {
        if (isAuthModalOpen && authData?.username) {
            onCloseModal();
        }
    }, [authData, isAuthModalOpen, onCloseModal]);

    return (
        <div className={cn(s.navbar, [className])}>
            <LoginModal
                isOpen={isAuthModalOpen}
                onClose={onCloseModal}
            />
            <div className={cn(s.links)}>
                {userActionBtn}
            </div>
        </div>
    );
};
