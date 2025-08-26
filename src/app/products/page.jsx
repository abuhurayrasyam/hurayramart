"use client";
import React, { Suspense } from 'react';
import Loading from '@/components/Loading';
import Products from './components/Products';

const page = () => {
    return (
        <Suspense fallback={Loading}>
            <Products></Products>
        </Suspense>
    );
};

export default page;