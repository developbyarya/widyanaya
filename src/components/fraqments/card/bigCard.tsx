export default function BigCard({
  children,
}: {
  children?: React.ReactElement | React.ReactElement | string;
}) {
  return (
    <div className="w-full lg:w-2/5 rounded-lg border boder-gray-300 p-6">{children}</div>
  );
}
