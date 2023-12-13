import { cn } from 'shared/lib/classNames/classNames';
import React, { useMemo, useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/route.config';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import { useTranslation } from 'react-i18next';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const linkMods = {
        [cls.show_text]: !collapsed,
        [cls.hide_text]: collapsed,
    };
    return (
        <div
            data-testid="sidebar"
            className={cn(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                theme={ThemeButton.CLEAR}
                className={cn(
                    cls.toggleButtonWrapper,
                    { [cls.toggleButtonWrapper_collapsed]: collapsed },
                )}
            >
                <span className={cls.toggle}>
                    <span className={cls.toggle__line} />
                    <span className={cls.toggle__line} />
                </span>
            </Button>
            <div className={cls.items}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.main}
                    className={cn(cls.item)}
                >
                    <MainIcon className={cls.icon} />
                    <span className={cn(cls.link, linkMods)}>
                        {!collapsed && t('mainPage')}
                    </span>
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.about}
                    className={cn(cls.item)}
                >
                    <AboutIcon className={cls.icon} />
                    <span className={cn(cls.link, linkMods)}>
                        {!collapsed && t('aboutPage')}
                    </span>
                </AppLink>
            </div>
            <div className={cn(cls.switchers, { [cls.switchers_collapsed]: collapsed })}>
                <LangSwitcher />
                <ThemeSwitcher />
            </div>
        </div>
    );
};
