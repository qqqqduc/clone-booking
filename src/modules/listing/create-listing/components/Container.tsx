import "./Component.scss"
interface ContainerProps {
  children: React.ReactNode;
  isWideContainer?: boolean;
}

function Container({ children, isWideContainer = false }: ContainerProps) {
  
  return (
    <div
      className={`container py-8 px-4 mt-4 lg:ml-[5vw] create-listing-full-width
                        ${
                          isWideContainer
                            ? "max-w-[500px] lg:w-[734px]"
                            : "max-w-[500px] lg:w-[500px"
                        }`}
    >
      {children}
    </div>
  );
}

export default Container;
