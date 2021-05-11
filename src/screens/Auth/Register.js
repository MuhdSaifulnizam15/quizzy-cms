import React, { Component } from 'react';
import { useTranslation } from "react-i18next";

export default function Register() {
    const { t } = useTranslation();

    return (
        <div>
            <h1>{t("register")}</h1>
        </div>
    )
}