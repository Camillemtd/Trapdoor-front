import { RingLoader } from "react-spinners"
export default function CanvasLoader() {
	return (
		<div className="absolute h-screen w-screen top-0 left-0 bg-black z-40 flex justify-center items-center"><RingLoader color="#95A5A6" size={200}/> </div>
	)
}