import React, { FC } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { routeConfig } from 'shared/config/routeConfig/route.config';
import s from './Navbar.module.scss';

interface NavbarProps {
    className?: string;

}

const Navbar: FC<NavbarProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
        <div className={cn(s.navbar, [className])}>
            <div className={cn(s.links)}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={routeConfig.main.path}>
                    {t('mainPage')}
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={routeConfig.about.path}>
                    {t('aboutPage')}
                </AppLink>
            </div>
        </div>
    );
};

export default Navbar;
