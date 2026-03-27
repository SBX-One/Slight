import { useRef, useState, useEffect } from 'react';

import cargoVideo from '../../assets/Videos/cargo.webm';
import paymentVideo from '../../assets/Videos/5043691-uhd_3840_2160_30fps.webm';
import devidensVideo from '../../assets/Videos/5651586-hd_1080_1920_25fps.webm';
import trackVideo from '../../assets/Videos/6595369-uhd_3840_2160_24fps.webm';
type VideoPlayerProps = {
    order: number; // index dari video
};

export default function VideoPlayer({ order }: VideoPlayerProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0); // 0–100

    const datavideo = [cargoVideo, paymentVideo, devidensVideo, trackVideo];
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const updateProgress = () => {
            if (video.duration) {
                setProgress((video.currentTime / video.duration) * 100);
            }
        };

        video.addEventListener('timeupdate', updateProgress);

        return () => {
            video.removeEventListener('timeupdate', updateProgress);
        };
    }, []);

    const togglePlay = () => {
        const video = videoRef.current;
        if (!video) return;

        if (isPlaying) {
            video.pause();
        } else {
            video.play();
        }
        setIsPlaying(!isPlaying);
    };

    // 🔹 Setup circle
    const radius = 18;
    const circumference = 2 * Math.PI * radius;
    const dashOffset = circumference - (progress / 100) * circumference;

    return (
        <div className="relative w-full  h-full justify-center items-end">
            {/* Video */}
            <video ref={videoRef} src={datavideo[order - 1]} muted className="rounded-2xl w-full h-full aspect-auto object-cover" />

            {/* Tombol Play/Pause */}
            <div>
                <button
                    onClick={togglePlay}
                    className="absolute bottom-5 right-5 flex items-center justify-between gap-2 bg-white/20 backdrop:backdrop-blur-md border-2 border-black/30 rounded-xl px-6 py-1"
                >
                    <div className="relative flex items-center justify-center w-12 h-12 rounded-full text-white">
                        {/* Circle Progress */}
                        <svg className="absolute w-12 h-12 -rotate-90">
                            <circle cx="24" cy="24" r={radius} strokeWidth="3" fill="transparent" />
                            <circle
                                cx="24"
                                cy="24"
                                r={radius}
                                className="stroke-primary"
                                strokeWidth="3"
                                fill="transparent"
                                strokeDasharray={circumference}
                                strokeDashoffset={dashOffset}
                                strokeLinecap="round"
                            />
                        </svg>
                        {isPlaying ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                                <g fill="none">
                                    <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
                                    <path
                                        fill="currentColor"
                                        d="M9 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm8 0a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"
                                    ></path>
                                </g>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                                <g fill="none" fillRule="evenodd">
                                    <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
                                    <path
                                        fill="currentColor"
                                        d="M5.669 4.76a1.47 1.47 0 0 1 2.04-1.177c1.062.454 3.442 1.533 6.462 3.276c3.021 1.744 5.146 3.267 6.069 3.958c.788.591.79 1.763.001 2.356c-.914.687-3.013 2.19-6.07 3.956c-3.06 1.766-5.412 2.832-6.464 3.28c-.906.387-1.92-.2-2.038-1.177c-.138-1.142-.396-3.735-.396-7.237c0-3.5.257-6.092.396-7.235"
                                    ></path>
                                </g>
                            </svg>
                        )}
                    </div>
                    <p className="font-bold text-background">Play Video</p>
                </button>
            </div>
        </div>
    );
}
