type ContainerProps = {
    children: React.ReactNode;
  };
  
  export default function Container({ children }: ContainerProps) {
    return <div className="px-4 bg-pink-500">{children}</div>;
  }
  