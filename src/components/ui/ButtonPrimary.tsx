// src/components/ui/ButtonPrimary.tsx
import { Button } from '@mui/material';

export default function ButtonPrimary({ children, href, ...props }) {
  return (
    <Button
      variant="contained"
      color="primary"
      href={href}
      sx={{
        borderRadius: 2,
        textTransform: 'none',
        px: 3,
        py: 1.5,
        boxShadow: 3,
      }}
      {...props}
    >
      {children}
    </Button>
  );
}
