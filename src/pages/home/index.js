// import Image from 'next/image';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActionArea
} from '@mui/material';
import './homePage.css';

const HomePage = () => {
  const onClickAnyWhere = () => {
    window.alert('Para de clicar nas coisas, tem nada aqui não');
  };

  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: '#e3a22e' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dom Fit Delivery
          </Typography>
          <Button
            color="inherit"
            onClick={() => onClickAnyWhere()}
            sx={{ backgroundColor: '#b07d23' }}
          >
            Pedido
          </Button>
          <Button
            color="inherit"
            onClick={() => onClickAnyWhere()}
            sx={{ backgroundColor: '#b07d23', marginLeft: 1 }}
          >
            Sobre
          </Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" align="center" sx={{ mb: 4, color: '#282c10' }}>
          Bem-vindo à Dom Fit Delivery
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <CardActionArea onClick={() => onClickAnyWhere()}>
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
            <CardActionArea onClick={() => onClickAnyWhere()}>
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
            <CardActionArea onClick={() => onClickAnyWhere()}>
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
    </div>
  );
};

export default HomePage;
