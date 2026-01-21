# Academix - Vercel Deployment Guide

## Prerequisites
1. A GitHub account
2. A Vercel account (sign up at https://vercel.com)
3. Your code pushed to a GitHub repository

## Steps to Deploy on Vercel

### 1. Push Your Code to GitHub
```bash
cd c:\Users\PMLS\Desktop\Academix\academy-frontend
git init
git add .
git commit -m "Initial commit - Ready for Vercel deployment"
git branch -M main
git remote add origin <your-github-repository-url>
git push -u origin main
```

### 2. Deploy on Vercel

#### Option A: Using Vercel Dashboard (Recommended)
1. Go to https://vercel.com
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure your project:
   - **Framework Preset**: Vite
   - **Root Directory**: `academy-frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Add Environment Variables:
   - Click "Environment Variables"
   - Add: `VITE_API_URL` = `https://your-backend-url.com/api`
6. Click "Deploy"

#### Option B: Using Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Navigate to frontend directory
cd c:\Users\PMLS\Desktop\Academix\academy-frontend

# Login to Vercel
vercel login

# Deploy
vercel

# For production deployment
vercel --prod
```

### 3. Configure Environment Variables in Vercel
After deployment, go to your project settings and add:
- `VITE_API_URL`: Your backend API URL (e.g., https://your-backend-api.com/api)

### 4. Deploy Backend (Required)
Your frontend needs a backend API. Deploy your backend to:
- **Vercel** (for Node.js apps)
- **Heroku**
- **Railway**
- **Render**
- Any other Node.js hosting service

Update the `VITE_API_URL` environment variable with your deployed backend URL.

### 5. Redeploy After Backend Setup
Once backend is deployed:
1. Go to Vercel Dashboard
2. Select your project
3. Go to Settings > Environment Variables
4. Update `VITE_API_URL` with your backend URL
5. Go to Deployments tab
6. Click on the latest deployment
7. Click "Redeploy"

## Files Added for Vercel Deployment

### 1. vercel.json
Configures URL rewrites for React Router to work properly.

### 2. .env.example
Example environment variables file. Create a `.env` file locally:
```bash
cp .env.example .env
```
Then update `VITE_API_URL` with your backend URL.

### 3. Updated api.js
Now uses environment variables for API URL, supporting both development and production.

## Important Notes

1. **Environment Variables**: Always set `VITE_API_URL` in Vercel dashboard
2. **Backend Required**: The app needs a running backend API
3. **CORS**: Ensure your backend allows requests from your Vercel domain
4. **Build Success**: The app builds successfully (tested locally)
5. **Contact Details**: Added phone (0342 5957917) and email (Acadmix.education@gmail.com)

## Testing Locally
```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

## Troubleshooting

### Issue: API requests failing
- Verify `VITE_API_URL` is set correctly in Vercel
- Check backend CORS settings
- Ensure backend is deployed and accessible

### Issue: Routes not working (404 errors)
- Verify `vercel.json` is present in the root directory
- Check that rewrites configuration is correct

### Issue: Build fails
- Check all dependencies are in package.json
- Verify Node.js version compatibility
- Review build logs in Vercel dashboard

## Success Checklist
- ✅ Code builds successfully (`npm run build`)
- ✅ vercel.json created
- ✅ API service uses environment variables
- ✅ Contact details added to landing page
- ✅ Social media icons removed from footer
- ✅ .env.example created for reference

## Your Vercel URL
After deployment, your app will be available at:
`https://your-project-name.vercel.app`

You can also add a custom domain in Vercel project settings.
