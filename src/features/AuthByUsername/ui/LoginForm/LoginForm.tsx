import { memo, useCallback } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { ErrorMsg } from 'shared/ui/ErrorMsg/ErrorMsg';

import { Input } from 'shared/ui/Input/Input';
import { Text } from 'shared/ui/Text/Text';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from 'features/AuthByUsername/model/slice';
import { getLoginState } from 'features/AuthByUsername/model/selector/getLoginState';
import { Loader, LoaderSizes } from 'shared/ui/Loader/Loader';
import { loginByUserName } from '../../model/services/loginByUserName';

import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const errorGenerator = (status: any) => {
    switch (status) {
    case 401:
        return 'Invalid username or password';
    case 403:
        return 'Invalid username or password';
    case 500:
        return 'Server error';
    default:
        return undefined;
    }
};
export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        isLoading,
        error,
        username,
        password,
    } = useSelector(getLoginState);

    const onChangeUsername = useCallback((value) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUserName({
            username,
            password,
        }));
    }, [dispatch, username, password]);

    return (
        <div className={cn(cls.LoginForm, {}, [className])}>
            <Text title={t('authForm.title')} />
            <ErrorMsg error={errorGenerator(error?.status)} />
            <Input
                disabled={isLoading}
                autofocus
                type="text"
                className={cls.input}
                placeholder={t('authForm.username')}
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                disabled={isLoading}
                type="text"
                className={cls.input}
                placeholder={t('authForm.password')}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                theme={ThemeButton.OUTLINE}
                className={cls.loginBtn}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {
                    isLoading
                        ? (
                            <Loader
                                size={LoaderSizes.small}
                            />
                        )
                        : t('authForm.login')
                }
            </Button>
        </div>
    );
});
