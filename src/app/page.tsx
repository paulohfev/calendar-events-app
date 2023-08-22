import { Box, Container } from '@mui/material';
import CalendarView from '@/components/CalendarView';

export default function Home() {
  return (
    <main>
      <Box
        style={{
          alignItems: 'center',
          backgroundColor: '#EBF3FE',
          display: 'flex',
          justifyContent: 'center',
          minHeight: '100vh'
        }}
      >
        <Container>
          <CalendarView />
        </Container>
      </Box>
    </main>
  )
}
