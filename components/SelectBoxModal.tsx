
interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode; // Permet d'inclure n'importe quel contenu JSX comme enfant de la modal
  }

  const SelectBoxModal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
	if (!isOpen) return null;
	return (
		<div className="bg-black text-white">
			Hello
		</div>
	)
}

export default SelectBoxModal;