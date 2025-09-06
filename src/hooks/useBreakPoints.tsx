import { useMediaQuery } from "react-responsive";

export function useBreakpoint() {
  const isSm = useMediaQuery({ maxWidth: 639 });
  const isMd = useMediaQuery({ minWidth: 640, maxWidth: 767 });
  const isLg = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isXl = useMediaQuery({ minWidth: 1024, maxWidth: 1279 });
  const is2xl = useMediaQuery({ minWidth: 1280 });

  return { isSm, isMd, isLg, isXl, is2xl };
}
