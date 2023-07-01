import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export interface PropsCheckoutCard {
    title: string,
    image: string,
    id: number,
    price: number,
}

export default function CardCheckout({ title, image, price, id }: PropsCheckoutCard) {
    return (
        <Card sx={{ width: 350 }}>
            <CardMedia
                sx={{ height: 300 }}
                image={image}
                title={`${title} imagen`}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '1rem' }}>
                    <span>${price}</span>
                </Typography>
            </CardContent>
        </Card>
    );
}
