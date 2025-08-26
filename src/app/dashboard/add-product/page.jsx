'use client';
import Loading from '@/components/Loading';
import React, { Suspense } from 'react';
import AddProduct from './components/AddProduct';

const page = () => {
    return (
        <Suspense fallback={Loading}>
            <AddProduct></AddProduct>
        </Suspense>
    );
};

export default page;