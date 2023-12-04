import {cn} from "shared/lib/classNames/classNames";
import cls from './LangSwitcher.module.scss';
import {useTranslation} from "react-i18next";
import React from "react";
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const changeLanguage = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }

    return (
        <Button
            className={cn(cls.LangSwitcher, [className])}
            theme={ThemeButton.CLEAR}
            onClick={changeLanguage}
        >
            {
                i18n.language === 'ru' ? <img src='https://flagcdn.com/24x18/ru.png' alt='ru'/> : <img src='https://flagcdn.com/24x18/gb.png' alt='en'/>
            }
        </Button>
    );
};

