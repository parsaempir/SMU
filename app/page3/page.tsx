import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function Page3() {
    return (
        <div className="flex flex-col min-h-screen" dir="rtl">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-20 text-center">
                <h1 className="text-3xl font-bold">صفحه ۳</h1>
                <p className="mt-4 text-gray-600">این محتوای صفحه سوم است.</p>
            </main>
            <Footer />
        </div>
    );
}
