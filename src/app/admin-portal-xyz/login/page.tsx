'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../../lib/supabaseClient';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setLoginError('Email atau password salah. Silakan coba lagi.');
    } else {
      setLoginError('');
      router.push('/admin-portal-xyz/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg">
        {/* Logo Placeholder */}
        <div className="flex justify-center mb-6">
          <div className="h-10 w-10 bg-purple-600 rounded-full" />
        </div>

        <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">Sign in to Admin Portal</h2>

        {loginError && (
          <div className="mb-4 text-sm text-red-600 bg-red-100 px-4 py-2 rounded-md">
            {loginError}
          </div>
        )}

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <button
            onClick={handleLogin}
            className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}
