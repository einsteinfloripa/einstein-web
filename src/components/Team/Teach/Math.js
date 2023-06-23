import { urlFor } from "@sanity";

function Math({ member }) {
  return (
    <div className='flex justify-center'>
      <ul className='space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8'>
        {member.map((eisteiniano) => (
          <li key={eisteiniano.name} className='h-96 w-72 relative'>
            {eisteiniano.isBirthday ? (
              <div className='conteiner-cake'>
                <div className='cake'>
                  <div className='candle'>
                    <div className='fire'></div>
                    <div className='fire'></div>
                    <div className='fire'></div>
                    <div className='fire'></div>
                    <div className='fire'></div>
                  </div>
                  <div className='frosting'></div>
                  <div className='bizcocho'></div>
                </div>
              </div>
            ) : (
              <></>
            )}
            <div className='pt-5 space-y-4 bg-white rounded-md drop-shadow-xl h-96 flex flex-col items-center'>
              <div>
                <img
                  className={`object-cover shadow-lg rounded-lg h-64 w-64 ${
                    eisteiniano.isBirthday ? "" : "grayscale"
                  }`}
                  src={urlFor(eisteiniano?.image).url()}
                  alt='member image'
                />
              </div>

              <div className='space-y-1 xl:flex xl:items-center xl:justify-between'>
                <div className='font-medium text-sm text-center'>
                  <h3 className='text-xl'>{eisteiniano.name}</h3>
                  <p className='text-blue text-center'>
                    {eisteiniano.role} de {eisteiniano.subject} {eisteiniano.front}
                  </p>
                  <p className='text-center'>{`${eisteiniano.course} (${eisteiniano.university})`}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Math;
