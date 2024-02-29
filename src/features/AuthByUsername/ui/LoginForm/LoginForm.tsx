import { memo, useCallback } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { ErrorMsg } from 'shared/ui/ErrorMsg/ErrorMsg';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Input } from 'shared/ui/Input/Input';
import { Text } from 'shared/ui/Text/Text';
import { useDispatch, useSelector } from 'react-redux';
import { Loader, LoaderSizes } from 'shared/ui/Loader/Loader';

import { loginActions, loginReducer } from '../../model/slice';
import { getLoginIsLoading } from '../../model/selector/getLoginIsLoading';
import { getLoginError } from '../../model/selector/getLoginError';
import { getLoginUsername } from '../../model/selector/getLoginUsername';
import { getLoginPassword } from '../../model/selector/getLoginPassword';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
}

const errorGenerator = (status: any) => {
    switch (status) {
    case 400:
        return 'Username and password are required';
    case 401:
        return 'Invalid username or password';
    case 403:
        return 'Access denied';
    case 500:
        return 'Server error';
    default:
        return undefined;
    }
};
const initialModuleReducers: ReducersList = { loginForm: loginReducer };

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);

    const onChangeUsername = useCallback((value) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({
            username,
            password,
        }));
    }, [dispatch, username, password]);

    return (
        <DynamicModuleLoader
            reducers={initialModuleReducers}
            removeAfterUnmount
        >
            <div className={cn(cls.LoginForm, {}, [className])}>
                <Text
                    title={t('authForm.title')}
                />
                <ErrorMsg
                    error={errorGenerator(error?.status)}
                />
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
        </DynamicModuleLoader>
    );
});

export default LoginForm;
