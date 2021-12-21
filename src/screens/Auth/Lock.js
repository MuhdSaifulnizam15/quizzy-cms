import React, { useState } from "react";

export default function Lock() {
    const [showPassword, setShowPassword] = useState(false);
    const passwordInputType = showPassword ? "text" : "password";
    const passwordIconColor = showPassword ? "#262B40" : "";

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div>Lock</div>
    );
};