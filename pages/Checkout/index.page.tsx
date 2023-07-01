import { Box, Grid, Stack } from '@mui/material'
import CheckoutCard from 'dh-marvel/components/Card/CheckoutCard'
import BodySingle from 'dh-marvel/components/layouts/body/single/body-single'
import LayoutCheckout from 'dh-marvel/components/layouts/layout-checkout'
import { getComic } from 'dh-marvel/services/marvel/marvel.service'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

function Checkout() {
  const router = useRouter();
  const { comic } = router.query;
  const [comicData, setComicData] = useState<any>();

  useEffect(() => {
    if (comic) {
      const id = parseInt(comic as string);
      getComic(id).then((data: any) => {
        setComicData(data);
      });
    } else {
      router.push('/');
    }
  }, [comic, router]);

  return (
    <>
      <Head>
        <title>Checkout | DH MARVEL</title>
      </Head>
      <LayoutCheckout>
        <BodySingle title='Checkout'>
          <Box sx={{ padding: { xs: "20px", sm: "20px" } }} display={'flex'} justifyContent={'center'}>
            <Stack
              direction={{ sm: "column", md: "row-reverse" }}
              spacing={{ xs: 5, sm: 8, md: 8, xl: 20 }}
              alignItems={'center'}
            >
              {comicData && (
                <CheckoutCard
                  title={comicData.title}
                  image={`${comicData.thumbnail.path}.${comicData.thumbnail.extension}`}
                  price={comicData.price}
                  id={comicData.id}
                />
              )}
            </Stack>
          </Box>
        </BodySingle>
      </LayoutCheckout>
    </>
  )
}

export default Checkout;
