import React from "react";
import '../assets/HomePresentation.css';
import Box from "@mui/material/Box";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import {Container} from "@mui/material";
import {observer} from "mobx-react";

const itemData = [
  {
    img: require('../assets/imgApp.png').default,
    title: 'imgApp',
    author: '@MuSa',
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
];

@observer
export class HomePresentation extends React.Component {
  render() {
    return (
      <Container>
        <Box>
          <div className="HomePresentation">
            <ImageList
              sx={{
                width: 1100,
                height: 460,
                transform: 'translateZ(0)',
              }}
              rowHeight={235}
              gap={1}
            >
              {itemData.map((item) => {
                const cols = item.featured ? 2 : 1;
                const rows = item.featured ? 2 : 1;

                return (
                  <ImageListItem key={item.img} cols={cols} rows={rows}>
                    <img
                      {...this._setSrc(item.img, 300, 250, rows, cols)}
                      alt={item.title}
                      loading="lazy"
                    />
                    <ImageListItemBar
                      sx={{
                        background:
                          'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                          'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                      }}
                      title={item.title}
                      position="top"
                      actionPosition="left"
                    />
                  </ImageListItem>
                );
              })}
            </ImageList>
          </div>
        </Box>
      </Container>
    )
  }

  private _setSrc(image: string, width: number, height: number, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format&dpr=2 2x`,
    };
  }
}


