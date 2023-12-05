import { FC, ReactNode } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import s from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    children: ReactNode | ReactNode[];
    to: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        children,
        theme,
        className,
        ...otherProps
    } = props;
    return (
        <Link
            className={cn(s.app_link, [className, s[theme]])}
            to={to}
            {...otherProps}
        >
            {children}
        </Link>
    );
};

