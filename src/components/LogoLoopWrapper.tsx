"use client";

import React from 'react';
import LogoLoopComponent from './LogoLoop';

export interface LogoItem {
  node?: React.ReactNode;
  src?: string;
  srcSet?: string;
  sizes?: string;
  width?: number;
  height?: number;
  alt?: string;
  title?: string;
  href?: string;
  ariaLabel?: string;
}

export interface LogoLoopProps {
  logos: LogoItem[];
  speed?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
  width?: string | number;
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  hoverSpeed?: number;
  fadeOut?: boolean;
  fadeOutColor?: string;
  scaleOnHover?: boolean;
  renderItem?: (item: LogoItem, key: string) => React.ReactNode;
  ariaLabel?: string;
  className?: string;
  style?: React.CSSProperties;
}

const LogoLoop: React.FC<LogoLoopProps> = React.memo((props: LogoLoopProps) => {
  // Cast the component to bypass TypeScript checking for JSX component
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Component = LogoLoopComponent as React.ComponentType<any>;
  return <Component {...props} />;
});

LogoLoop.displayName = 'LogoLoop';

export default LogoLoop;

