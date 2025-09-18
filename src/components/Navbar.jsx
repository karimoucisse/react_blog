import { useState } from "react"
import { IoMdClose } from "react-icons/io";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
	const [open, setOpen] = useState(false)

	// const onNavBUttonClick = () =>
	// {

	// }
	return (
	<div className="w-full h-16 md:h-20 flex items-center justify-between">
		<div className="text-2xl">42 journey blog</div>
		{/* MOBILE */}
		<div className="md:hidden">
			<div className="cursor-pointer text-2xl" onClick = {() => setOpen((prev) => !prev)}>
				{open ? <IoMdClose/> : <FaBars/>}
			</div>
			{/* MOBILE LINK LIST */}
			<div className={`flex flex-col w-full h-screen justify-center items-center absolute top-16
				${open ? "-right-0" : "-right-[100%]"} transition-all ease-in-out gap-8 font-medium text-lg`}
			>
				<a href="">Accueil</a>
				<a href="">Tendance</a>
				<a href="">Plus Populaire</a>
				<a href="">A Propos</a>
				<a href="">
					<button className="py-2 px-4 bg-[#191919] rounded-3xl text-white">Se connecter</button>
				</a>
			</div>
		</div>
		{/* DESKTOP */}
		<div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
			<a href="">Accueil</a>
			<a href="">Tendance</a>
			<a href="">Plus populaire</a>
			<a href="">A propos</a>
			<a href="">
				<button className="py-2 px-4 bg-[#8B2DE9] rounded-3xl text-white cursor-pointer">Se connecter</button>
			</a>
		</div>
	</div>
	)
}

export default Navbar
