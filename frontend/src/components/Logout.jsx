import { MdLogout } from "react-icons/md";
import { useAuthContext } from "../context/authContext";
import toast from "react-hot-toast";
import { backendurl } from "../utils/constant";
// TODO Implement Logout functionality

export default function Logout () {

	const {authUser, setAuthUser} = useAuthContext();

	const handleLogout = async ()=>{
		try {

			const res = await fetch(backendurl+"/api/auth/logout",{credentials :"include"});
			const data  = res.json();
			console.log(data)
			setAuthUser(null);
			
		} catch (error) {
			toast.error(error.message)
		}
	}
	return (
		<>
			<img
				src={authUser?.avatarUrl }
				className='w-10 h-10 rounded-full border border-gray-800'
			/>

			<div className='cursor-pointer flex items-center p-2 rounded-lg bg-glass mt-auto border border-gray-800'
			
				onClick={handleLogout}
			>
				<MdLogout size={22} />
			</div>
		</>
	);
};

