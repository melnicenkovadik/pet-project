import {FC, ReactNode} from "react";
import {cn} from "shared/lib/classNames/classNames";
import s from "./AppLink.module.scss";
import {Link, LinkProps} from "react-router-dom";

interface AppLinkProps extends LinkProps {
    className?: string;
    children?: ReactNode | ReactNode[];
    to: string;
    theme?: AppLinkTheme;
}

export enum AppLinkTheme {
    PRIMARY = "primary",
    SECONDARY = "secondary",
}

const AppLink: FC<AppLinkProps> = (props) => {
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

export default AppLink;
