'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { z } from 'zod';

type Step = 'email' | 'otp' | 'password';

// Zod schemas for validation
const emailSchema = z.object({
    email: z.string()
        .min(1, 'Email không được để trống')
        .email('Email không hợp lệ'),
});

const otpSchema = z.object({
    otp: z.string()
        .length(6, 'Mã OTP phải gồm 6 chữ số')
        .regex(/^\d+$/, 'Mã OTP chỉ được chứa số'),
});

const passwordSchema = z.object({
    newPassword: z.string()
        .min(8, 'Mật khẩu phải có ít nhất 8 ký tự')
        .max(100, 'Mật khẩu không được quá 100 ký tự'),
    confirmPassword: z.string()
        .min(1, 'Vui lòng xác nhận mật khẩu'),
}).refine((data) => data.newPassword === data.confirmPassword, {
    message: 'Mật khẩu xác nhận không khớp',
    path: ['confirmPassword'],
});

export default function ForgotPasswordPage() {
    const router = useRouter();
    const [step, setStep] = useState<Step>('email');
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    // Handle email submission (Step 1)
    const handleEmailSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrors({});
        setMessage('');

        // Validate with Zod
        const result = emailSchema.safeParse({ email });
        
        if (!result.success) {
            const fieldErrors: Record<string, string> = {};
            result.error.issues.forEach((issue) => {
                if (issue.path[0]) {
                    fieldErrors[issue.path[0].toString()] = issue.message;
                }
            });
            setErrors(fieldErrors);
            return;
        }

        setLoading(true);
        try {
            // Mock API call to JSONPlaceholder
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: 'Send OTP',
                    body: `OTP request for email: ${email}`,
                    userId: 1,
                }),
            });

            if (response.ok) {
                setMessage('Mã OTP đã được gửi đến email của bạn');
                setTimeout(() => {
                    setStep('otp');
                    setMessage('');
                }, 1500);
            } else {
                setErrors({ email: 'Không thể gửi OTP. Vui lòng thử lại' });
            }
        } catch (error) {
            setErrors({ email: 'Đã xảy ra lỗi. Vui lòng thử lại' });
        } finally {
            setLoading(false);
        }
    };

    // Handle OTP verification (Step 2)
    const handleOtpSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrors({});
        setMessage('');

        // Validate with Zod
        const result = otpSchema.safeParse({ otp });
        
        if (!result.success) {
            const fieldErrors: Record<string, string> = {};
            result.error.issues.forEach((issue) => {
                if (issue.path[0]) {
                    fieldErrors[issue.path[0].toString()] = issue.message;
                }
            });
            setErrors(fieldErrors);
            return;
        }

        setLoading(true);
        try {
            // Mock API call to verify OTP
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: 'Verify OTP',
                    body: `OTP: ${otp} for email: ${email}`,
                    userId: 1,
                }),
            });

            if (response.ok) {
                setMessage('Xác thực thành công');
                setTimeout(() => {
                    setStep('password');
                    setMessage('');
                }, 1500);
            } else {
                setErrors({ otp: 'Mã OTP không đúng' });
            }
        } catch (error) {
            setErrors({ otp: 'Đã xảy ra lỗi. Vui lòng thử lại' });
        } finally {
            setLoading(false);
        }
    };

    // Handle password reset (Step 3)
    const handlePasswordSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrors({});
        setMessage('');

        // Validate with Zod
        const result = passwordSchema.safeParse({ newPassword, confirmPassword });
        
        if (!result.success) {
            const fieldErrors: Record<string, string> = {};
            result.error.issues.forEach((issue) => {
                if (issue.path[0]) {
                    fieldErrors[issue.path[0].toString()] = issue.message;
                }
            });
            setErrors(fieldErrors);
            return;
        }

        setLoading(true);
        try {
            // Mock API call to reset password
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: 'Reset Password',
                    body: `New password for email: ${email}`,
                    userId: 1,
                }),
            });

            if (response.ok) {
                setMessage('Đặt lại mật khẩu thành công!');
                setTimeout(() => {
                    router.push('/auth/login');
                }, 2000);
            } else {
                setErrors({ general: 'Không thể đặt lại mật khẩu. Vui lòng thử lại' });
            }
        } catch (error) {
            setErrors({ general: 'Đã xảy ra lỗi. Vui lòng thử lại' });
        } finally {
            setLoading(false);
        }
    };

    // Resend OTP
    const handleResendOtp = async () => {
        setMessage('');
        setErrors({});
        setLoading(true);

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: 'Resend OTP',
                    body: `Resend OTP for email: ${email}`,
                    userId: 1,
                }),
            });

            if (response.ok) {
                setMessage('Mã OTP mới đã được gửi');
            } else {
                setErrors({ otp: 'Không thể gửi lại OTP' });
            }
        } catch (error) {
            setErrors({ otp: 'Đã xảy ra lỗi' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-white">
            {/*Content*/}
            <main className="flex flex-1 flex-row">
                {/*Left*/}
                <div className="flex flex-col items-center justify-center bg-blue-600 text-white p-6 w-1/2">
                    <img
                        src="/images/LOGO.jpg"
                        alt="HHCloset"
                        className="w-75 h-75 mb-4 rounded-full"
                    />
                    <p className="text-center text-lg mb-6 font-bold">
                        Nền tảng chia sẻ và <br />
                        đấu giá thời trang số ở Việt Nam
                    </p>
                </div>

                {/*Right*/}
                <div className="flex flex-col items-center justify-center bg-blue-600 text-white p-6 w-1/2">
                    <div className="bg-white text-black rounded-xl shadow-md w-full max-w-sm p-6">
                        {/* Step 1: Email Input */}
                        {step === 'email' && (
                            <>
                                <h2 className="text-xl font-bold mb-4">Quên mật khẩu</h2>
                                <p className="text-sm text-gray-600 mb-4">
                                    Nhập email của bạn để nhận mã xác thực
                                </p>

                                {message && (
                                    <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md text-sm">
                                        {message}
                                    </div>
                                )}

                                <form onSubmit={handleEmailSubmit} className="flex flex-col gap-4">
                                    <div>
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            disabled={loading}
                                        />
                                        {errors.email && (
                                            <p className="text-xs text-red-600 mt-1">{errors.email}</p>
                                        )}
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-40 mx-auto flex justify-center bg-blue-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed truncate"
                                    >
                                        {loading ? 'Đang gửi...' : 'Gửi mã'}
                                    </button>
                                </form>

                                <div className="flex justify-center mt-4">
                                    <p className="text-sm">
                                        <a
                                            href="/auth/login"
                                            className="font-semibold text-blue-600 hover:underline"
                                        >
                                            Quay lại đăng nhập
                                        </a>
                                    </p>
                                </div>
                            </>
                        )}

                        {/* Step 2: OTP Verification */}
                        {step === 'otp' && (
                            <>
                                <h2 className="text-xl font-bold mb-4">Nhập mã xác thực</h2>
                                <p className="text-sm text-gray-600 mb-4">
                                    Mã xác thực gồm 6 chữ số đã được gửi đến <br />
                                    email <strong>{email}</strong>
                                </p>

                                {message && (
                                    <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md text-sm">
                                        {message}
                                    </div>
                                )}

                                <form onSubmit={handleOtpSubmit} className="flex flex-col gap-4">
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Nhập mã xác thực (6 chữ số)"
                                            value={otp}
                                            onChange={(e) => setOtp(e.target.value)}
                                            maxLength={6}
                                            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            disabled={loading}
                                        />
                                        {errors.otp && (
                                            <p className="text-xs text-red-600 mt-1">{errors.otp}</p>
                                        )}
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-40 mx-auto flex justify-center bg-blue-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed truncate"
                                    >
                                        {loading ? 'Đang xác thực...' : 'Xác thực'}
                                    </button>
                                </form>

                                <div className="flex justify-center mt-4">
                                    <p className="text-sm">
                                        Bạn không nhận được mã?{' '}
                                        <button
                                            onClick={handleResendOtp}
                                            disabled={loading}
                                            className="font-semibold text-blue-600 hover:underline disabled:text-gray-400"
                                        >
                                            Gửi lại
                                        </button>
                                    </p>
                                </div>
                            </>
                        )}

                        {/* Step 3: Password Reset */}
                        {step === 'password' && (
                            <>
                                <h2 className="text-xl font-bold mb-4">Đặt lại mật khẩu</h2>

                                {message && (
                                    <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md text-sm">
                                        {message}
                                    </div>
                                )}

                                {errors.general && (
                                    <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
                                        {errors.general}
                                    </div>
                                )}

                                <form onSubmit={handlePasswordSubmit} className="flex flex-col gap-4">
                                    <div className="mb-3">
                                        <label className="block text-sm mb-1">Nhập mật khẩu mới</label>
                                        <input
                                            type="password"
                                            value={newPassword}
                                            onChange={(e) => setNewPassword(e.target.value)}
                                            className="w-full border-b border-gray-400 focus:outline-none py-1"
                                            disabled={loading}
                                        />
                                        {errors.newPassword && (
                                            <p className="text-xs text-red-600 mt-1">
                                                {errors.newPassword}
                                            </p>
                                        )}
                                    </div>

                                    <div className="mb-3">
                                        <label className="block text-sm mb-1">
                                            Xác nhận mật khẩu mới
                                        </label>
                                        <input
                                            type="password"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            className="w-full border-b border-gray-400 focus:outline-none py-1"
                                            disabled={loading}
                                        />
                                        {errors.confirmPassword && (
                                            <p className="text-xs text-red-600 mt-1">
                                                {errors.confirmPassword}
                                            </p>
                                        )}
                                    </div>

                                    <p className="text-xs text-red-600">
                                        * Lưu ý: Mật khẩu có độ dài từ 8 ký tự.
                                    </p>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-40 mx-auto flex justify-center bg-blue-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed truncate"
                                    >
                                        {loading ? 'Đang xử lý...' : 'Hoàn tất'}
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}