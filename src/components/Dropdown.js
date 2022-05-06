/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Dropdown() {
	return (
		<Menu as='div' className='relative inline-block text-left'>
			<div>
				<Menu.Button className='flex-grow-0 xl:my-3 my-2 bg-transparent hover:bg-white text-white hover:text-blue-900 py-2 border-2 border-white hover:border-transparent rounded-lg inline-flex items-center px-3 pt-1 text-sm font-medium transition delay-150 duration-300 ease-in-out'>
					Ferramentas
					<ChevronDownIcon className='-mr-1 ml-2 h-6 w-5' aria-hidden='true' />
				</Menu.Button>
			</div>

			<Transition
				as={Fragment}
				enter='transition ease-out duration-100'
				enterFrom='transform opacity-0 scale-95'
				enterTo='transform opacity-100 scale-100'
				leave='transition ease-in duration-75'
				leaveFrom='transform opacity-100 scale-100'
				leaveTo='transform opacity-0 scale-95'>
				<Menu.Items className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
					<div className='py-1'>
						<Menu.Item>
							{({ active }) => (
								<a
									href='https://calculadora.app.einsteinfloripa.com.br/'
									className={classNames(
										active ? "bg-gray-100 text-gray-900" : "text-gray-700",
										"block px-4 py-2 text-sm",
									)}>
									Calculadora Somatório
								</a>
							)}
						</Menu.Item>
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	);
}
