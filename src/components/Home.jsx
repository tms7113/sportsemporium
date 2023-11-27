import React from 'react';
import { Button,Card,CardActionArea,Container,Grid,Paper,Stack,TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import "./FeaturedBrands.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';

const Home = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <>
    <div style={{ height: '100vh', backgroundRepeat: 'no-repeat', backgroundSize: '100%', backgroundImage: "URL('https://images.unsplash.com/photo-1542652694-40abf526446e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", position: 'relative' }}>
      
      <div style={{ position: 'absolute', top: '20px', left: '20px', display: 'flex', alignItems: 'center' }}>
        
      <h1 style={{ color: '#B80000', fontSize: '71px',fontFamily:'viner hand itc' }}>ATHENS &nbsp;</h1>
        <h1 style={{ color: '#F0F0F0', fontSize: '35px',fontFamily:'segoe script' }}> sports emporium </h1>

      </div>

      <Stack direction="row-reverse" spacing={2} style={{ padding: '20px' }}>
      <Link to="/brand" state={{color:'white'}}> <Button variant="contained" style={{backgroundColor:'#484848'}}>
       BRANDS
        </Button>
        </Link>
        <TextField variant="outlined" label="Search"  style={{ backgroundColor: '#606060' ,height:"40px",color:"white"}} />

        <Link to="/login">
        <Button variant="contained" color="primary" style={{backgroundColor:'#484848'}} onClick={handleLoginClick}>
          Login
        </Button>
        </Link>
        
        <Link to="/about">
        <Button variant="contained" style={{backgroundColor:"#484848"}} >
            ABOUT US
        </Button>
        </Link>
      </Stack>
    </div>
        <div style={{color:"black",backgroundColor:"silver",height:"50px"}}>  <marquee><h3>CONTACT US: 1234567890 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; MAIL US:athens@gmail.com</h3> </marquee></div>
           <div className='su'>
            <Card>
            <Container>
              <Grid container spacing={10} padding={5}>
              
                <Grid item xs={4} elevation={24}>
                  <Link to="/Volleyball">
                  <Paper elevation={24}sx={{width:"300px",height:"300px",color:"black"}}>
              <Card>
                   <CardActionArea>
                   <img src='https://i.pinimg.com/474x/87/d8/e3/87d8e33077bebcbfd9912a1023136306.jpg'  style={{width:"100%",height:"300px"}}></img>
                  <Button  style={{backgroundColor:"black",color:"white",width:"100%"}}><center>INDIVIDUAL SPORTS</center></Button>
                  </CardActionArea>
                </Card>
                  </Paper>
                  </Link>
                </Grid>

                <Grid item xs={4}>
                  <Link to="/team">
                  <Paper sx={{width:"350px",height:"300px",color:"black"}}>
                    <Card>
                        <CardActionArea>
                  <img src='https://i.pinimg.com/474x/07/42/23/07422355dda3d3f260a4d4845d4a33a8.jpg' style={{width:"100%",height:"300px"}}></img>
                  <Button style={{backgroundColor:"black",color:"white",width:"100%"}}><center>TEAM SPORTS</center></Button>
                  </CardActionArea></Card>
                  </Paper>
                  </Link>
                </Grid>

                <Grid item xs={4}>
                  <Link to="/jersy">
                  <Paper sx={{width:"350px",height:"300px",color:"black"}}>
                    <Card>
                        <CardActionArea>
                  <img src='https://i.pinimg.com/474x/a3/d7/c7/a3d7c70355ed755e331547fee85ea5e7.jpg' style={{width:"100%",height:"300px"}}></img>
                    <Button style={{backgroundColor:"black",color:"white",width:"100%"}}><center>JERSY</center></Button> 
                    </CardActionArea>
                    </Card>
                  </Paper>
                  </Link>
                </Grid>

                <Grid item xs={4}>
                  <Link to="/fitness">
                  <Paper sx={{width:"350px",height:"300px",color:"black"}}>
                    <Card>
                        <CardActionArea>
                  <img src='https://i.pinimg.com/474x/ac/a6/bd/aca6bdc7141056383acbbfa2ee945500.jpg' style={{width:"100%",height:"300px"}}></img>
                  <Button style={{backgroundColor:"black",color:"white",width:"100%"}}><center>FITNESS</center></Button>
                  </CardActionArea></Card>
                  </Paper>
                  </Link>
                </Grid>

                <Grid item xs={4}>
                  <Link to="/trophy">
                  <Paper sx={{width:"350px",height:"300px",color:"black"}}>
                    <Card>
                        <CardActionArea>
                  <img src='https://i.pinimg.com/474x/50/88/3a/50883ae23ce50dff07c63269fcc4e7b9.jpg' style={{width:"100%",height:"300px"}}></img>
                  <Button style={{backgroundColor:"black",color:"white",width:"100%"}}><center>TROPHIES</center></Button>
                  </CardActionArea>
                  </Card>

                  </Paper>
                  </Link>
                </Grid>

                <Grid item xs={4}>
                  <Link to="/access">
                  <Paper sx={{width:"350px",height:"300px",color:"black"}}>
                    <Card>
                        <CardActionArea>
                  <img src='https://i.pinimg.com/474x/09/55/43/0955431d5909b6db960ab883457b4a79.jpg' style={{width:"100%",height:"300px"}}></img>
                  <Button style={{backgroundColor:"black",color:"white",width:"100%"}}><center>ACCESSORIES</center></Button>
                  </CardActionArea>
                  </Card>
                  </Paper>
                  </Link>
                </Grid>
               

              </Grid>
            </Container>
            </Card>
           </div>
           <br></br>
           <br></br>
           
           <div style={{color:'black'}}>
            <footer>
            <center>
              <h2>&copy;ATHENS SPORTS SHOP</h2><br></br>
              Get connected with us on social networks:
              <div>
                <a href='https://instagram.com/sports_emporium_official?igshid=MTNiYzNiMzkwZA=='>
                  <InstagramIcon sx={{fontSize:"50px",color:"black"}}></InstagramIcon>&nbsp;&nbsp;
                </a>
                  <a href='http://www.sportsemporium.in/'>
                    <GoogleIcon sx={{fontSize:"50px",color:"black"}}></GoogleIcon>
                  </a>
                <a href='https://www.facebook.com/'>
                  <FacebookIcon sx={{fontSize:"50px",color:"black"}}></FacebookIcon>&nbsp;&nbsp;
                  </a>
                  <a href='https://shop.teamsg.in/'>
                    <TwitterIcon sx={{fontSize:"50px",color:"black"}}></TwitterIcon>&nbsp;&nbsp;
                  </a>
              </div>
            </center>
            </footer>
           </div>
        </>
  );
};

export default Home;