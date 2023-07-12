import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, logout } from "../middleware/firebase";

function Admin() {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) return;
    }, [user, loading, navigate]);
    if (!user) return navigate("/admin/login");
    return (
        <div>Admin <button onClick={() => logout()}>Logout</button></div>
    )
}

export default Admin