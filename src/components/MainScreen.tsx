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
import LogoIcon from './LogoIcon';

export default function MainScreen() {
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState<File[]>([]);

  const handleSubmit = () => {
    if (files.length > 0) {
      const formData = new FormData();
      for (let index = 0; index < files.length; index++) {
        const element = files[index];
        if (element.size <= 15 * 1024 * 1024) {
          formData.append('file' + index, element);
        } else {
          toast(`File ${element.name} is larger than 15MB and will be ignored.`);
        }
      }
      
      fetch('https://l39q1vwefj.execute-api.eu-south-2.amazonaws.com/midirating/api/analyze', {
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
          <LogoIcon />
          <Typography
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              width: { sm: '100%', md: '80%' },
            }}
          >
            The top-rated and fastest tool for accurately determining the difficulty of piano music.
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
