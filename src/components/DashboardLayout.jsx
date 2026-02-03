import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate, Outlet } from 'react-router-dom';
import { Menu, X, User, History, LogOut, ChevronDown } from 'lucide-react';

const DashboardLayout = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        // Mock logout
        navigate('/');
    };

    const menuItems = [
        { icon: User, label: 'Profile', href: '/dashboard/profile' },
        { icon: History, label: 'History', href: '/dashboard/history' },
    ];

    return (
        <div className="min-h-screen bg-black">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
                <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
                    {/* Left - Menu Button */}
                    <div className="relative">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
                        >
                            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                            <span className="hidden sm:inline text-sm font-medium">Menu</span>
                        </motion.button>

                        {/* Menu Dropdown */}
                        <AnimatePresence>
                            {menuOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute top-full left-0 mt-2 w-56 bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
                                >
                                    <div className="p-2">
                                        {menuItems.map((item) => (
                                            <Link
                                                key={item.label}
                                                to={item.href}
                                                onClick={() => setMenuOpen(false)}
                                                className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                                            >
                                                <item.icon className="w-5 h-5 text-nutri-mint" />
                                                <span className="font-medium">{item.label}</span>
                                            </Link>
                                        ))}
                                        <div className="border-t border-white/10 my-2" />
                                        <button
                                            onClick={handleLogout}
                                            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors"
                                        >
                                            <LogOut className="w-5 h-5" />
                                            <span className="font-medium">Logout</span>
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Center - Logo */}
                    <Link to="/dashboard" className="flex items-center gap-2">
                        <img src="/logo.png" alt="NutriLens" className="w-8 h-8" />
                        <span className="text-xl font-bold text-white">
                            Nutri<span className="text-nutri-mint">Lens</span>
                        </span>
                    </Link>

                    {/* Right - Profile */}
                    <div className="relative">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setProfileOpen(!profileOpen)}
                            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
                        >
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-nutri-mint to-teal-500 flex items-center justify-center">
                                <User className="w-4 h-4 text-black" />
                            </div>
                            <ChevronDown className={`w-4 h-4 transition-transform ${profileOpen ? 'rotate-180' : ''}`} />
                        </motion.button>

                        {/* Profile Dropdown */}
                        <AnimatePresence>
                            {profileOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute top-full right-0 mt-2 w-64 bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
                                >
                                    <div className="p-4 border-b border-white/10">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-nutri-mint to-teal-500 flex items-center justify-center">
                                                <User className="w-6 h-6 text-black" />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-white">John Doe</p>
                                                <p className="text-sm text-gray-400">john@example.com</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-2">
                                        <Link
                                            to="/dashboard/profile"
                                            onClick={() => setProfileOpen(false)}
                                            className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                                        >
                                            <User className="w-5 h-5 text-nutri-mint" />
                                            <span className="font-medium">View Profile</span>
                                        </Link>
                                        <button
                                            onClick={handleLogout}
                                            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors"
                                        >
                                            <LogOut className="w-5 h-5" />
                                            <span className="font-medium">Logout</span>
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="pt-20 min-h-screen">
                <Outlet />
            </main>

            {/* Click outside to close dropdowns */}
            {(menuOpen || profileOpen) && (
                <div
                    className="fixed inset-0 z-40"
                    onClick={() => {
                        setMenuOpen(false);
                        setProfileOpen(false);
                    }}
                />
            )}
        </div>
    );
};

export default DashboardLayout;
