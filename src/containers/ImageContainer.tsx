import { ImageList, ImageListItem } from '@mui/material';
import Image from 'next/image';
import * as React from 'react';

const ImageContainer = () => {
  const nextJs =
    'https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white';
  const sass =
    'https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white';
  const storyBook =
    'https://img.shields.io/badge/storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white';
  const muiv5 =
    'https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white';
  const tsShield =
    'https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white';
  return (
    <>
      <ImageList cols={5}>
        <ImageListItem>
          <Image src={nextJs} alt='ts' layout='fill' />
        </ImageListItem>
        <ImageListItem>
          <Image src={tsShield} alt='ts' layout='fill' />
        </ImageListItem>
        <ImageListItem>
          <Image src={muiv5} alt='ts' layout='fill' />
        </ImageListItem>
        <ImageListItem>
          <Image src={sass} alt='ts' width={50} height={50} />
        </ImageListItem>
        <ImageListItem>
          <Image src={storyBook} alt='ts' layout='fill' />
        </ImageListItem>
      </ImageList>
    </>
  );
};

export default ImageContainer;
