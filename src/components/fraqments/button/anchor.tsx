interface Props {
  href: string;
  children?: React.ReactElement | React.ReactElement[] | string;
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
}

export default function AnchorButton({ href, children, variant, size }: Props) {
  const vari: string = variant;
  let style = `${
    vari == "secondary"
      ? "bg-transparent border border-secondary hover:bg-secondary"
      : "bg-primary hover:scale-[1.03]"
  } ${vari == "secondary" ? "text-secondary hover:text-white" : "text-white"}`;

  let styleSize;
  switch (size) {
    case "sm":
      styleSize = "px-3 py-2 text-md";
      break;
    case "md":
      styleSize = "px-6 py-2 text-lg";
      break;
    case "lg":
      styleSize = "px-8 py-3 text-xl";
      break;

    default:
      break;
  }
  return (
    <a href={href} className={styleSize + " rounded-md text-center " + style}>
      {children}
    </a>
  );
}
