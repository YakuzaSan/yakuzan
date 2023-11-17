import getConversations from "@/app/action/getConversations";
import getUsers from "@/app/action/getUsers";
import Sidebar from "../components/sidebar/Sidebar";
import ConversationList from "@/app/conversations/components/ConversationList";



export default async function ConversationsLayout({
  children
}: {
    children: React.ReactNode,
}) {
    const conversations = await getConversations();
    const users = await getUsers();

    return (

        <Sidebar>
            <div className="h-full">
                <ConversationList
                    users={users}
                    title="Messages"
                    initialItems={conversations}
                />
                {children}
            </div>
        </Sidebar>
    );
}