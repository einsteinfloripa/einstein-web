import Link from "next/link";

function HomeBanner() {
	return (
		<div className='relative overflow-x-hidden'>
			<div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
				<div className='absolute inset-0'>
					<div className='absolute inset-0 bg-home-pattern' />
					<div className='absolute inset-x-0 bottom-0'>
						<div className='flex justify-center lg:w-full'>
							<img
								className='lg:w-auto w-5/6 pt-50 justify-center'
								src='/images/banner_home.png'
								alt='docente e aluno'
							/>
						</div>
					</div>
				</div>
				<div className='relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8'>
					<h1 className='text-center font-extrabold tracking-tight'>
						<span className='block text-blue-900 lg:text-6xl text-4xl'>
							De Aluno para Aluno
						</span>
						<span className='block text-blue-900 lg:text-5xl text-2xl'>
							transformando a história
						</span>
						<br />
					</h1>
				</div>
				<div className='relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8'>
					<div className='flex flex-row justify-between'>
						<Link href='/processo-seletivo'>
							<button className='lg:text-black md:text-white sm:text-white text-blue-900 bg-white lg:bg-transparent md:bg-transparent sm:bg-transparent border-l-4 lg:border-blue-900 md:border-blue-900 sm:border-blue-900 border-blue-900 px-3 py-2 lg:grid lg:justify-items-start hover:bg-blue-900 hover:text-white transition duration-150 ease-in-out lg:text-3xl sm:text-2xl'>
								<span className='block pb-2'>Seja um</span>
								<span className='block text-left'>voluntário</span>
							</button>
						</Link>
						<a
							href='https://app.pipefy.com/public/form/3hCGaAtq'
							target='Starfall'>
							<button className='lg:text-black md:text-white sm:text-white text-blue-900 bg-white lg:bg-transparent md:bg-transparent sm:bg-transparent border-r-4 lg:border-blue-900 md:border-blue-900 sm:border-blue-900  border-blue-900 px-3 py-2 lg:grid lg:justify-items-end hover:bg-blue-900 hover:text-white transition duration-150 ease-in-out lg:text-3xl sm:text-2xl'>
								<span className='block pb-2'>Seja um</span>
								<span className='block text-right'>aluno</span>
							</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomeBanner;
