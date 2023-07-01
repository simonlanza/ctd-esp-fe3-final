import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardHome from 'dh-marvel/components/Card/HomeCard';

export default function ResponsiveGrid({ data }: any) {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {data.map((item: any, index: React.Key | null | undefined) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <CardHome
              title={item.title}
              image={`${item?.thumbnail?.path}.${item?.thumbnail?.extension}`}
              id={item?.id}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
