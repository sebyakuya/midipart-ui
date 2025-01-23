import React from 'react';
import { Box, Typography, Card, CardContent, LinearProgress } from '@mui/material';
import { piano_notes } from './notes';

interface FileAnalysisResultProps {
  data: {
    error: string;
    abspath: string;
    channels: number;
    diff_note: number;
    difficulty: number;
    duration: number;
    file: string;
    hash: string;
    max_note: number;
    min_note: number;
    notes: number;
    sustain: number;
    synthesia: string;
    velocity: number;
  };
}

const FileAnalysisResult: React.FC<FileAnalysisResultProps> = ({ data }) => {
  if (data.error) {
    return null; 
  }

  return (
    <Card variant="outlined" sx={{ margin: 2 }}>
      <CardContent>
        <Typography variant="h5" color="text.primary">
          {data.file}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Channels: {data.channels}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Notes: {data.notes}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Duration: {data.duration.toFixed(2)} seconds
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Min Note: {piano_notes[data.min_note as keyof typeof piano_notes]}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Max Note: {piano_notes[data.max_note as keyof typeof piano_notes]}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Sustain: {data.sustain}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Velocity: {data.velocity}
        </Typography>
        
        <Box sx={{ marginTop: 2 }}>
          <Typography variant="h6" component="div">
            Difficulty: {(data.difficulty * 100).toFixed(0)}%
          </Typography>
          <LinearProgress 
            variant="determinate" 
            value={data.difficulty * 100} 
            color={data.difficulty <= 0.30 ? 'success' : 
                   data.difficulty <= 0.70 ? 'warning' : 'error'}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default FileAnalysisResult; 