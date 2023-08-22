import { Box, Container } from '@mui/material';

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
          <h1>Home Page</h1>
        </Container>
      </Box>
    </main>
  )
}
