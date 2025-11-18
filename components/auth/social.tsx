"use client";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";

export const Social = () => {
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button className="w-1/2"
        size='lg'
        variant='outline'
        onClick={() => {}}>
        <FcGoogle />
      </Button>
      <Button className="w-1/2"
        size='lg'
        variant='outline'
        onClick={() => {}}>
        <FaGithub />
      </Button>
    </div>
  );
};
