import axios from "axios";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { Menus } from "@/utils/helpers";

const UserProfile = () => {
  const [user, setUser] = useState("");
  useEffect(() => {
    const getUser = async () => {
      try {
        const data = await axios.get("http://localhost:4000/api/v1/user/me", {
          withCredentials: true,
        });

        setUser(data.data.user);
      } catch (error) {
        setUser({});
      }
    };
    getUser();
  }, []);

  return (
    <div className="text-white flex items-center justify-center gap-2">
      {user && (
        <div className="w-10 h-10 flex items-center justify-center rounded-xl overflow-hidden cursor-pointer bg-emerald-500 text-white">
          <div className="font-semibold capitalize">{user.email[0]}</div>
        </div>
      )}

      <motion.div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <motion.div
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-md flex items-center justify-center bg-secondary cursor-pointer"
            >
              <FaChevronDown />
            </motion.div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-secondary text-white">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {Menus &&
              Menus.map((menu) => (
                <DropdownMenuItem className="cursor-pointer" key={menu.id}>
                  <Link to={menu.uri}>{menu.name}</Link>
                </DropdownMenuItem>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </motion.div>
    </div>
  );
};

export default UserProfile;
