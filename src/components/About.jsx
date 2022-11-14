const About = () => {
  return (
    <div className='w-full my-32'>
      <div className='max-w-[1240px] mx-auto'>
        <div className='text-center'>
          <div>
            <h2 className='text-5xl font-bold'>
              Trusted by developers around the world
            </h2>
            <p>
              Loream ipsum seafd ipss Loream ipsum seafd ipssLoream ipsum seafd
              ipss
            </p>
          </div>
        </div>

        <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
          <div className='border py-8 rounded-xl shadow-xl'>
            <p className='text-6xl font-bold text-indigo-600'>100%</p>
            <p className='text-gray-400 mt-2'>Completion</p>
          </div>
          <div className='border py-8 rounded-xl shadow-xl'>
            <p className='text-6xl font-bold text-indigo-600'>24/7</p>
            <p className='text-gray-400 mt-2'>Delivery</p>
          </div>
          <div className='border py-8 rounded-xl shadow-xl'>
            <p className='text-6xl font-bold text-indigo-600'>100 K</p>
            <p className='text-gray-400 mt-2'>Transactions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
