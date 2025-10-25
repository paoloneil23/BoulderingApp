"use client";

import { useEffect, useRef, useState } from "react";

export default function ProfilePicture() {
    const [image, setImage] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    // load saved image from localStorage
    useEffect(() => {
        const saved = localStorage.getItem("profileImage");
        if (saved) setImage(saved);
    }, []);

    // handle image upload
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
            const base64 = reader.result as string;
            setImage(base64);
            localStorage.setItem("profileImage", base64);
        };
        reader.readAsDataURL(file);
    };

    const handleClick = () => {
        fileInputRef.current?.click();
    };

    const handleRemove = () => {
        setImage(null);
        localStorage.removeItem("profileImage");
    }

    return (
        <div className="flex flex-col items-center text-center space-y-2">
            <div onClick={handleClick} className="relative cursor-pointer group">
                <img src={image || "/default-avatar.png"} alt="" className="w-28 h-28 rounded-full border-4 border-emerald-600 object-cover group-hover:opacity-80 transition"/>
                <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/40 opacity-0 group-hover:opacity-100 transition text-sm text-white">
                    Change
                </div>
            </div>

            <input type="file" accept="image/*" ref={fileInputRef} className="hidden" onChange={handleChange}/>

            {image && (
                <button onClick={handleRemove} className="text-xs text-neutral-400 hover:text-red-400">
                    Remove Photo
                </button>
            )}

        </div>
    )
}