import React, {FC} from "react";
import {cn} from "shared/lib/classNames/classNames";
import {AppLink} from "shared/ui/AppLink";
import s from "./Navbar.module.scss";
import {AppLinkTheme} from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";

interface NavbarProps {
    className?: string;

}

const Navbar: FC<NavbarProps> = (props) => {
    const {t}= useTranslation();
    return (
        <div className={cn(s.navbar, props?.className)}>
            <div className={cn(s.links)}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={"/"}>
                    {t('mainPage')}
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>
                    {t('aboutPage')}
                </AppLink>
            </div>
        </div>
    );
};

export default Navbar;
