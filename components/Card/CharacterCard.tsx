import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export interface PropsCharacterCard {
    name: string,
    description: string,
    image: string,
    id: number,
}

export default function CharacterCard({ name, description, image, id }: PropsCharacterCard) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 300 }}
                image={image}
                title={`${name} imagen`}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    {description === ''
                        ? "Sin descripción disponible"
                        : description
                    }
                </Typography>
            </CardContent>
        </Card>

    );
}
