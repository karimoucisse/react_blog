import { useState} from "react"
import { IoMdClose } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [open, setOpen] = useState(false)

	// const onNavBUttonClick = () =>
	// {

	// }
	return (
	<div className="w-full  h-16 md:h-20 flex items-center justify-between overflow-hidden">
		<Link to="/" className="text-2xl">42 journey blog</Link>
		{/* MOBILE */}
		<div className="md:hidden">
			<div className="cursor-pointer text-2xl" onClick = {() => setOpen((prev) => !prev)}>
				{open ? <IoMdClose/> : <FaBars/>}
			</div>
			{/* MOBILE LINK LIST */}
			<div className={`flex flex-col w-full h-screen justify-center items-center absolute top-16
				${open ? "left-0" : "left-[-100vw]"} transition-all ease-in-out gap-8 font-medium text-lg`}
			>
				<Link to="/" >Accueil</Link>
				<Link to="/tendacy" >Tendance</Link>
				<Link to="/popular" >Plus Populaire</Link>
				<Link to="/about" >A Propos</Link>
				<Link to="/login" >
					<button className="py-2 px-4 bg-[#8B2DE9] rounded-3xl text-white">Se connecter</button>
				</Link>
			</div>
		</div>
		{/* DESKTOP */}
		<div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
			<Link to="/" >Accueil</Link>
			<Link to="/tendency" >Tendance</Link>
			<Link to="/popular" >Plus Populaire</Link>
			<Link to="/about" >A Propos</Link>
			<Link to="/login" >
				<button className="py-2 px-4 bg-[#8B2DE9] rounded-3xl text-white cursor-pointer">Se connecter</button>
			</Link>
		</div>
	</div>
	)
}

export default Navbar
