import Image from "next/image";

type Props = {
  src: string;
  name: string;
  color: "red" | "orange" | "yellow" | "green" | "blue" | "purple" | "pink";
};

export default function Avatar(props: Props) {
  const { src, name, color } = props;

  const colorStyle = {
    red: "bg-red-500 p-0.5 rounded-full",
    orange: "bg-orange-500 p-0.5 rounded-full",
    yellow: "bg-yellow-500 p-0.5 rounded-full",
    green: "bg-green-500 p-0.5 rounded-full",
    blue: "bg-blue-500 p-0.5 rounded-full",
    purple: "bg-purple-500 p-0.5 rounded-full",
    pink: "bg-pink-500 p-0.5 rounded-full",
  };

  return (
    <div className={colorStyle[color]}>
      {/* <div className="text-xs">{src}</div> */}
      <Image
        className="rounded-full overflow-hidden"
        src={src}
        alt={name + " avatar"}
        width={36}
        height={36}
      />
    </div>
  );
}
