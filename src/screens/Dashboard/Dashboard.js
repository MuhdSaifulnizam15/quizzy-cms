import React, { Component } from 'react';
import { useTranslation } from "react-i18next";

export default function Dashboard() {
    const { t } = useTranslation();

    return (
        <div>
            <h1>{t("dashboard")}</h1>
        </div>
    )
}