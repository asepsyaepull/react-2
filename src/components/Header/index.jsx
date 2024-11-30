

const Navbar = ({ logo, textLogo, navList, icons, isDarkMode }) => {
    return (
        <nav className="drop-shadow bg-white p-5" style={{ background: isDarkMode ? "gray" : "white" }}>
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex justify-center item-center gap-3 text-gray-800 text-lg font-bold">
                    <img src={logo} alt="logo" />
                    <h2 className='text-3xl font-semibold font-mono'>{textLogo}</h2>
                </div>
                <div className="flex gap-16 space-x-4">
                    {/* render navlist dengan cara looping menggunakan map */}
                    {
                        navList.map((item, index) => (
                            <a key={index} href={item.link} className="text-gray-800 hover:text-orange-400">{item.title}</a>
                        ))
                    }
                </div>
                <div className='flex justify-center items-center gap-10 text-lg'>
                    {/* render icons dengan cara looping menggunakan loop */}
                    {
                        icons.map((item, index) => (
                            <div key={index}>
                                {item.icon}
                            </div>
                        ))
                    }
                </div>
            </div>
        </nav>
    );
};

export default Navbar;