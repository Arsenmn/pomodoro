import {
  GithubOutlined,
  InstagramOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import React, { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface SocialsModalProps {
  open: boolean;
  onClose: () => void;
}

interface SocialLink {
  name: string;
  logo: React.ReactElement;
  link: string;
}

const SocialsModal: React.FC<SocialsModalProps> = ({ open, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, onClose]);

  const socials: SocialLink[] = [
    {
      name: "Instagram",
      logo: <InstagramOutlined />,
      link: "https://www.instagram.com/arsent.08/",
    },
    {
      name: "WhatsApp",
      logo: <WhatsAppOutlined />,
      link: "https://wa.me/87713790640",
    },
    {
      name: "GitHub",
      logo: <GithubOutlined />,
      link: "https://github.com/Arsenmn",
    },
  ];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={modalRef}
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="absolute top-1 w-[180px] rounded-xl p-3 shadow-lg space-y-3 z-50 bg-white/10 border border-white/20"
        >
          {socials.map(({ name, logo, link }) => (
            <li key={name} className="list-none group rounded-md">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group relative flex items-center gap-3 rounded-md pl-4 sm:pl-5 py-2 transition-all border-transparent overflow-hidden text-white
                  hover:bg-white/15 hover:border-t hover:border-l hover:border-white/20
                  hover:bg-linear-to-br from-white/5 to-white/20
                "
              >
                {logo}
                <p className="">{name}</p>
              </a>
            </li>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SocialsModal;

