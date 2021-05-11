import React from 'react';
import { useTranslation } from "react-i18next";

export default function ForgotPassword() {
    const { t } = useTranslation();

    return (
        <div>
            <h1>{t("forgotPassword")}</h1>
        </div>
    )
}