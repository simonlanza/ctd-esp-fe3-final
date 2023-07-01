import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

export interface HomeProps {
  title: string;
  image: string;
  id: number;
}

export default function HomeCard({ title, image, id }: HomeProps) {
  return (
    <Card sx={{ minHeight: '490px' }}>
      <CardMedia component="img" title={`${title} imagen`} height="300" image={image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" disabled>
          Comprar
        </Button>
        <Link href={`/comics/${id}`} passHref>
          <Button size="small" component="a">
            Ver detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}