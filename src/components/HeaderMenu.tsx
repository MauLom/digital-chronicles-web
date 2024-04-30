"use client";

import { useRouter } from 'next/navigation';
import { Sun, Moon } from 'lucide-react';
import { Button } from './ui/button';

const HeaderMenu = ({ onRegister, onLogin }: { onRegister: () => void, onLogin: () => void }) => {
    const router = useRouter();

    return (
        <nav className="flex justify-center items-center py-4 px-8 text-white ">
            {/* Left container with thicker top border */}
            <div className="flex items-center border-t-2 border-b-2 border-gray-600 w-100 p-5">
                <Button className="mx-4 hover:underline" onClick={() => router.push('/')}>
                    Digital Chronicles
                </Button>
            </div>

            {/* Center container for logo */}
            <div className="flex items-center justify-center">
                <img src='DigitalChroniclesLogo.png' width={'150px'} height={'150px'} alt="Digital Chronicles Logo" />
            </div>

            {/* Right container with thicker top border */}
            <div className="flex items-center border-t-2 border-b-2 border-gray-600 p-5">
                <Button className="mx-4 hover:underline" onClick={onRegister}>
                    Register
                </Button>
                <Button className="mx-4 hover:underline" onClick={onLogin}>
                    Login
                </Button>
                <Button className="mx-4 hover:underline" onClick={() => router.push('https://discord.gg/qbjttaQR')}>
                    Discord
                </Button>
            </div>
        </nav>
    );
};

export default HeaderMenu;
