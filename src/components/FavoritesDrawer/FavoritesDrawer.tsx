import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import Drawer, { DrawerProps } from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import { removeFavorite } from '@/redux/reducres/favorites/reducer';
import { RootState } from '@/redux/store';
import CloseIcons from '@/components/Icons/CloseIcons';
import WaitForItemsLoading from '@/components/WaitForItemsLoading/WaitForItemsLoading';

export type Props = DrawerProps;

const FavoritesDrawer = (props: Props) => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.favorites.favorites);

  return (
    <Drawer
      anchor="right"
      PaperProps={{
        sx: {
          maxWidth: '100%',
          maxHeight: '100%',
          width: {
            sm: '360px',
            xs: '100%',
          },
        },
      }}
      {...props}
    >
      <WaitForItemsLoading
        empty={items?.length === 0 || !items}
        EmptyRender={
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
            }}
          >
            There are no items in your favorites list.
          </Box>
        }
      >
        <List
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            py: '40px',
          }}
        >
          {items?.map((item) => (
            <React.Fragment key={item.imdbID}>
              <ListItem
                sx={{
                  pr: '60px',
                  position: 'relative',
                }}
              >
                {item.Title}
                <IconButton
                  sx={{
                    position: 'absolute',
                    top: 0,
                    right: '20px',
                  }}
                  onClick={() => dispatch(removeFavorite({ favorite: item }))}
                >
                  <CloseIcons />
                </IconButton>
              </ListItem>
              <Divider component="li" variant="inset" sx={{ ml: 0 }} />
            </React.Fragment>
          ))}
        </List>
      </WaitForItemsLoading>
    </Drawer>
  );
};

export default FavoritesDrawer;
