"use client";

import ErrorPage from "../components/Error";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-black">
            <ErrorPage />
        </div>
    );
}