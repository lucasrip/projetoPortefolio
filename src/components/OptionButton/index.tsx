import { Button, Container } from './styles';

interface IOptionButton
{
  option:{
   name: string;
   icon: string;
   link: string;
   description: string;
   target?: string | undefined;
  }
}

export default function OptionButton({ option }:IOptionButton)
{

  return (
    <Container>
      <Button to={option.link} target={option?.target} title={option.description}>
        <img src={option.icon} alt={option.description} loading="lazy" title={option.description} />
        {option.name}
      </Button>
      
    </Container>
  );
}