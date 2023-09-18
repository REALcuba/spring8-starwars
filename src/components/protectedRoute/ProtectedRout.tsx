import { Navigate, Outlet, } from 'react-router-dom';
import { type ProtectedRouteProps } from '../../types/types'

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ user, redirectPath = '/login', children }) => {
    
    if (!user) {
        return <Navigate to={redirectPath} replace />;
    }

    return children ? children : <Outlet />;
};