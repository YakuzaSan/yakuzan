import bcrypt from "bcrypt"; // Importing the bcrypt library for password encryption
import prisma from "@/app/libs/prismadb"; // Importing the Prisma database interface
import { NextResponse } from "next/server"; // Importing NextResponse for server responses

// Function handling a POST request, taking a Request instance as a parameter
export async function POST(
    request: Request
) {
    try {
        // Reading JSON content from the request body
        const body = await request.json();

        // Destructuring the body object to retrieve the fields email, name, and password
        const {
            email,
            name,
            password
        } = body;

        // Hashing the password using bcrypt and creating the hashed password
        const hashedPassword = await bcrypt.hash(password, 12);

        // Creating a new user in the database using Prisma
        const user = await prisma.user.create({
            data: {
                email, // User email
                name, // User name
                hashedPassword // Hashed password
            }
        });

        // Returning user data as a JSON response
        return NextResponse.json(user);
    } catch (error: any) {
        // Handling errors that occur during processing
        console.log(error, 'REGISTRATION_ERROR app/api/register/route.ts');
        // Returning a 500 status message in case of an error
        return new NextResponse('Internal Error', { status: 500 });
    }
}
