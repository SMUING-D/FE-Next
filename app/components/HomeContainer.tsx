'use client';

type HomeContainerProps = {
  children: React.ReactNode;
};

const HomeContainer: React.FC<HomeContainerProps> = ({ children }) => {
  return <div className="pt-48 flex justify-center items-center h-screen">{children}</div>;
};

export default HomeContainer;
