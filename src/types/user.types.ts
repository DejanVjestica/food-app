export type UserContextType = {
	isModalOpen: boolean,
	isLoginOpen: boolean,
	isRegisterOpen: boolean,
	openModal: ()=> void,
	closeModal: ()=> void,
	openLogin: () => void,
	closeLogin: () => void,
	openRegister: () => void,
	closeRegister: () => void
}
