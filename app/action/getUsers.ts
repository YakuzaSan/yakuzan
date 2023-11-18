import prisma from "@/app/libs/prismadb";
import getSession from "./getSession";

const getUsers = async () => {
    const session = await getSession();

    if (!session?.user?.email) {
        return [];
    }
    //after we checked that user is correctly
    // implemented with "!email" we dont want have the conversation not ourselve but with other
    try {
        const users = await prisma.user.findMany({
            orderBy: {
                createdAt: 'desc' //newester User at the top
            },
            where: {
                NOT: {
                    email: session.user.email // chatting with me ? hell nah
                }
            }
        });

        return users;
    } catch (error: any) {
        return [];
    }
};

export default getUsers;