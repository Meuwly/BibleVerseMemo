import { useWindowDimensions } from 'react-native';

const TABLET_BREAKPOINT = 700;
const WIDE_BREAKPOINT = 1000;
const DEFAULT_CONTENT_MAX_WIDTH = 640;

export interface ResponsiveLayout {
  width: number;
  height: number;
  isTablet: boolean;
  isWide: boolean;
  isLandscape: boolean;
  contentMaxWidth: number;
  horizontalPadding: number;
}

export function useResponsiveLayout(contentMaxWidth: number = DEFAULT_CONTENT_MAX_WIDTH): ResponsiveLayout {
  const { width, height } = useWindowDimensions();
  const isTablet = width >= TABLET_BREAKPOINT;
  const isWide = width >= WIDE_BREAKPOINT;
  const isLandscape = width > height;

  return {
    width,
    height,
    isTablet,
    isWide,
    isLandscape,
    contentMaxWidth,
    horizontalPadding: isTablet ? Math.max(24, (width - contentMaxWidth) / 2) : 20,
  };
}
