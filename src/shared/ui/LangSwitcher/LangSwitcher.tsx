import { cn } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React from 'react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { i18n } = useTranslation();

    const changeLanguage = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={cn(cls.LangSwitcher, [className])}
            theme={ThemeButton.CLEAR}
            onClick={changeLanguage}
        >
            {
                i18n.language === 'ru'
                    // eslint-disable-next-line i18next/no-literal-string
                    ? <img src="https://flagcdn.com/24x18/ru.png" alt="ru" />
                    // eslint-disable-next-line i18next/no-literal-string
                    : <img src="https://flagcdn.com/24x18/gb.png" alt="en" />
            }
        </Button>
    );
};
