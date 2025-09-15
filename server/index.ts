import { createServer } from 'http';
import { readFile, stat } from 'fs/promises';
import { extname, join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

const PORT = 5000;

// MIME types
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.json': 'application/json',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2'
};

const server = createServer(async (req, res) => {
  try {
    let filePath = req.url === '/' ? '/index.html' : (req.url || '/index.html');
    
    // Remove query parameters
    filePath = filePath.split('?')[0];
    
    const fullPath = join(rootDir, filePath);
    
    // Security check - prevent directory traversal
    if (!fullPath.startsWith(rootDir)) {
      res.writeHead(403, { 'Content-Type': 'text/plain' });
      res.end('Forbidden');
      return;
    }
    
    try {
      await stat(fullPath);
      const data = await readFile(fullPath);
      const ext = extname(filePath);
      const contentType = mimeTypes[ext] || 'application/octet-stream';
      
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    } catch (error) {
      if (error.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('File not found: ' + filePath);
      } else {
        console.error('File read error:', error);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal server error');
      }
    }
  } catch (error) {
    console.error('Server error:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal server error');
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Static server running at http://localhost:${PORT}`);
  console.log('📁 Serving vanilla HTML, CSS, and JavaScript files');
  console.log('🚀 Soyth landing page is ready!');
});