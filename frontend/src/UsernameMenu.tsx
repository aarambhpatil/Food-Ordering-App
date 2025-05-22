import { CircleUserRound } from "lucide-react";

const UsernameMenu = () => {
    return(
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-orange-500 gap-2">
                <CircleUserRound />
            </DropdownMenuTrigger>
        </DropdownMenu>
    )
}

export default UsernameMenu;