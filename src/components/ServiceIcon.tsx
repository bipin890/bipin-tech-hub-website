import React from "react";
import {
  ShieldCheck,
  FileText,
  ClipboardEdit,
  Car,
  GraduationCap,
  Globe,
  Code2,
  LucideProps,
} from "lucide-react";

interface ServiceIconProps extends LucideProps {
  name: string;
}

export function ServiceIcon({ name, ...props }: ServiceIconProps) {
  switch (name) {
    case "ShieldCheck":
      return <ShieldCheck {...props} />;
    case "FileText":
      return <FileText {...props} />;
    case "ClipboardEdit":
      return <ClipboardEdit {...props} />;
    case "Car":
      return <Car {...props} />;
    case "GraduationCap":
      return <GraduationCap {...props} />;
    case "Globe":
      return <Globe {...props} />;
    case "Code2":
      return <Code2 {...props} />;
    default:
      return <Globe {...props} />;
  }
}
