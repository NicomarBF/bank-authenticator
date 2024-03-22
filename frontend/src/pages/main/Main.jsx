import React from 'react';

// Components
import { Button } from "@material-tailwind/react";

// eslint-disable-next-line react/prop-types
const Main = ({ onLogout }) => {
    return(
        <div className='flex justify-center items-center align-middle w-full h-screen bg-[#EEF2F5]'>
            <div className='card w-1/5 rounded-md px-12 py-12 bg-white'>
                <div className='flex flex-col'>
                    <label className='text-2xl text-label font-bold'>Seja bem-vindo</label>
                    <label className='text-sm text-desc font-normal'>Gerencie sua conta</label>
                </div>

                <div className="w-[32rem] flex gap-2.5 py-4 mt-6">
                    <Button variant="filled" className='w-[18rem]' onClick={onLogout}>Encerrar sessão</Button>
                </div>
            </div>
        </div>
    )
};

export default Main;