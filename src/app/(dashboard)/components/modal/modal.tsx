import React, { ReactNode } from 'react';
import { IoClose } from "react-icons/io5";
import { useModalsContext } from '@/contexts/modals.context';

interface Modal {
	title: string
	children: ReactNode
}

const Modal = ({ title, children }: Modal) => {

	const { closeModal } = useModalsContext();

	return (
		<>
			<div className="z-[255] hidden md:block absolute top-0 left-0 right-0 bottom-0 bg-black opacity-25 drop-shadow-lg" />
			<div className="z-[256] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[--color-dark] border border-[--color-dark-accent] md:rounded-xl p-4 h-full w-full md:w-96 md:h-max">
				<div className="flex justify-between items-center w-full mb-4">
					<h1 className="font-bold truncate">
						{title}
					</h1>
					<div className="flex justify-center items-center">
						<button onClick={() => closeModal()}>
							<IoClose size={24} />
						</button>
					</div>
				</div>
				{children}
			</div>
		</>
	)
}

export default Modal