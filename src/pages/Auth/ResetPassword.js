import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Box, Button, Container, Typography } from '@mui/material';
// layouts
import LogoOnlyLayout from '../../layouts/LogoOnlyLayout';
// routes
// import { PATH_AUTH } from '../../routes/paths';
// components
import Page from '../../components/Page';
import { ResetPasswordForm } from '../../components/authentication/reset-password';
import { PATH_AUTH } from 'routes';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  display: 'flex',
  minHeight: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(12, 0)
}));

// ----------------------------------------------------------------------

export default function ResetPassword() {
  const [sent, setSent] = useState(false);

  return (
    <RootStyle title="Reset Password">
      <LogoOnlyLayout />

      <Container>
        <Box sx={{ maxWidth: 480, mx: 'auto' }}>
          {!sent ? (
            <>
              <Typography variant="h3" paragraph>
              Reset your password?
              </Typography>
              <Typography sx={{ color: 'text.secondary', mb: 5 }}>
              Please enter your new password.
              </Typography>

              <ResetPasswordForm onSent={() => setSent(true)} />

              <Button fullWidth size="large" component={RouterLink} to={PATH_AUTH.login} sx={{ mt: 1 }}>
              Back
              </Button>
            </>
          ) : (
            <Box sx={{ textAlign: 'center' }}>
                <Box
                    component="img"
                    src="/static/illustrations/illustration_reset_password.svg"
                    sx={{ height: 260, mx: 'auto', my: { xs: 5, sm: 10 } }}
                />

                <Typography variant="h3" gutterBottom>
                Successful password reset
                </Typography>
                <Typography>
                You can now use your new password to log in to your account
                </Typography>

                <Button size="large" variant="contained" component={RouterLink} to={PATH_AUTH.login} sx={{ mt: 5 }}>
                Login
                </Button>
            </Box>
          )}
        </Box>
      </Container>
    </RootStyle>
  );
}