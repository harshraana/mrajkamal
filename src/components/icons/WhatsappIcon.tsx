import WhatsAppLogo from "@/assets/svg/whatsapp-logo.svg";
import type { CSSProperties } from "react";

type WhatsappIconProps = {
  /** Square size of the icon in pixels. Defaults to 24. */
  size?: number;
  className?: string;
  style?: CSSProperties;
};

/**
 * WhatsApp logo rendered at a configurable `size`.
 *
 * The size is applied as an inline width/height style so the icon resizes even
 * inside the shadcn <Button>, which otherwise forces any bare <svg> to 16px via
 * `[&_svg:not([class*='size-'])]:size-4` (a CSS rule that beats the width/height
 * attributes). The SVG keeps its own brand colors (green/white).
 */
const WhatsappIcon = ({ size = 24, className, style }: WhatsappIconProps) => {
  return (
    <WhatsAppLogo
      width={size}
      height={size}
      style={{ width: size, height: size, ...style }}
      className={className}
    />
  );
};

export default WhatsappIcon;
