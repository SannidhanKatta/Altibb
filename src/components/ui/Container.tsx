import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  noPadding?: boolean;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  as: Component = 'div',
  noPadding = false
}) => {
  return (
    <Component
      className={`mx-auto w-full ${noPadding
          ? ''
          : 'px-4 sm:px-6 lg:px-8 2xl:px-12'
        } max-w-[1440px] ${className}`}
    >
      {children}
    </Component>
  );
};

export default Container;