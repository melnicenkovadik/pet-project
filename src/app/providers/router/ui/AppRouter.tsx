import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfigArray } from 'shared/config/routeConfig/route.config';

const AppRouter = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            {
                routeConfigArray.map(({ element, ...props }) => (
                    <Route
                        key={props.path}
                        path={props.path}
                        element={<div className="page-wrapper">{element}</div>}
                        {...props}
                    />
                ))
            }
        </Routes>
    </Suspense>
);

export default AppRouter;
