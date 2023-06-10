import { useState } from 'react';
import {
  AppBar,
  Avatar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Menu,
  MenuItem,
} from '@mui/material';
import ReorderIcon from '@mui/icons-material/Reorder';
import useMediaQuery from '@mui/material/useMediaQuery';
import WrapBenefits from '../../components/WrapBenefits';
import '../../../src/index.css';

const HomePage = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const open = Boolean(openMenu);
  const handleClick = (event) => {
    setOpenMenu(event.currentTarget);
  };
  const handleClose = () => {
    setOpenMenu(null);
  };

  return (
    <div className="backgroundImage">
      <AppBar position="static" style={{ backgroundColor: '#e3a22e' }}>
        <Toolbar>
        <img alt="Dom Fit Logo" width="50px" height="50px" src="https://res.cloudinary.com/darkpuzzle/image/upload/v1686424796/dom-fit-logo-modifed_la7gtp.png" />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: 1 }}>
          Dom Fit Delivery
        </Typography>
          {isMobile ? (
            <>
              <Button
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                color="inherit"
                onClick={handleClick}
              >
                <ReorderIcon />
              </Button>
              <Menu open={open} anchorEl={openMenu} onClose={handleClose} >
                <MenuItem>
                  <Avatar sx={{ width: 32, height: 32, mr: 1 }} />
                  <Typography>
                    Meu Perfil
                  </Typography>
                </MenuItem>
                <MenuItem>
                  Pedido
                </MenuItem>
                <MenuItem>
                  Sobre nós
                </MenuItem>
              </Menu>
            </>
          ) : (
            <>
              <Button
                color="inherit"
                sx={{ backgroundColor: '#b07d23' }}
              >
                Pedido
              </Button>
              <Button
                color="inherit"
                sx={{ backgroundColor: '#b07d23', marginLeft: 1 }}
              >
                Sobre
              </Button>
              <Button
                color="inherit"
                sx={{ backgroundColor: '#b07d23', marginLeft: 1 }}
              >
                <Avatar sx={{ width: 32, height: 32, mr: 1 }} />
                <Typography>
                  Meu Perfil
                </Typography>
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" align="center" sx={{ mb: 4, color: '#282c10' }}>
          Bem-vindo à Dom Fit Delivery
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <CardActionArea>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image="https://res.cloudinary.com/darkpuzzle/image/upload/v1686111790/salada-verao_nbxehf.avif"
                  alt="Healthy Food 2"
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    Salada de Verão
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Uma salada refrescante com ingredientes frescos e saudáveis. Perfeita para os dias quentes!
                  </Typography>
                </CardContent>
              </Card>
            </CardActionArea>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CardActionArea>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image="https://res.cloudinary.com/darkpuzzle/image/upload/v1686111976/wrap-de-frango-grelhado_nbsl4b.png"
                  alt="Healthy Food 2"
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    Wrap de Frango Grelhado
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Um wrap recheado com frango grelhado suculento e vegetais frescos. Rico em proteínas e sabor!
                  </Typography>
                </CardContent>
              </Card>
            </CardActionArea>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CardActionArea>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image="https://res.cloudinary.com/darkpuzzle/image/upload/v1686112054/smoothie-de-frutas-vermelhas_uvjfrb.jpg"
                  alt="Healthy Food 3"
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    Smoothie Energético
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Um smoothie nutritivo e energizante, feito com frutas frescas e ingredientes saudáveis. Perfeito para um lanche rápido!
                  </Typography>
                </CardContent>
              </Card>
            </CardActionArea>
          </Grid>
        </Grid>
      </Container>

      <WrapBenefits />
    </div>
  );
};

export default HomePage;
