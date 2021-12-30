import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Button, Typography, Container, Box } from '@mui/material';
// components
import Page from '../components/Page';
import { PATH_DASHBOARD } from 'routes';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  minHeight: '100%',
  display: 'flex',
  alignItems: 'center',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10)
}));

// ----------------------------------------------------------------------

export default function Maintenance() {
  return (
    <RootStyle title="Maintenance | Minimal-UI">
      <Container sx={{ textAlign: 'center' }}>
        <Typography variant="h3" paragraph>
          Website currently under maintenance
        </Typography>
        <Typography sx={{ color: 'text.secondary' }}>We are currently working hard on this page!</Typography>
        
        <Box
            component="img"
            src="/static/illustrations/illustration_under_maintenance.svg"
            sx={{ height: 240, mx: 'auto', my: { xs: 5, sm: 10 } }}
        />

        <Button variant="contained" size="large" component={RouterLink} to={PATH_DASHBOARD.root}>
          Go to Home
        </Button>
      </Container>
    </RootStyle>
  );
}
