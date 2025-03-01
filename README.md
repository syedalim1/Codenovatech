# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## HTTPS Setup for Local Development

This project supports HTTPS for secure local development. Follow these steps to set up HTTPS:

### Prerequisites

1. Install [mkcert](https://github.com/FiloSottile/mkcert) (if not already installed):

   For Windows:
   ```powershell
   # Using Chocolatey
   choco install mkcert

   # Or download manually
   mkdir -Force $env:USERPROFILE\mkcert
   Invoke-WebRequest -Uri https://github.com/FiloSottile/mkcert/releases/download/v1.4.4/mkcert-v1.4.4-windows-amd64.exe -OutFile $env:USERPROFILE\mkcert\mkcert.exe
   $env:Path += ";$env:USERPROFILE\mkcert"
   [Environment]::SetEnvironmentVariable("Path", $env:Path, "User")
   ```

### Setup SSL Certificates

Run the following command to set up SSL certificates:

```bash
npm run setup:https
```

### Start Development Server with HTTPS

```bash
npm run dev:https
```

Your application will be available at https://localhost:3000/

### Manual Certificate Setup

If you prefer to set up certificates manually:

1. Install the local CA:
   ```bash
   mkcert -install
   ```

2. Create certificates for localhost:
   ```bash
   mkcert -key-file key.pem -cert-file cert.pem localhost 127.0.0.1 ::1
   ```
