"use client";

export default function MenuButton({ isOpen, toggleMenu }) {

    return (
        <div className="md:hidden">
            <button
                type="button"
                onClick={toggleMenu}
                className="text-white hover:text-[#D3D3D3] "
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
            >
                {!isOpen ? (
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>
                ) : (
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                )}
            </button>
        </div>
    );
}