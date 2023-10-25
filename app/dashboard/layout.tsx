
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'


export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {



    return (
        <main className='flex flex-col md:flex-row h-screen overflow-hidden'>
            <Sidebar />
            <div className={`flex-1 bg-gray-200 overflow-y-auto`}>
                <Navbar />
                {children}
            </div>
        </main>
    )
}
