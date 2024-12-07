import React from 'react';
import { AudioVisualizer } from '../features/audio_visualizer';
import '../assets/css/Footer.scss';

export default function Footer() {
    return (
        <footer className="footer-container">
            <div className="visualizer-feature">
                <AudioVisualizer className="h-24" />
                {/* <AudioVisualizer className="h-24" /> */}
            </div>
        </footer>
    );
}