import { Box } from '@mui/material';
import ComicCard from 'dh-marvel/components/Card/ComicCard';
import BodySingle from 'dh-marvel/components/layouts/body/single/body-single';
import LayoutGeneral from 'dh-marvel/components/layouts/layout-general';
import { getCharacterByComic, getComic, getComics } from 'dh-marvel/services/marvel/marvel.service';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const response = await getComics();

    const paths = response?.data?.results?.map(({ id }: { id: number }) => ({
      params: {
        id: id?.toString()
      }
    }));

    return {
      paths: paths || [],
      fallback: 'blocking'
    };
  } catch (error) {
    console.error('Error retrieving comics for paths:', error);
    return {
      paths: [],
      fallback: 'blocking'
    };
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = parseInt(params?.id as string, 10);
    const comic = await getComic(id);
    const characters = await getCharacterByComic(id);

    return {
      props: {
        comic,
        characters
      },
      revalidate: 10,
    };
  } catch (error) {
    console.error('Error retrieving comic and characters:', error);
    return {
      notFound: true
    };
  }
};

function ComicDetails({ comic, characters }: { comic: any, characters: any }) {
  if (!comic) {
    return (
      <>
        <Head>
          <title>Error | DH MARVEL</title>
          <meta name="description" content="Error al cargar el cómic" />
        </Head>
        <LayoutGeneral>
          <Box sx={{ marginBottom: '1rem' }}>
            <BodySingle title='Error al cargar el cómic'>
              <p>Hubo un error al cargar el cómic. Por favor, inténtalo nuevamente más tarde.</p>
            </BodySingle>
          </Box>
        </LayoutGeneral>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{comic?.title} | DH MARVEL</title>
        <meta name="description" content={`${comic?.title}: página detalle de cómic`} />
      </Head>
      <LayoutGeneral>
        <Box sx={{ marginBottom: '1rem' }}>
          <BodySingle title='Detalle cómic'>
            <ComicCard
              title={comic?.title}
              description={comic?.description}
              image={`${comic?.thumbnail?.path}.${comic?.thumbnail?.extension}`}
              id={comic?.id}
              price={comic?.price}
              oldPrice={comic?.oldPrice}
              stock={comic?.stock}
              characters={characters}
            />
          </BodySingle>
        </Box>
      </LayoutGeneral>
    </>
  );
}

export default ComicDetails;