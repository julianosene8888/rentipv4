'use server'

import { signIn, auth } from '@/auth';
import { AuthError } from 'next-auth';
import { IpamService } from './ipam';
import { redirect } from 'next/navigation';

export async function rentBlock(cidr: string, formData: FormData) {
    const session = await auth();
    if (!session?.user?.id) throw new Error("Unauthorized");

    try {
        await IpamService.rentBlock(session.user.id, cidr);
    } catch (error) {
        console.error("Rent Error:", error);
        // We can't easily return the error to the form without useActionState,
        // but for now let's just throw to ensure it fails loudly or redirect.
        throw error;
    }

    redirect('/dashboard');
}

export async function registerBlockAction(formData: FormData) {
    const session = await auth();
    if (!session?.user?.id) throw new Error("Unauthorized");

    const cidr = formData.get('cidr') as string;
    const asn = formData.get('asn') as string;
    const price = parseFloat((formData.get('price') as string).replace('R$', '').replace('.', '').replace(',', '.')); // Basic clean

    try {
        await IpamService.registerBlock(session.user.id, cidr, asn, price);
    } catch (error) {
        console.error("Register Error:", error);
        // Ideally useActionState would handle this, but for now throwing
        throw error;
    }

    redirect('/dashboard');
}

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
) {
    try {
        await signIn('credentials', formData);
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Invalid credentials.';
                default:
                    return 'Something went wrong.';
            }
        }
        throw error;
    }
}
