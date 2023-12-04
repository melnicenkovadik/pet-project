import { cn } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import React, {useState} from "react";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";
import {LangSwitcher} from "shared/ui/LangSwitcher/LangSwitcher";
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(true)

    const onToggle = () => {
        setCollapsed(prev => !prev);
    }

    return (
        <div
            className={cn(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}
        >
            <Button onClick={onToggle}
                    theme={ThemeButton.CLEAR}
                    className={cn(cls.toggleButtonWrapper, {[cls.toggleButtonWrapper_collapsed]: collapsed})}
                    >
                <span className={cls.toggle}>
                    <span className={cls.toggle__line}/>
                    <span className={cls.toggle__line}/>
                </span>
            </Button>
            <div className={cn(cls.switchers,{[cls.switchers_collapsed]: collapsed})}>
                <LangSwitcher/>
                <ThemeSwitcher />
            </div>
        </div>
    );
};

