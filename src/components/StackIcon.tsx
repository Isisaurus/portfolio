import { StackType } from '@/types';
import { ReactElement } from 'react';
import { RiNextjsLine, RiReactjsLine, RiTailwindCssLine } from 'react-icons/ri';
import { TbBrandTypescript } from "react-icons/tb";
import {
  SiMui,
  SiSentry,
  SiSanity,
  SiContentful,
  SiSwr,
} from 'react-icons/si';

interface StackIconProps {
  name: StackType;
  className: string;
}

export default function StackIcon({ name, className }: StackIconProps) {
  const icons: Record<StackType, ReactElement> = {
    next: <RiNextjsLine className={className} />,
    react: <RiReactjsLine className={className} />,
    tailwind: <RiTailwindCssLine className={className} />,
    materialui: <SiMui className={className} />,
    sanity: <SiSanity className={className} />,
    sentry: <SiSentry className={className} />,
    contentful: <SiContentful className={className} />,
    swr: <SiSwr className={className} />,
    typescript: <TbBrandTypescript className={className} />,
  };

  return icons[name];
}
