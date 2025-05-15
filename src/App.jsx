import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
    const [entries, setEntries] = useState([]);
  const [formData, setFormData] = useState({
    siteUrl: '',
    siteName: '',
    username: '',
    password: '',
  });

  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem('savedEntries')) || [];
    setEntries(savedEntries);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntries = [...entries, formData];
    setEntries(newEntries);

    localStorage.setItem('savedEntries', JSON.stringify(newEntries));

    setFormData({
      siteUrl: '',
      siteName: '',
      username: '',
      password: '',
    });
  };

  return (
    <section className="custom-scrollbar h-screen w-screen overflow-auto bg-slate-50 dark:bg-slate-900 flex flex-col">
      <header className="shrink-0">
        <Navbar />
      </header>

      <main className="flex-grow mt-10 flex items-center justify-center px-4 py-2">
        <section className="w-full max-w-lg bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 space-y-5">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white text-center">Save New Credential</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <section>
              <label className="block text-sm text-slate-600 dark:text-slate-300 mb-1">Website URL</label>
              <input
                type="url"
                name="siteUrl"
                value={formData.siteUrl}
                onChange={handleChange}
                placeholder="https://example.com"
                required
                className="w-full px-3 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-white focus:ring-2 focus:ring-emerald-400"
              />
            </section>

            <section>
              <label className="block text-sm text-slate-600 dark:text-slate-300 mb-1">Website Name</label>
              <input
                type="text"
                name="siteName"
                value={formData.siteName}
                onChange={handleChange}
                placeholder="Facebook, Twitter, etc."
                required
                className="w-full px-3 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-white focus:ring-2 focus:ring-emerald-400"
              />
            </section>

            <section>
              <label className="block text-sm text-slate-600 dark:text-slate-300 mb-1">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Your username"
                required
                className="w-full px-3 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-white focus:ring-2 focus:ring-emerald-400"
              />
            </section>

            <section>
              <label className="block text-sm text-slate-600 dark:text-slate-300 mb-1">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Your password"
                required
                className="w-full px-3 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-white focus:ring-2 focus:ring-emerald-400"
              />
            </section>

            <section className="space-y-3 pt-2">
              <button
                type="submit"
                className="w-full cursor-pointer bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 rounded-md shadow-md transition-all duration-300"
              >
                Save
              </button>

              <a href="/credentials">
                <button
                  type="button"
                  className="w-full border cursor-pointer border-emerald-400 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/10 font-medium py-2 rounded-md transition-all duration-300"
                >
                  saved credentials
                </button>
              </a>
            </section>
          </form>
        </section>
      </main>

      <footer className="shrink-0">
        <Footer />
      </footer>
    </section>
  );
}

export default App;
