import {
  MapPin,
  User,
  Briefcase,
  FolderKanban,
  Code2,
  Download,
  Linkedin,
  BadgeCheck,
} from "lucide-react";

const NAV_LINKS = [
  {
    linkTitle: "About",
    icon: User,
    to: "about",
  },
  {
    linkTitle: "Certifications",
    icon: BadgeCheck,
    to: "certifications",
  },
  {
    linkTitle: "Projects",
    icon: FolderKanban,
    to: "projects",
  },
  {
    linkTitle: "Skills",
    icon: Code2,
    to: "skills",
  },
];
export default NAV_LINKS;
