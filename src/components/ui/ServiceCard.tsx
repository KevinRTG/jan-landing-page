'use client';

import { Box, Card, CardContent, Typography } from '@mui/material';

export default function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card
      elevation={2}
      sx={{
        p: { xs: 2, sm: 3 },
        textAlign: 'center',
        borderRadius: 3,
        height: '100%',
        minHeight: 50,
        bgcolor: 'background.paper',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        border: '1px solid', // ⬅️ pastikan border terlihat
        borderColor: 'grey.300',
      }}
    >
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 1 }}>
          {icon}
        </Box>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
