import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import DragFileComponent from './DragFileComponent';
import { Button } from '@mui/material';
import { toast } from 'react-toastify';
import FileAnalysisResult from './FileAnalysisResult';
import Grid from '@mui/material/Grid';


export default function MainScreen() {
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState([]);

  const handleSubmit = () => {
    console.log(files);
    if (files.length > 0) {
      const formData = new FormData();
      for (let index = 0; index < files.length; index++) {
        const element = files[index];
        formData.append('file'+index, element);
      }
        

      fetch('/api/analyzem', {
        method: 'POST',
        body: formData,
      })
        .then(res => res.json())
        .then(data => {
          setMessage(data);
        });
    } else {
      console.log("No files selected");
      toast("No files selected")
    }
  }

  const cleanResult = () => {
    setMessage("");
    setFiles([]);
  }

  return (
    <Box
      id="analyzer"
      sx={(theme) => ({
        width: '100%',
        backgroundRepeat: 'no-repeat',

        backgroundImage:
          'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)',
        ...theme.applyStyles('dark', {
          backgroundImage:
            'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
        }),
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 14 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: 'center', width: { xs: '100%', sm: '70%' } }}
        >
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              fontSize: 'clamp(3rem, 10vw, 3.5rem)',
            }}
          >
            MIDI
            <Typography
              component="span"
              variant="h1"
              sx={(theme) => ({
                fontSize: 'inherit',
                color: 'primary.main',
                ...theme.applyStyles('dark', {
                  color: 'primary.light',
                }),
              })}
            >
              Part
            </Typography>
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              width: { sm: '100%', md: '80%' },
            }}
          >
            The fastest MIDI analyzer
          </Typography>
          {message === "" &&
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
              <Box>
                <DragFileComponent onFilesSelected={setFiles} width={800} height={"auto"} />
              </Box>
              {files.length !== 0 &&
                <>
                  <Button style={{ margin: "20px" }} variant="contained" onClick={handleSubmit}>Analyze</Button>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ textAlign: 'center' }}
                  >
                    By clicking &quot;Analyze&quot; you agree to our&nbsp;
                    <Link href="#terms" color="primary">
                      Terms & Conditions
                    </Link>
                    .
                  </Typography>
                </>
              }
            </Box>
          }
          {message !== "" && Array.isArray(message) && (
            <Grid container spacing={2} justifyContent="center">
              {message.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <FileAnalysisResult data={item} />
                </Grid>
              ))}
            </Grid>
          )}
          {message !== "" &&
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
              <Button variant="contained" onClick={cleanResult}>Analyze a new file</Button>
            </Box>
          }

        </Stack>
      </Container>
    </Box>
  );
}
