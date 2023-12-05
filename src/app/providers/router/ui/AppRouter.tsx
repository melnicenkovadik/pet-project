import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfigArray } from 'shared/config/routeConfig/route.config';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';

const AppRouter = () => (
    <Routes>
        {
            routeConfigArray.map(({
                element,
                path,
                ...otherProps
            }) => (
                <Route
                    key={path}
                    path={path}
                    element={(
                        <Suspense fallback={<PageLoader />}>
                            <div className="page-wrapper">{element}</div>
                        </Suspense>
                    )}
                    {...otherProps}
                />

            ))
        }
    </Routes>
);

export default AppRouter;
