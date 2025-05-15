import React from 'react';
import { ShieldCheck, Lock, KeyRound, Database } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const About = () => {
  return (
    <>
      <Navbar />

      <main className="bg-slate-50 dark:bg-slate-900 flex flex-col items-center px-6 py-12">
        {/* Header */}
        <section className="max-w-4xl w-full text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4">
            About Pass<span className='text-emerald-600'>Matters</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            PassMatters is a minimal, private, and secure password manager that stores all your login credentials directly in your browser — giving you full control.
          </p>
        </section>

        {/* Features Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
          <article className="flex items-start gap-4 p-6 bg-white dark:bg-slate-800 rounded-xl shadow-md">
            <ShieldCheck className="text-emerald-500 w-8 h-8 shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white">Top-Notch Security</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                All credentials are handled locally and never leave your device. Your data stays with you.
              </p>
            </div>
          </article>

          <article className="flex items-start gap-4 p-6 bg-white dark:bg-slate-800 rounded-xl shadow-md">
            <KeyRound className="text-emerald-500 w-8 h-8 shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white">Easy Access</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Quickly add, view, and manage your saved credentials through a user-friendly interface.
              </p>
            </div>
          </article>

          <article className="flex items-start gap-4 p-6 bg-white dark:bg-slate-800 rounded-xl shadow-md">
            <Lock className="text-emerald-500 w-8 h-8 shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white">Local Storage Only</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                No cloud. No servers. Everything is stored securely in your browser’s local storage for maximum privacy and control.
              </p>
            </div>
          </article>

          <article className="flex items-start gap-4 p-6 bg-white dark:bg-slate-800 rounded-xl shadow-md">
            <Database className="text-emerald-500 w-8 h-8 shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white">Lightweight & Fast</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Built for speed and simplicity. No unnecessary features, just what you need — clean, fast, and efficient.
              </p>
            </div>
          </article>
        </section>

        {/* Closing Note */}
        <section className="mt-12 max-w-3xl w-full text-center">
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            PassMatters is your on-device digital vault. Simple to use, completely private, and always in your control — built with privacy-first principles.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default About;
