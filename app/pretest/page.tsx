'use client';
import { useState, useEffect } from 'react';
import { CheckCircle, XCircle, Award, RefreshCw } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { createClient } from "@/lib/supabase/client"; // client-side
import Link from 'next/link';

export default function PreTestPage() {
    const [answers, setAnswers] = useState<Record<number, string>>({});
    const [showResults, setShowResults] = useState(false);
    const [score, setScore] = useState(0);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
    const [email, setEmail] = useState('');

    const router = useRouter();
    
    useEffect(() => {
        const supabase = createClient();
        supabase.auth.getUser().then(({ data, error }) => {
            if (error || !data.user || !data.user.email) {
                router.push("/auth/login");
            } else {
                setIsAuthenticated(true);
                setEmail(data.user.email);
            }
        });
    }, [router]);


    interface Question {
        id: number;
        question: string;
        options: { [key: string]: string };
        correct: string;
    }

    const questions: Question[] = [
        {
            id: 1,
            question: "Apa yang dimaksud dengan pendidikan seksual?",
            options: {
                a: "Pendidikan berhubungan badan yang mencakup semua tentang alat kelamin.",
                b: "Pembelajaran yang bertujuan memberikan pemahaman segala aspek seputar seksualitas.",
                c: "Hal-hal yang mendorong perilaku seksual berisiko tinggi dan hanya penyakit.",
                d: "Semua yang berhubungan tentang alat kelamin dan mengatur cara berhubungan seksual."
            },
            correct: "b"
        },
        {
            id: 2,
            question: "Apa tujuan utama dari pendidikan seksual?",
            options: {
                a: "Mendorong perilaku seksual yang tidak aman",
                b: "Mengajarkan cara berhubungan seksual",
                c: "Memberikan informasi yang benar dan mengurangi stigma",
                d: "Melarang hubungan seksual sebelum menikah"
            },
            correct: "c"
        },
        {
            id: 3,
            question: "Dalam penyebutan alat kelamin laki-laki, manakah yang dapat diterapkan pada anak dengan hambatan penglihatan?",
            options: {
                a: "Penis",
                b: "Burung",
                c: "Kelamin",
                d: "Alat Vital"
            },
            correct: "a"
        },
        {
            id: 4,
            question: "Dibawah ini yang bagian tubuh yang tidak boleh dipegang orang lain, kecuali…..",
            options: {
                a: "Bokong",
                b: "Mulut",
                c: "Dada",
                d: "Kepala"
            },
            correct: "d"
        },
        {
            id: 5,
            question: "Ada berapa runtutan membersihkan alat kelamin yang anda ketahui……",
            options: {
                a: "7 (Laki-Laki) & 8 (Perempuan)",
                b: "8 (Laki-laki) & 7 (Perempuan)",
                c: "7 (Laki-Laki & Perempuan)",
                d: "8 (Laki-Laki & Perempuan)"
            },
            correct: "a"
        },
        {
            id: 6,
            question: "Proses alami yang terjadi pada wanita, berupa keluarnya darah dari vagina secara teratur setiap bulan, disebut….",
            options: {
                a: "Pembalut",
                b: "Demam",
                c: "Menstruasi",
                d: "Vertigo"
            },
            correct: "c"
        },
        {
            id: 7,
            question: "Penyakit yang disebabkan oleh bakteri treponema pallidum dan ditularkan terutama melalui hubungan seksual adalah penyakit…..",
            options: {
                a: "Sifilis",
                b: "Herpes Genital",
                c: "HIV/AIDS",
                d: "Gonore"
            },
            correct: "a"
        },
        {
            id: 8,
            question: "Yang termasuk kedalam perilaku seksual, kecuali",
            options: {
                a: "Masturbasi",
                b: "Berfantasi",
                c: "Berjalan Bersama",
                d: "Bepelukan"
            },
            correct: "c"
        },
        {
            id: 9,
            question: "Apakah diskusi tentang hubungan romantis dengan anak dibawah umur 10 tahun boleh dilakukan?",
            options: {
                a: "Boleh",
                b: "Tidak Boleh",
                c: "Kadang-Kadang",
                d: "Sewajarnya"
            },
            correct: "b"
        },
        {
            id: 10,
            question: "Berapa usia ideal pubertas bagi anak laki-laki?",
            options: {
                a: "8-13 Tahun",
                b: "9-13 Tahun",
                c: "8-14 Tahun",
                d: "9-14 Tahun"
            },
            correct: "d"
        }
    ];

    const handleAnswerChange = (questionId: number, selectedAnswer: string) => {
        setAnswers({
            ...answers,
            [questionId]: selectedAnswer
        });
    };

    const handleSubmit = async () => {
        let correctCount = 0;
        questions.forEach(question => {
            if (answers[question.id] === question.correct) {
                correctCount++;
            }
        });
        setScore(correctCount);
        setShowResults(true);     
        const supabase = createClient();   
        const { data, error } = await supabase
            .from('userdata')
            .update({ pretest_score : correctCount*10 })
            .eq('email', email)
            .select()

        
        if (error) {
            console.error('Update error:', error)
            return { success: false, error }
        }

        return { success: true, data }

    };

    const resetTest = () => {
        setAnswers({});
        setShowResults(false);
        setScore(0);
    };

    const getScoreColor = () => {
        const percentage = (score / questions.length) * 100;
        if (percentage >= 80) return 'text-green-600';
        if (percentage >= 60) return 'text-yellow-600';
        return 'text-red-600';
    };

    const getScoreMessage = () => {
        const percentage = (score / questions.length) * 100;
        if (percentage >= 80) return 'Luar biasa! Anda memiliki pemahaman yang kuat tentang konsep Pendidikan Seksual.'
        if (percentage >= 60) return 'Kerja bagus! Anda sudah memahami dasar-dasarnya, namun masih ada ruang untuk peningkatan.'
        return 'Terus belajar! Tinjau kembali konsepnya dan coba lagi.'
    };

    if (isAuthenticated === null) {
        return <div className=" min-h-svh p-10 ">Loading...</div>
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
            <div className="md:w-3/4 mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold text-gray-800 mb-2">Pre-Test MODIS</h1>
                        <p className="text-gray-600">Selesaikan Pre-test untuk mengakses modul</p>
                    </div>

                    {!showResults ? (
                        <div className="space-y-8">
                            {questions.map((question, index) => (
                                <div key={question.id} className="bg-gray-50 rounded-xl p-6 border-l-4 border-orange-500">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                                        {index + 1}. {question.question}
                                    </h3>
                                    <div className="space-y-3">
                                        {Object.entries(question.options).map(([key, value]) => (
                                            <label key={key} className="flex items-center space-x-3 cursor-pointer hover:bg-white p-3 rounded-lg transition-colors">
                                                <input
                                                    type="radio"
                                                    name={`question-${question.id}`}
                                                    value={key}
                                                    onChange={() => handleAnswerChange(question.id, key)}
                                                    className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                                                />
                                                <span className="text-gray-700">
                                                    <span className="font-medium">{key.toUpperCase()}.</span> {value}
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            ))}

                            <div className="text-center pt-6">
                                <button
                                    onClick={handleSubmit}
                                    disabled={Object.keys(answers).length !== questions.length}
                                    className="bg-green-500 hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors shadow-lg hover:shadow-xl"
                                >
                                    Kirim
                                </button>
                                <p className="text-sm text-gray-500 mt-2">
                                    Jawab semua pertanyaan untuk mengirimkan jawaban ({Object.keys(answers).length}/{questions.length} terjawab)
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-8">

                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-gray-800 text-center">Tinjau jawaban anda</h3>
                                {questions.map((question, index) => {
                                    const userAnswer = answers[question.id];
                                    const isCorrect = userAnswer === question.correct;

                                    return (
                                        <div key={question.id} className={`rounded-xl p-6 border-l-4 ${isCorrect ? 'bg-green-50 border-green-500' : 'bg-red-50 border-red-500'}`}>
                                            <div className="flex items-start space-x-3">
                                                {isCorrect ? (
                                                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                                                ) : (
                                                    <XCircle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                                                )}
                                                <div className="flex-1">
                                                    <h4 className="text-lg font-semibold text-gray-800 mb-3">
                                                        {index + 1}. {question.question}
                                                    </h4>
                                                    <div className="space-y-2">
                                                        <p className="text-gray-700">
                                                            <span className="font-medium">Jawaban anda:</span>
                                                            <span className={`ml-2 ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                                                                {userAnswer?.toUpperCase()}. {question.options[userAnswer]}
                                                            </span>
                                                        </p>
                                                        {!isCorrect && (
                                                            <p className="text-gray-700">
                                                                <span className="font-medium">Jawaban benar:</span>
                                                                <span className="ml-2 text-green-600">
                                                                    {question.correct.toUpperCase()}. {question.options[question.correct]}
                                                                </span>
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                                                            <div className="text-center bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl p-8 text-white">
                                <Award className="w-16 h-16 mx-auto mb-4" />
                                <h2 className="text-3xl font-bold mb-2">Hasil Tes</h2>
                                <p className={`text-4xl font-bold mb-2 ${getScoreColor()}`}>
                                    {score}/{questions.length}
                                </p>
                                <p className="text-xl">
                                    Skor anda {((score / questions.length) * 100).toFixed(0)}
                                </p>
                                <p className="text-lg mt-4 bg-white/20 rounded-lg p-4">
                                    {getScoreMessage()}
                                </p>
                            </div>
                            </div>
                            <div className="text-center pt-6">
                                <Link                        
                                    href={'/module'}
                                    className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors shadow-lg hover:shadow-xl space-x-2 mx-auto"
                                >
                             
                                    <span>Lanjut ke Modul</span>
                                </Link>
                                <button
                                    onClick={resetTest}
                                    className="hover:underline flex mx-auto mt-6 items-center gap-2"
                                >                         
                                 <RefreshCw className="w-5 h-5" />           
                                    <span>Ulangi tes</span>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}