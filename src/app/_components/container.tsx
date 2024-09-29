type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return <div className="bg-pink-500 px-4">{children}</div>;
}
