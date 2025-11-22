# Quick Start Deployment Guide

Choose your deployment platform and follow the quick steps below. For detailed instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

## ⚡ Option 1: Vercel (Recommended)

**Perfect for**: Fastest deployment, automatic CI/CD, global CDN, free tier

**Steps**:
1. Go to [vercel.com](https://vercel.com) and sign up/login with GitHub
2. Click "Add New..." → "Project"
3. Import `jesscura/SageStone-Company` repository
4. Vercel auto-detects Vite settings:
   - Build Command: `npm run build`
   - Output Directory: `build`
5. Click "Deploy"
6. Done! Your app will be live in 30-60 seconds 🎉

**Cost**: FREE (Hobby tier) | **Time**: 5 minutes | **Difficulty**: ⭐☆☆☆☆

**Benefits**:
- ⚡ Lightning-fast global CDN
- 🔄 Automatic deployments on git push
- 🔍 Preview deployments for every PR
- 🆓 Free custom domain with SSL
- 📊 Built-in analytics

---

## 🚀 Option 2: DigitalOcean App Platform

**Perfect for**: Automatic deployments, no server management

**Steps**:
1. Go to [DigitalOcean App Platform](https://cloud.digitalocean.com/apps)
2. Click "Create App" → Connect GitHub → Select this repository
3. Configure:
   - Build Command: `npm run build`
   - Output Directory: `build`
4. Click "Deploy"
5. Done! Your app will be live in 5-10 minutes

**Cost**: $5/month | **Time**: 10 minutes | **Difficulty**: ⭐☆☆☆☆

---

## 🖥️ Option 3: DigitalOcean Droplet (Full Control)

**Perfect for**: More control, multiple apps, custom configurations

**Steps**:
1. Create Ubuntu 22.04 Droplet on DigitalOcean
2. SSH into your droplet: `ssh root@your_droplet_ip`
3. Run this single command:
   ```bash
   curl -fsSL https://raw.githubusercontent.com/jesscura/SageStone-Company/main/deploy-digitalocean.sh | sudo bash
   ```
4. Follow the prompts (domain name and email)
5. Done! Your app will be live with SSL

**Alternative (Manual)**:
```bash
# Clone and run the deployment script
git clone https://github.com/jesscura/SageStone-Company.git /var/www/sagestone
cd /var/www/sagestone
sudo bash deploy-digitalocean.sh
```

**Cost**: $6/month | **Time**: 15-20 minutes | **Difficulty**: ⭐⭐☆☆☆

---

## 🏠 Option 4: SharedHosting with cPanel (Most Affordable)

**Perfect for**: Budget-conscious, familiar cPanel interface

**Steps**:
1. **On your local machine**:
   ```bash
   npm install
   npm run build
   cd build
   zip -r sagestone.zip *
   ```

2. **In cPanel**:
   - Login to cPanel
   - Open File Manager
   - Navigate to `public_html`
   - Upload `sagestone.zip`
   - Extract the zip file
   - Delete the zip file
   - Done!

**Verify**: The `.htaccess` file should be present (it's automatically included in the build)

**Cost**: $3-10/month | **Time**: 10 minutes | **Difficulty**: ⭐☆☆☆☆

---

## 📋 Quick Checklist

Before deploying, make sure:
- ✅ Build works locally: `npm run build`
- ✅ No errors in the console
- ✅ You have access to your hosting account

After deploying:
- ✅ Test the live URL
- ✅ Check all pages load correctly
- ✅ Refresh pages to test React Router
- ✅ Verify HTTPS is working (green padlock)

---

## 🆘 Quick Troubleshooting

| Problem | Solution |
|---------|----------|
| Blank page | Check browser console (F12) for errors |
| 404 on refresh (SharedHosting) | Ensure `.htaccess` is present |
| 404 on refresh (Vercel) | Check `vercel.json` routing configuration |
| Build fails | Try `rm -rf node_modules && npm install` |
| Images not loading | Verify all files were uploaded |
| Vercel build timeout | Check build logs, may need to optimize build |

---

## 📚 More Resources

- **Complete Guide**: [DEPLOYMENT.md](./DEPLOYMENT.md) - Detailed instructions for all platforms
- **Checklist**: [DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md) - Step-by-step checklist
- **README**: [README.md](./README.md) - Project overview

---

## 💡 Pro Tips

1. **Vercel** is the fastest and easiest option with automatic deployments and free tier
2. **DigitalOcean App Platform** is great for automatic CI/CD with paid hosting
3. **DigitalOcean Droplet** gives you more control and is great for multiple apps
4. **SharedHosting** is the most affordable and works great for small projects
5. Always test in development before deploying to production
6. Keep your dependencies updated with `npm update`
7. Enable automatic backups on your hosting platform

---

## 🎯 Recommended Choice by Use Case

| Use Case | Recommended Platform | Why |
|----------|---------------------|-----|
| Personal project | Vercel | Free, fast, automatic deployments |
| Portfolio site | Vercel | Professional, fast, free custom domain |
| Client project | Vercel or DigitalOcean Droplet | Production-ready, scalable |
| Learning deployment | Vercel | Easiest and fastest to learn |
| Multiple apps | DigitalOcean Droplet | Cost-effective for multiple apps |
| Tight budget | Vercel (free) or SharedHosting | Free or very affordable |
| Enterprise | DigitalOcean Droplet | Full control and customization |

---

**Questions?** Check [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed guides, or open an issue on GitHub.

**Ready to deploy?** Follow the steps for your chosen platform above! 🚀
