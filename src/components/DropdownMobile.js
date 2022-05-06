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
				<Menu.Button className='flex border-transparent text-white  block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-right'>
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
								<a href='https://calculadora.app.einsteinfloripa.com.br/'>
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
