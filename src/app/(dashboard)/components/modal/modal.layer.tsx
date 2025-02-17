import React from 'react';
import Modal from "@/components/modal/modal";
import EditDetailModal from '@/services/project/details.modal';

const ModalLayer = () => {
	return (
		<>
			<Modal title="Create New Project">
				<EditDetailModal />
			</Modal>
		</>
	)
}

export default ModalLayer