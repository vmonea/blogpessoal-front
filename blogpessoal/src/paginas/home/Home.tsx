// import React from 'react';
import './Home.css';

function Home(){
    return (
           <>

        <div className="bg-indigo-900 w-screen flex justify-center">

            <div className='container grid grid-cols-2 text-white'>

                <div className="max-w-7xl flex flex-col items-center gap-4 justify-center py-4">

                    <h2 className="text-5xl font-bold">Home</h2>
                    <h2 className="text-xl">oiii</h2>

                <div className='flex justify-around gap-4'>

                    <div className='rounded text-white border-white
                    border-solid border-2 py-2 px-4'>
                    Nova Postagem

                    </div>

                </div>

            </div>

                
                <div className='max-w-7xl flex flex-col items-center'>
            
                    <img src="https://imgur.com/VpwApCU.png" 
                    alt="imagem home"
                    className='w-2/3'/>

                </div>
            
            </div>

        </div>

        </>
    );
}

export default Home;