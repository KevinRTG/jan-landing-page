'use client';

import { Button, ButtonProps } from '@mui/material';
import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonPrimaryProps extends ButtonProps {
  children: ReactNode;
  href?: string;
}

export default function ButtonPrimary({ children, href, ...props }: ButtonPrimaryProps) {
  if (href) {
    return (
      <Link href={href} passHref>
        <Button {...props}>{children}</Button>
      </Link>
    );
  }

  return <Button {...props}>{children}</Button>;
}
