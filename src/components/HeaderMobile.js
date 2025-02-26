"use client";

export default function HeaderMobile({ isOpen, menuItems }) {

    return (
        <>
            {isOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        {menuItems.map((item, index) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className={"text-white hover:text-[#D3D3D3] block px-3 py-2 text-base font-medium"}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}