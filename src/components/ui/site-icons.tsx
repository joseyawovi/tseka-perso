import { BookOpen, Image, Radio, LandPlot, CircleUserRound } from 'lucide-react';

export function StrategyIcon({ className }: { className?: string }) {
  return <BookOpen className={className} />;
}

export function ImageManagerIcon({ className }: { className?: string }) {
  return <Image className={className} />;
}

export function MediaIcon({ className }: { className?: string }) {
  return <Radio className={className} />;
}

export function PoliticsIcon({ className }: { className?: string }) {
  return <LandPlot className={className} />;
}

export function GenericPersonIcon({ className }: { className?: string }) {
  return <CircleUserRound className={className} />;
}

export function getServiceIcon(iconName: string, className?: string) {
  switch (iconName) {
    case 'strategy':
      return <StrategyIcon className={className} />;
    case 'image':
      return <ImageManagerIcon className={className} />;
    case 'media':
      return <MediaIcon className={className} />;
    case 'politics':
      return <PoliticsIcon className={className} />;
    default:
      return <GenericPersonIcon className={className} />;
  }
}