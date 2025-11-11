"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./ProfilePicture.module.css";

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
    <div className={styles.wrapper}>
        <div onClick={handleClick} className={styles.imageWrapper}>
            <img
            src={image || "/default-avatar.png"}
            className={styles.image}
            />
            <div className={styles.overlay}>Change</div>
        </div>

        <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        className={styles.input}
        onChange={handleChange}
        />

        {image && (
        <button onClick={handleRemove} className={styles.removeButton}>
          Remove photo
        </button>
        )}
    </div>
    )
}