# Deployment Guide: Connecting to GoDaddy Domain

## Overview

This guide explains how to deploy your Next.js portfolio to GitHub Pages and connect it to your existing GoDaddy domain `devanshyadav.in`.

## Prerequisites

- GitHub repository with your Next.js project
- GoDaddy domain management access
- GitHub Pages enabled on your repository

## Step 1: Enable GitHub Pages

1. Go to your GitHub repository
2. Click on **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **GitHub Actions**
5. This will use the workflow we created in `.github/workflows/deploy.yml`

## Step 2: Deploy Your Site

1. Push your code to the `main` branch
2. GitHub Actions will automatically:
   - Install dependencies
   - Build your Next.js project
   - Deploy to GitHub Pages
3. Check the **Actions** tab to monitor the deployment

## Step 3: Configure GoDaddy DNS

1. Log into your GoDaddy account
2. Go to **My Products** → **DNS**
3. Find your domain `dev.gxuri.in`
4. Update the DNS records:

### Option A: CNAME Record (Recommended)

- **Type**: CNAME
- **Name**: @ (or leave blank)
- **Value**: `yourusername.github.io`
- **TTL**: 600 (or default)

### Option B: A Records

- **Type**: A
- **Name**: @ (or leave blank)
- **Value**: `185.199.108.153`
- **TTL**: 600
- **Type**: A
- **Name**: @ (or leave blank)
- **Value**: `185.199.109.153`
- **TTL**: 600
- **Type**: A
- **Name**: @ (or leave blank)
- **Value**: `185.199.110.153`
- **TTL**: 600
- **Type**: A
- **Name**: @ (or leave blank)
- **Value**: `185.199.111.153`
- **TTL**: 600

## Step 4: Verify Configuration

1. Wait for DNS propagation (can take up to 48 hours)
2. Visit `dev.gxuri.in` to confirm it loads your portfolio
3. Check that all links and assets load correctly

## Troubleshooting

### DNS Issues

- Use [whatsmydns.net](https://www.whatsmydns.net/) to check DNS propagation
- Ensure TTL values are set correctly
- Wait for full propagation before making changes

### Build Issues

- Check GitHub Actions logs for build errors
- Ensure all dependencies are properly installed
- Verify Next.js configuration is correct

### Domain Not Loading

- Confirm CNAME file is in the `public` folder
- Check that GitHub Pages is enabled and deployed
- Verify DNS records are pointing to GitHub Pages

## Maintenance

- Every push to `main` will automatically redeploy
- Monitor GitHub Actions for any build failures
- Keep dependencies updated for security and performance

## Support

If you encounter issues:

1. Check GitHub Actions logs
2. Verify DNS configuration
3. Test with a simple HTML file first
4. Contact GoDaddy support for DNS issues
