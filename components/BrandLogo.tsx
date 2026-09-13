import Image from "next/image";

type BrandLogoProps = {
  variant?: "header" | "footer";
};

const logoSizes = {
  header: {
    frame: "h-[42px] w-[152px]",
    image: "left-[-76px] top-[-17px] h-[76px] w-[304px]",
  },
  footer: {
    frame: "h-[50px] w-[181px]",
    image: "left-[-90px] top-[-20px] h-[90px] w-[361px]",
  },
} as const;

export default function BrandLogo({ variant = "header" }: BrandLogoProps) {
  const sizes = logoSizes[variant];

  return (
    <span
      aria-hidden="true"
      className={`relative block shrink-0 overflow-hidden ${sizes.frame}`}
    >
      <Image
        src="/kirevo-logo-final.png"
        alt=""
        width={2508}
        height={627}
        className={`absolute max-w-none select-none ${sizes.image}`}
        sizes={variant === "header" ? "304px" : "361px"}
      />
    </span>
  );
}
