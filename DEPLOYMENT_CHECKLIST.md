# Deployment Checklist

Use this checklist to ensure a smooth deployment of SageStone Inc to DigitalOcean or SharedHosting.

## Pre-Deployment Checklist

- [ ] **Test locally**: Run `npm run dev` and verify the application works
- [ ] **Build successfully**: Run `npm run build` and ensure no errors
- [ ] **Review environment variables**: Check if any API keys or configuration need to be set
- [ ] **Update dependencies**: Run `npm audit` to check for vulnerabilities
- [ ] **Test build output**: Verify the `build/` directory contains all necessary files
- [ ] **Check .htaccess**: Ensure `.htaccess` file is present in `build/` directory (for SharedHosting)

## DigitalOcean App Platform Deployment

- [ ] Create DigitalOcean account or login
- [ ] Connect GitHub repository
- [ ] Configure build settings (npm run build)
- [ ] Set environment variables (if needed)
- [ ] Deploy application
- [ ] Test live URL
- [ ] Configure custom domain (optional)
- [ ] Enable automatic deployments

**Time estimate**: 10-15 minutes  
**Difficulty**: Easy  
**Cost**: Starting at $5/month

## DigitalOcean Droplet Deployment

- [ ] Create Ubuntu 22.04 Droplet
- [ ] Connect via SSH
- [ ] Run deployment script: `sudo bash deploy-digitalocean.sh`
- [ ] Provide domain name when prompted
- [ ] Provide email for SSL certificate when prompted
- [ ] Wait for script to complete
- [ ] Point domain DNS to Droplet IP
- [ ] Test live URL
- [ ] Verify SSL certificate is active

**Time estimate**: 20-30 minutes  
**Difficulty**: Medium  
**Cost**: Starting at $6/month

### Manual Droplet Deployment (Alternative)

If not using the automated script:

- [ ] Create and access Droplet
- [ ] Install Node.js, Nginx, and Git
- [ ] Clone repository
- [ ] Build application
- [ ] Configure Nginx
- [ ] Setup firewall
- [ ] Install SSL certificate
- [ ] Test deployment

## SharedHosting (cPanel) Deployment

### Method 1: File Manager (Easiest)

- [ ] Build application locally: `npm run build`
- [ ] Compress build folder: `zip -r sagestone-build.zip build/*`
- [ ] Login to cPanel
- [ ] Navigate to File Manager
- [ ] Go to `public_html` directory
- [ ] Upload zip file
- [ ] Extract zip contents
- [ ] Verify .htaccess file is present
- [ ] Test live URL
- [ ] Test React Router navigation

**Time estimate**: 10-15 minutes  
**Difficulty**: Easy  
**Cost**: $3-10/month

### Method 2: FTP Upload

- [ ] Build application locally: `npm run build`
- [ ] Connect to hosting via FTP
- [ ] Navigate to `public_html` or domain root
- [ ] Upload all files from `build/` directory
- [ ] Ensure `.htaccess` is uploaded (enable "show hidden files")
- [ ] Test live URL
- [ ] Test React Router navigation

**Time estimate**: 15-20 minutes  
**Difficulty**: Easy  
**Cost**: $3-10/month

### Method 3: SSH Upload

- [ ] Build application locally: `npm run build`
- [ ] Connect via SSH
- [ ] Upload files using SCP or rsync
- [ ] Verify all files are in place
- [ ] Test live URL
- [ ] Test React Router navigation

**Time estimate**: 15-20 minutes  
**Difficulty**: Medium  
**Cost**: $3-10/month

## Post-Deployment Checklist

- [ ] **Test all pages**: Navigate through the entire application
- [ ] **Test React Router**: Refresh pages to ensure routing works
- [ ] **Check browser console**: Look for any errors or warnings
- [ ] **Test on mobile**: Verify responsive design works
- [ ] **Test different browsers**: Chrome, Firefox, Safari, Edge
- [ ] **Verify HTTPS**: Ensure SSL certificate is working (green padlock)
- [ ] **Check loading speed**: Use tools like PageSpeed Insights
- [ ] **Test assets**: Ensure all images and fonts load correctly
- [ ] **Monitor performance**: Check server logs for errors
- [ ] **Setup analytics**: Install Google Analytics or similar (optional)
- [ ] **Setup monitoring**: Configure uptime monitoring (optional)

## Common Issues and Solutions

### Issue: Blank page after deployment
**Solution**: Check browser console for errors, verify asset paths, check base URL in vite.config.ts

### Issue: 404 error on page refresh (SharedHosting)
**Solution**: Ensure .htaccess file is present and mod_rewrite is enabled

### Issue: Images not loading
**Solution**: Verify all assets were uploaded, check file paths and CORS settings

### Issue: Build fails
**Solution**: Check Node.js version, delete node_modules and package-lock.json, reinstall dependencies

### Issue: Slow loading
**Solution**: Enable compression, optimize images, use CDN, enable caching

## Environment Configuration

If your application uses environment variables:

1. Create `.env.local` for local development
2. Add environment variables to deployment platform:
   - **DigitalOcean App Platform**: Add in dashboard settings
   - **DigitalOcean Droplet**: Create `.env` before building
   - **SharedHosting**: Build locally with `.env` file
3. Remember: Only `VITE_` prefixed variables are exposed to the client

## DNS Configuration

For custom domains:

### DigitalOcean App Platform
- Add domain in App Platform dashboard
- Update DNS records as instructed by DigitalOcean

### DigitalOcean Droplet
- Add A record pointing to Droplet IP address
- Add CNAME record for www subdomain (optional)

### SharedHosting
- Your domain should already be configured by hosting provider
- Update DNS if moving from another host

## Security Recommendations

- [ ] Enable HTTPS/SSL
- [ ] Setup automated backups
- [ ] Keep dependencies updated
- [ ] Use strong passwords
- [ ] Enable two-factor authentication
- [ ] Regular security audits with `npm audit`
- [ ] Monitor server logs
- [ ] Implement rate limiting (if applicable)

## Maintenance Tasks

### Weekly
- [ ] Check application is running smoothly
- [ ] Review error logs

### Monthly
- [ ] Update dependencies: `npm update`
- [ ] Run security audit: `npm audit`
- [ ] Check for outdated packages: `npm outdated`
- [ ] Review and optimize performance

### Quarterly
- [ ] Review and renew SSL certificates (usually auto-renewed)
- [ ] Review hosting costs and optimization opportunities
- [ ] Backup configuration and database (if applicable)

## Getting Help

- **DEPLOYMENT.md**: Complete deployment guide
- **README.md**: Project overview and setup
- **GitHub Issues**: Report bugs or ask questions
- **DigitalOcean Docs**: https://docs.digitalocean.com/
- **Vite Docs**: https://vitejs.dev/
- **React Docs**: https://react.dev/

## Rollback Plan

If deployment fails or issues arise:

### DigitalOcean App Platform
- Use the "Rollback" feature in the dashboard
- Or redeploy a previous commit

### DigitalOcean Droplet
- Keep a backup of the previous build
- Or use git to checkout previous commit and rebuild

### SharedHosting
- Keep a backup of previous build files
- Upload backup files via File Manager or FTP

---

**Pro Tip**: Always test in a staging environment before deploying to production!

**Last Updated**: November 2025
