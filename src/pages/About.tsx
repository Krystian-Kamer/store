const About = () => {
  return (
    <>
      <div className='flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center '>
        <h1 className='text-4xl font-bold leading-none tracking-tight sm:text-6-xl'>
          We love
        </h1>
        <div className='stats bg-primary shadow'>
          <div className='stat'>
            <div className='stat-tile text-primary-content text-4xl font-bold tracking-widest'>
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className='mt-6 text-lg leading-8 max-w-2xl mx-auto'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe veniam
        rerum ipsum pariatur incidunt obcaecati maiores molestias corrupti
        aperiam possimus. Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Esse maxime, assumenda iusto tenetur optio iste rerum quae quia
        amet veritatis!
      </p>
    </>
  );
};
export default About;
