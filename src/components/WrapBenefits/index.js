import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Card,
  CardContent,
  CardMedia,
  List,
  Typography
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const WrapBenefits = () => {
  const benefits = [
    {
      title: 'Baixo teor de gordura',
      description: 'O frango grelhado é uma opção com baixo teor de gordura em comparação com outras carnes.',
    },
    {
      title: 'Rico em proteínas',
      description: 'O frango é uma excelente fonte de proteína magra, essencial para a construção muscular e manutenção do tecido.',
    },
    {
      title: 'Fácil digestão',
      description: 'O frango grelhado é leve e de fácil digestão, tornando-o uma opção ideal para pessoas com estômagos sensíveis.',
    },
    {
      title: 'Fonte de vitaminas e minerais',
      description: 'O frango contém uma variedade de vitaminas e minerais essenciais, como vitamina B, vitamina D e zinco.',
    },
    {
      title: 'Versatilidade',
      description: 'Wraps de frango grelhado oferecem uma maneira versátil de desfrutar do sabor do frango com diferentes ingredientes e molhos.',
    },
    {
      title: 'Opção saudável',
      description: 'Ao optar por frango grelhado, você reduz o consumo de gorduras saturadas encontradas em carnes fritas ou processadas.',
    }
  ];

  return (
    <Box sx={{ marginTop: 40, marginBottom: 10 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Card>
          <CardMedia
            component="img"
            height="400"
            image="https://res.cloudinary.com/darkpuzzle/image/upload/v1686111976/wrap-de-frango-grelhado_nbsl4b.png"
            alt="Healthy Food 2"
          />
          <CardContent>
            <Typography variant="h6" component="div">
              Principais benefícios de comer wrap de frango grelhado:
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Um wrap recheado com frango grelhado suculento e vegetais frescos. Rico em proteínas e sabor!
            </Typography>
          </CardContent>
        </Card>
        <List>
          {benefits.map((benefit, index) => (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{benefit?.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {benefit?.description}
                </Typography>
              </AccordionDetails>
           </Accordion>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default WrapBenefits;