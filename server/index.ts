import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

// Get port from environment or default to 5000 (required for Replit)
const PORT = Number(process.env.PORT) || 5000;
const HOST = '0.0.0.0'; // Required for Replit to properly expose the app

// Determine static files directory based on environment
const staticPath = process.env.NODE_ENV === 'production' 
  ? path.resolve(__dirname, 'public') // In production, serve from dist/public/ directory
  : path.resolve(__dirname, '..', 'public'); // In development, serve from public/ directory

app.use(express.static(staticPath, {
  dotfiles: 'deny', // Security: don't serve hidden files
  index: ['index.html']
}));

// Catch-all handler: return index.html for all routes (SPA-style routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(staticPath, 'index.html'));
});

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Server error:', err);
  res.status(500).send('Internal Server Error');
});

// Start the server
app.listen(PORT, HOST, () => {
  console.log(`🚀 Server running at http://${HOST}:${PORT}`);
  console.log(`📁 Serving static files from: ${staticPath}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
});

export default app;