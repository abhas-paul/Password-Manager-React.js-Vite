import React, { useEffect, useState } from 'react';
import { Eye, EyeOff, Trash2 } from 'lucide-react';
import Navbar from './Navbar'
import Footer from './Footer'

const CredentialsPage = () => {
    const [entries, setEntries] = useState([]);
    const [showPasswords, setShowPasswords] = useState({});

    useEffect(() => {
        const savedEntries = JSON.parse(localStorage.getItem('savedEntries')) || [];
        setEntries(savedEntries);
    }, []);

    const togglePassword = (index) => {
        setShowPasswords((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    const deleteEntry = (indexToDelete) => {
        const updated = entries.filter((_, i) => i !== indexToDelete);
        setEntries(updated);
        localStorage.setItem('savedEntries', JSON.stringify(updated));
    };

    return (
        <>
            <style>{`
        .custom-scrollbar {
          max-height: 200px;
          overflow-y: scroll;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #10b981;
        }
      `}</style>

            <section className="custom-scrollbar min-h-screen overflow-x-hidden bg-slate-50 dark:bg-slate-900 p-6">
                <section className="max-w-4xl mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 space-y-6">
                    <h2 className="text-2xl font-bold text-slate-800 dark:text-white text-center">
                        Saved Credentials
                    </h2>

                    {/* Add Credentials Button */}
                    <div className="flex justify-center">
                        <a
                            href="/"
                            className="text-emerald-600 font-semibold border border-emerald-600 px-4 py-2 rounded-md hover:bg-emerald-600 hover:text-white transition"
                        >
                            Add Credentials
                        </a>
                    </div>

                    {entries.length === 0 ? (
                        <p className="text-center text-slate-500 dark:text-slate-400">
                            No credentials saved yet.
                        </p>
                    ) : (
                        <ul className="space-y-4">
                            {entries.map((entry, index) => (
                                <li
                                    key={index}
                                    className="bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg p-4 shadow-sm"
                                >
                                    <section className="flex justify-between items-center mb-2 flex-wrap">
                                        <h3 className="text-lg font-semibold text-emerald-400">
                                            {entry.siteName}
                                        </h3>
                                        <button
                                            onClick={() => deleteEntry(index)}
                                            className=" cursor-pointer text-gray-500 hover:text-red-600 transition"
                                            title="Delete"
                                        >
                                            <Trash2 size={20} />
                                        </button>
                                    </section>

                                    <p className="text-sm text-slate-600 dark:text-slate-300 mb-1 break-words">
                                        <span className="font-medium">URL:</span>{" "}
                                        <a
                                            href={entry.siteUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-blue-500 underline break-all"
                                        >
                                            {entry.siteUrl}
                                        </a>
                                    </p>

                                    <p className="text-sm text-slate-600 dark:text-slate-300 mb-1 break-words">
                                        <span className="font-medium">Username:</span> {entry.username}
                                    </p>

                                    <section className="flex items-center text-sm text-slate-600 dark:text-slate-300 flex-wrap">
                                        <span className="font-medium mr-1">Password:</span>
                                        <span className="font-mono mr-2">
                                            {showPasswords[index] ? entry.password : "••••••••"}
                                        </span>
                                        <button
                                            onClick={() => togglePassword(index)}
                                            className="cursor-pointer text-slate-500 hover:text-slate-700 dark:hover:text-slate-200 transition"
                                            title={showPasswords[index] ? "Hide Password" : "Show Password"}
                                        >
                                            {showPasswords[index] ? <EyeOff size={18} /> : <Eye size={18} />}
                                        </button>
                                    </section>
                                </li>
                            ))}
                        </ul>
                    )}
                </section>
            </section>
        </>
    );
};

export default CredentialsPage;
