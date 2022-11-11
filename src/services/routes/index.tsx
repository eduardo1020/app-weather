import { BrowserRouter, Routes as Switch, Route, Navigate } from "react-router-dom";
import { Home } from "../../pages/Home";
import { Login } from "../../pages/Login";

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />

                <Route path="*" element={<Navigate to="/home" />} />
            </Switch>
        </BrowserRouter>
    )
}