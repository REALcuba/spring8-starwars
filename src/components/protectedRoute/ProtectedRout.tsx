import { Navigate, Outlet, } from 'react-router-dom';

type ProtectedRouteProps = {
    user: '',
    redirectPath: string,
    children: React.ReactNode
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ user, redirectPath = '/login', children }) => {
    
    if (!user) {
        return <Navigate to={redirectPath} replace />;
    }

    return children ? children : <Outlet />;
};