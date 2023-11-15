import DesktopSidebar from "@/app/components/sidebar/DesktopSidebar";
import MobileFooter from "@/app/components/sidebar/MobileFooter";
import getCurrentUser from "@/app/action/getCurrentUser";

async function Sidebar({ children }: {
    children: React.ReactNode,
}) {
    const currentUser = await getCurrentUser();
    return (
        <div className="h-full">
            <DesktopSidebar currentUser={currentUser!}/>
            {/* it can be null so we add ! at the end of currentUser */}
            <MobileFooter/>
            <main className="lg:pl-20 h-full">
                {children}
            </main>
        </div>
    )
}

export default Sidebar;