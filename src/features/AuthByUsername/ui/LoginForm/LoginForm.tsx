import { cn } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();

    return (
        <div className={cn(cls.LoginForm, {}, [className])}>
            <Input
                autofocus
                type="text"
                className={cls.input}
                placeholder={t('enterUsername')}
            />
            <Input
                type="text"
                className={cls.input}
                placeholder={t('enterPassword')}
            />
            <Button
                className={cls.loginBtn}
            >
                {t('login')}
            </Button>
        </div>
    );
};
