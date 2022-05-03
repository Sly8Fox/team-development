import React, {useContext} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import {authRoutes, publicRoutes} from "../routes";
import {SHOP_ROUTE} from "../utils/const";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

/**
 * @AppRouter - Главный управленец всеми Рутами приложения
 * @param user - вытягивает юзера при помощи хука UseContext
 * @return switch - при помощи свитча отображает все маппинги по рутам
 */
const AppRouter = observer(() => {
    const {user} = useContext(Context)

    console.log(user)
    return (
        <Switch>
            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            <Redirect to={SHOP_ROUTE}/>
        </Switch>
    );
});

export default AppRouter;
