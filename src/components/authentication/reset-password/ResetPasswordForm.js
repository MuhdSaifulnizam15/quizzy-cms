import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Form, FormikProvider, useFormik } from 'formik';
// material
import { TextField, Alert, Stack, IconButton, InputAdornment } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Icon } from '@iconify/react';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
// hooks
import useAuth from '../../../hooks/useAuth';
import useIsMountedRef from '../../../hooks/useIsMountedRef';
import { useState } from 'react';


// ----------------------------------------------------------------------

ResetPasswordForm.propTypes = {
  onSent: PropTypes.func
};

export default function ResetPasswordForm({ onSent }) {
  const { resetPassword } = useAuth();
  const isMountedRef = useIsMountedRef();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const ResetPasswordSchema = Yup.object().shape({
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
    confirm_password: Yup.string()
      .required('Password is required')
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
  });

  const formik = useFormik({
    initialValues: {
      password: '',
      confirm_password: ''
    },
    validationSchema: ResetPasswordSchema,
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      try {
        await resetPassword(values.password, values.confirm_password);
        if (isMountedRef.current) {
          onSent();
          setSubmitting(false);
        }
      } catch (error) {
        console.error(error);
        if (isMountedRef.current) {
          setErrors({ afterSubmit: error.message });
          setSubmitting(false);
        }
      }
    }
  });

  const { errors, touched, isSubmitting, handleSubmit, getFieldProps } = formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((show) => !show);
  };

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          {errors.afterSubmit && <Alert severity="error">{errors.afterSubmit}</Alert>}

          <TextField
            fullWidth
            type={showPassword ? 'text' : 'password'}
            label="Password"
            {...getFieldProps('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword} edge="end">
                    <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                  </IconButton>
                </InputAdornment>
              )
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />

          <TextField
            fullWidth
            type={showConfirmPassword ? 'text' : 'password'}
            label="Confirm Password"
            {...getFieldProps('confirm_password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowConfirmPassword} edge="end">
                    <Icon icon={showConfirmPassword ? eyeFill : eyeOffFill} />
                  </IconButton>
                </InputAdornment>
              )
            }}
            error={Boolean(touched.confirm_password && errors.confirm_password)}
            helperText={touched.confirm_password && errors.confirm_password}
          />

          <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
            Reset Password
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
}