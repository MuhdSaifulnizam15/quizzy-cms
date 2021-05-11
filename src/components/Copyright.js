import React from 'react';
import { useTranslation } from "react-i18next";
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export default function Copyright() {
    const { t } = useTranslation();
    
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {t("copyright")}
            <Link color="inherit" href="https://google.com">
                Quizzy
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}