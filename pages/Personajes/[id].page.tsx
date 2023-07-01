import { Box } from '@mui/material';
import CharacterCard from 'dh-marvel/components/Card/CharacterCard';
import BodySingle from 'dh-marvel/components/layouts/body/single/body-single';
import LayoutGeneral from 'dh-marvel/components/layouts/layout-general';
import { getCharacter, getCharacters } from 'dh-marvel/services/marvel/marvel.service';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';

export const getStaticPaths: GetStaticPaths = async () => {
  const data: any = await getCharacters();

  const paths = data.map((character: any) => {
    return { params: { id: character.id.toString() } };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = parseInt(params?.id as string);
  const character = await getCharacter(id);

  return {
    props: {
      character
    },
    revalidate: 10,
  };
};

function CharacterDetails({ character }: { character: any }) {
  return (
    <>
      <Head>
        <title>{character?.name} | DH MARVEL</title>
        <meta name="description" content={`${character?.name}: Detalle personaje de cómic`} />
      </Head>
      <LayoutGeneral>
        <Box sx={{ margin: '1rem', width: '400' }} >
          <BodySingle title='Detalle personaje'>
            <CharacterCard
              name={character?.name}
              description={character?.description}
              image={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}
              id={character?.id}
            />
          </BodySingle>
        </Box >
      </LayoutGeneral>
    </>
  )
}

export default CharacterDetails;
