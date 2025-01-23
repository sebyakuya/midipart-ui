import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function About() {

  return (
    <Container
      id="about"
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
        About Me
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: 'text.primary',
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        Hi there! I'm Alvaro, and I'm trying to learn to play the piano on my own at 32 years old from scratch.
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: 'text.primary',
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        As I embarked on my journey to learn the piano, I quickly realized that not all songs were equally easy to play. I wanted to find a way to identify which pieces would be more manageable for a beginner like me.
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: 'text.primary',
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        I started by thinking about the factors that might influence a song's difficulty. First, I considered the number of notes in a piece. Simpler songs often had fewer notes, making them easier to learn. Next, I thought about the complexity of the chords. Songs with basic triads were generally more accessible than those with intricate chord progressions. Finally, I took into account the tempo; slower songs were usually easier to grasp than fast-paced ones.
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: 'text.primary',
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        To put my plan into action, I created a list of songs I wanted to learn. I categorized each song based on my criteria, assigning a difficulty rating from one to five. This system helped me prioritize which songs to tackle first.
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: 'text.primary',
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        I also sought advice from some of my friends that also play the piano, asking them to share their experiences with different pieces. Their insights were invaluable, and I added their recommendations to my list.
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: 'text.primary',
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        With my categorized list in hand, I felt more confident in my practice sessions. I focused on the easier songs, gradually building my skills and gaining the confidence to tackle more challenging pieces. This practical approach not only made my learning process smoother but also kept my motivation high as I celebrated each small victory along the way.
      </Typography>
    </Container>
  );
}
