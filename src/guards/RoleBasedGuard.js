import PropTypes from 'prop-types';
import { Container, Alert, AlertTitle } from '@mui/material';
// hooks
import useAuth from '../hooks/useAuth';

// ----------------------------------------------------------------------

RoleBasedGuard.propTypes = {
  accessibleRoles: PropTypes.array, // Example ['admin', 'leader']
  children: PropTypes.node
};

const useCurrentRole = () => {
  // Logic here to get current user role
  const role = 'admin';
  return role;
};

export default function RoleBasedGuard({ accessibleRoles, children }) {
  const currentRole = useCurrentRole();
//   const { user } = useAuth();

    // if (user && !accessibleRoles.includes(user.role)) {
    if (!accessibleRoles.includes(currentRole)) {
        return (
        <Container>
            <Alert severity="error">
            <AlertTitle>Permission Denied</AlertTitle>
            You do not have permission to access this page
            </Alert>
        </Container>
        );
    }

    return <>{children}</>;
}