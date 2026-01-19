import { Wave } from './style';

export function WaveSeparator() {
    return (
        <Wave
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
        >
            <path>
                <animate
                    attributeName="d"
                    dur="10s"
                    repeatCount="indefinite"
                    values="
            M0,60 C240,100 480,20 720,40 960,60 1200,100 1440,60 L1440,0 L0,0 Z;
            M0,40 C240,20 480,100 720,80 960,60 1200,20 1440,40 L1440,0 L0,0 Z;
            M0,60 C240,100 480,20 720,40 960,60 1200,100 1440,60 L1440,0 L0,0 Z
            "
                />
            </path>
        </Wave>
    );
}
