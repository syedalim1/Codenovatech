import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Check if certificates already exist
const certPath = path.join(__dirname, 'cert.pem');
const keyPath = path.join(__dirname, 'key.pem');

const setupCerts = () => {
  console.log('Setting up SSL certificates for local development...');

  if (fs.existsSync(certPath) && fs.existsSync(keyPath)) {
    console.log('✅ SSL certificates already exist.');
    return;
  }

  // Use installed mkcert from user's path
  const mkcertPath = process.platform === 'win32'
    ? path.join(process.env.USERPROFILE, 'mkcert', 'mkcert.exe')
    : 'mkcert';

  // Create certificates
  const command = `"${mkcertPath}" -key-file key.pem -cert-file cert.pem localhost 127.0.0.1 ::1`;
  
  console.log('Generating SSL certificates...');
  
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`❌ Error: ${error.message}`);
      console.error('Make sure mkcert is installed. See README for instructions.');
      return;
    }
    
    if (stderr) {
      console.warn(`Warning: ${stderr}`);
    }
    
    console.log(stdout);
    console.log('✅ SSL certificates generated successfully!');
    console.log('You can now start your development server with HTTPS enabled.');
  });
};

setupCerts();
