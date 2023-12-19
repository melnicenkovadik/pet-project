import React from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';

const MainPage = () => {
    const { t } = useTranslation('main');
    return (
        <div>
            <Counter />
            <BugButton />
            {t('title')}
        </div>
    );
};

export default MainPage;
