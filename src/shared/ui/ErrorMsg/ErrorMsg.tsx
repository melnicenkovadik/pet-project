import { FC } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import s from './ErrorMsg.module.scss';

interface ErrorMsgProps {
    className?: string;
    error?: string;
}

export const ErrorMsg: FC<ErrorMsgProps> = ({
    className,
    error = '',
}) => (
    <div className={cn(
        s.ErrorMsg,
        className,
        {
            [s.ErrorMsg__visible]: !!error,
            [s.ErrorMsg__hidden]: !error,
        },
    )}
    >
        {
            error ? (
                <Text
                    className={
                        cn(
                            s.ErrorMsg__text,
                            {
                                [s.ErrorMsg__text__visible]: !!error,
                                [s.ErrorMsg__text__hidden]: !error,
                            },
                        )
                    }
                    text={error}
                />
            ) : null
        }
    </div>
);
