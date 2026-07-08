// @ts-nocheck
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { prisma } from '../../../../../lib/db';

export const dynamic = 'force-dynamic';

import UserDetails from '../../components/UserDetails';


const CheckoutDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const checkouts = await prisma.checkout.findUnique({
        include: {
            quote: {
                include: {
                    services: true,
                },
            },
        },
        where: {
            id: id
        }
    });
    console.log('checkouts', checkouts)
    return (
        <UserDetails checkouts={checkouts} />
    );
};

export default CheckoutDetails;
