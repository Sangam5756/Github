import toast from "react-hot-toast"
import { FaHeart } from "react-icons/fa"
import { AuthContext, useAuthContext } from "../context/authContext"
import { backendurl } from "../utils/constant";
 
export const LikeProfile = ({userProfile}) =>{
        const {authUser} = useAuthContext();
        const isOwnProfile  = authUser?.username === userProfile.login

    const handlelikedProfile =  async() =>{
        
        try {

            const res = await fetch(backendurl+`/api/users/like/${userProfile.login}`,{
                method:"POST",
                credentials:"include",

            });
            const data = await res.json();

            if(data.error) throw new Error(data.error);
            toast.success(data.message);

        } catch (error) {
            toast.error(error.message);
        }
    }
    if(!authUser || isOwnProfile) return null


    return(
        <button className="p-2 text-xs w-full font-medium rounded-md  bg-glass border border-blue-500
        flex items-center gap-2"
        onClick={handlelikedProfile}
        >
            <FaHeart size={16}/> Like Profile
        </button>
    )
}