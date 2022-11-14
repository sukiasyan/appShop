import { CheckIcon } from '@heroicons/react/24/solid';
import React from 'react';

const Pricing = () => {
  return (
    <div name='pricing' className='w-full text-white my-24'>
      <div className='w-full h-[800px] bg-slate-900 absolute mix-blend-overlay'></div>

      <div className='max-w-[1240px] mx-auto py-12'>
        <div className='text-center py-8 text-slate-300'>
          <h2 className='text-3xl uppercase'>Pricing</h2>
          <h3 className='text-5xl font-bold text-white py-8'>
            Right price for you seacrch
          </h3>
          <p className='text-3xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            doloremque quisquam in similique non, eveniet eum numquam. Numquam
            quod doloribus, optio, temporibus cum quasi necessitatibus fugit ex
            excepturi veniam exercitationem!
          </p>
        </div>

        <div className='grid md:grid-cols-2'>
          <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>
              Standart
            </span>
            <div>
              <p className='text-6xl font-bold py-4 flex'>
                $49
                <span className='text-xl text-slate-500 flex flex-col justify-end'>
                  /mo
                </span>
              </p>
            </div>
            <p className='text-2xl text-slate-500 py-6 '>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <div className='text-2xl'>
              <p className='py-4 flex'>
                <CheckIcon className='w-8 mr-5 text-green-600' />
                Lorem ipsum dolor sit
              </p>
              <p className='py-4 flex'>
                <CheckIcon className='w-8 mr-5 text-green-600' />
                Lorem ipsum dolor sit
              </p>
              <p className='py-4 flex'>
                <CheckIcon className='w-8 mr-5 text-green-600' />
                Lorem ipsum dolor sit
              </p>
              <p className='py-4 flex'>
                <CheckIcon className='w-8 mr-5 text-green-600' />
                Lorem ipsum dolor sit
              </p>
              <p className='py-4 flex'>
                <CheckIcon className='w-8 mr-5 text-green-600' />
                Lorem ipsum dolor sit
              </p>
              <button className='w-full py-4 my-4'>Get Started</button>
            </div>
          </div>

          <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>
              Standart
            </span>
            <div>
              <p className='text-6xl font-bold py-4 flex'>
                $39
                <span className='text-xl text-slate-500 flex flex-col justify-end'>
                  /mo
                </span>
              </p>
            </div>
            <p className='text-2xl text-slate-500 py-6 '>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <div className='text-2xl'>
              <p className='py-4 flex'>
                <CheckIcon className='w-8 mr-5 text-green-600' />
                Lorem ipsum dolor sit
              </p>
              <p className='py-4 flex'>
                <CheckIcon className='w-8 mr-5 text-green-600' />
                Lorem ipsum dolor sit
              </p>
              <p className='py-4 flex'>
                <CheckIcon className='w-8 mr-5 text-green-600' />
                Lorem ipsum dolor sit
              </p>
              <p className='py-4 flex'>
                <CheckIcon className='w-8 mr-5 text-green-600' />
                Lorem ipsum dolor sit
              </p>
              <p className='py-4 flex'>
                <CheckIcon className='w-8 mr-5 text-green-600' />
                Lorem ipsum dolor sit
              </p>
              <button className='w-full py-4 my-4'>Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
