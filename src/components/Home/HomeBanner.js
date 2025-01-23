import Link from "next/link";

function HomeBanner() {
	return (
		<div className='relative overflow-x-hidden'>
			<div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
				<div className='absolute inset-0'>
					<div className='absolute inset-0 bg-home-pattern' />
					<div className='absolute inset-x-0 bottom-0'>
						<div className='flex justify-center lg:w-full'>
							<img
								className='justify-center w-5/6 lg:w-auto pt-50'
								src='/images/banner_home.png'
								alt='docente e aluno'
							/>
						</div>
					</div>
				</div>
				<div className='relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8'>
					<h1 className='font-extrabold tracking-tight text-center'>
						<span className='block text-4xl text-blue-900 lg:text-6xl'>
							De Aluno para Aluno
						</span>
						<span className='block text-2xl text-blue-900 lg:text-5xl'>
							transformando a história
						</span>
						<br />
					</h1>
				</div>
				<div className='relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8'>
					<div className='flex flex-row justify-between'>
						<Link href='/processo-seletivo'>
							<button className='px-3 py-2 text-blue-900 transition duration-150 ease-in-out bg-white border-l-4 border-blue-900 lg:text-black md:text-white sm:text-white lg:bg-transparent md:bg-transparent sm:bg-transparent lg:border-blue-900 md:border-blue-900 sm:border-blue-900 lg:grid lg:justify-items-start hover:bg-blue-900 hover:text-white lg:text-3xl sm:text-2xl'>
								<span className='block pb-2'>Seja um</span>
								<span className='block text-left'>voluntário</span>
							</button>
						</Link>
						<Link
							href='/processo-seletivo/alunos'
							target='Starfall'>
							<button className='px-3 py-2 text-blue-900 transition duration-150 ease-in-out bg-white border-r-4 border-blue-900 lg:text-black md:text-white sm:text-white lg:bg-transparent md:bg-transparent sm:bg-transparent lg:border-blue-900 md:border-blue-900 sm:border-blue-900 lg:grid lg:justify-items-end hover:bg-blue-900 hover:text-white lg:text-3xl sm:text-2xl'>
								<span className='block pb-2'>Seja um</span>
								<span className='block text-right'>aluno</span>
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomeBanner;
