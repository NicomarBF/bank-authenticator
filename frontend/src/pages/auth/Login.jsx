import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import { Button, Input, Typography } from "@material-tailwind/react";

// Icons
import { Backspace } from 'phosphor-react';

// Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// eslint-disable-next-line react/prop-types
const Login = ({ onLogin }) => {

    const navigate = useNavigate();
    const [password, setPassword] = useState('');

    const handleButtonClick = (value) => {
        if (password.length <= 8) {
            setPassword(prevPassword => prevPassword + value);
        }
    };

    const handleClearClick = () => {
        setPassword('');
    };

    const handleAccessClick = () => {
        console.log('Senha:', password);
        if (!password) {
            toast.warning('A senha não pode ser vazia', { position: "top-right", autoClose: 2000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, pauseOnFocusLoss: false, theme: "light" });
        } else {
            onLogin();
            navigate('/');
        }
    };

    return(
        <div className='flex justify-center items-center align-middle w-full h-screen bg-[#EEF2F5]'>
            <div className='card w-1/5 h-1/2 rounded-md px-12 py-12 bg-white'>
                <div className='flex flex-col'>
                    <label className='text-2xl text-label font-bold'>Segurança Bancária</label>
                    <label className='text-sm text-desc font-normal'>Acesso Seguro ao seu Banco</label>
                </div>

                <div className="w-[18rem] py-8">
                    <Input
                        type="password"
                        label="Senha"
                        value={password}
                        readOnly
                    />
                    <Typography
                        variant="small"
                        color="gray"
                        className="mt-2 flex items-center gap-1 font-normal"
                    >
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="-mt-px h-4 w-4"
                        >
                        <path
                            fillRule="evenodd"
                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                            clipRule="evenodd"
                        />
                        </svg>
                        Informe sua senha com o teclado abaixo
                    </Typography>
                </div>

                <div className="w-[32rem] flex gap-2.5">
                    <Button variant="outlined" onClick={() => handleButtonClick('3')}>3 ou 9</Button>
                    <Button variant="outlined" onClick={() => handleButtonClick('0')}>0 ou 5</Button>
                    <Button variant="outlined" onClick={() => handleButtonClick('2')}>2 ou 8</Button>
                </div>

                <div className="w-[32rem] flex gap-2.5 py-4">
                    <Button variant="outlined" onClick={() => handleButtonClick('1')}>1 ou 4</Button>
                    <Button variant="outlined" onClick={() => handleButtonClick('6')}>6 ou 7</Button>
                    <Button variant="outlined" className='w-[5.5rem] flex items-center justify-center' onClick={handleClearClick}>
                        <Backspace size={16} />
                    </Button>
                </div>

                <div className="w-[32rem] flex gap-2.5 py-4">
                    <Button variant="filled" className='w-[18rem]' onClick={handleAccessClick}>Acessar</Button>
                </div>
            </div>

            <ToastContainer className={'text-sm'} style={{ zIndex: "10000" }} />
        </div>
    )
};

export default Login;