import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Terms() {
  const [expanded, setExpanded] = React.useState<string[]>([]);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(
        isExpanded
          ? [...expanded, panel]
          : expanded.filter((item) => item !== panel),
      );
    };

  return (
    <Container
      id="terms"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Typography
        component="h2"
        variant="h4"
        sx={{
          color: 'text.primary',
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        Terms and conditions
      </Typography>
      <Box sx={{ width: '100%' }}>
        <Accordion
          expanded={expanded.includes('panel1')}
          onChange={handleChange('panel1')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography component="span" variant="subtitle2">
              Open this to read the terms and conditions
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="h6">1. Acceptance of Terms</Typography>
            <Typography variant='body1'>
              By using this web application, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions.
            </Typography>
            <Typography variant="h6">2. Use of the Application</Typography>
            <Typography variant='body1'>
              You agree to use the application only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the application.
            </Typography>
            <Typography variant="h6">3. Data Processing</Typography>
            <Typography variant='body1'>
              - The web application processes files and data as part of its functionality.
              <br />
              - No Data Storage: We do not store any information or files processed through the application. All data is processed in real-time and is not retained after the session ends.
            </Typography>
            <Typography variant="h6">4. User Responsibilities</Typography>
            <Typography variant='body1'>
              You are responsible for ensuring that any files or data you upload comply with applicable laws and regulations. You must not upload any content that is illegal, harmful, or infringes on the rights of others.
            </Typography>
            <Typography variant="h6">5. Limitation of Liability</Typography>
            <Typography variant='body1'>
              MIDIPart shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of the application or any errors or omissions in the content.
            </Typography>
            <Typography variant="h6">6. Changes to Terms</Typography>
            <Typography variant='body1'>
              We reserve the right to modify these terms and conditions at any time. Any changes will be effective immediately upon posting on this page. Your continued use of the application after any changes constitutes your acceptance of the new terms.
            </Typography>
            <Typography variant="h6">7. Governing Law</Typography>
            <Typography variant='body1'>
              These terms and conditions shall be governed by and construed in accordance with the laws of Spain.
            </Typography>
            <Typography variant="h6">8. Contact Information</Typography>
            <Typography variant='body1'>
              If you have any questions about these terms and conditions, please contact us at our public X account.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
}
