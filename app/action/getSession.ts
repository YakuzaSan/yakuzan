// Imports the function to retrieve the session from the server
import { getServerSession } from "next-auth";

// Imports the authentication options from the specified route
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

// Retrieves the session using the authentication options This function
// essentially fetches the session information using the provided authentication options.
export default async function getSession() {
    return await getServerSession(authOptions);
}
