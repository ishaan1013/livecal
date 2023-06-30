import Image from "next/image";

type Props = {
  src: string;
  name: string;
  color: "RED" | "ORANGE" | "YELLOW" | "GREEN" | "BLUE" | "PURPLE" | "PINK";
};

export default function Avatar(props: Props) {
  const { src, name, color } = props;

  const colorStyle = {
    RED: "bg-red-500 p-0.5 rounded-full",
    ORANGE: "bg-orange-500 p-0.5 rounded-full",
    YELLOW: "bg-yellow-500 p-0.5 rounded-full",
    GREEN: "bg-green-500 p-0.5 rounded-full",
    BLUE: "bg-blue-500 p-0.5 rounded-full",
    PURPLE: "bg-purple-500 p-0.5 rounded-full",
    PINK: "bg-pink-500 p-0.5 rounded-full",
  };

  return (
    <div className={colorStyle[color]}>
      {/* <div className="text-xs">{src}</div> */}
      <Image
        className="rounded-full aspect-square overflow-hidden"
        src={src}
        alt={name + " avatar"}
        width={36}
        height={36}
      />
    </div>
  );
}
