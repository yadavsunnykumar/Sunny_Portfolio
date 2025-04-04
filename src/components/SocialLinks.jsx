import React from "react";

// components/SocialLinks.js
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Button } from "@/components/ui/button";

function SocialLinks() {
  return (
    <div className="flex justify-center space-x-4 mb-10">
      <Button asChild>
        <a href="https://github.com/yadavsunnykumar" target="_blank"><FaGithub className="mr-2" /> GitHub</a>
      </Button>
      <Button asChild>
        <a href="https://linkedin.com/in/your-linkedin" target="_blank"><FaLinkedin className="mr-2" /> LinkedIn</a>
      </Button>
      <Button asChild>
        <a href="sunny9811273802@gmail.com"><FaEnvelope className="mr-2" /> Email</a>
      </Button>
    </div>
  );
}


export default SocialLinks;
