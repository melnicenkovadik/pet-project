import { cn } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import cls from './ErrorPage.module.scss';

interface ErrorPageProps {
    className?: string;
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={cn(cls.ErrorPage, {}, [className])}>
            <div className={cls.error_wrapper}>
                <p>{t('somethingWrong')}</p>
                <Button onClick={reloadPage}>
                    {t('refreshPage')}
                </Button>
            </div>
        </div>
    );
};
