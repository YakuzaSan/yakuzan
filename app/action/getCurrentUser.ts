// Imports the Prisma instance
import prisma from "@/app/libs/prismadb";
import getSession from "@/app/action/getSession";

// Imports the function getSession from a local file

// Defines an asynchronous function getCurrentUser
const getCurrentUser = async () => {
    try {
        // Retrieves the user session using the getSession function
        const session = await getSession();

        // Checks if the session or user email is not available
        if (!session?.user?.email) {
            return null;
        }

        // Retrieves the current user based on the email from the session
        const currentUser = await prisma.user.findUnique({
            where: {
                email: session.user.email as string
            }
        });

        // If no user is found, returns null
        if (!currentUser) {
            return null;
        }

        // Returns the details of the current user
        return currentUser;
    } catch (error: any) {
        // Catches any errors that might occur during this process
        return null;
    }
};

// Exports the getCurrentUser function as the default export
export default getCurrentUser;

 //--ASYNC EXPLANATION--
//When JavaScript engine encounters an await keyword inside an async function,
// it pauses the function's execution until the awaited operation
// (which is typically a Promise) resolves.
// Meanwhile, other code outside of this function can continue to execute.