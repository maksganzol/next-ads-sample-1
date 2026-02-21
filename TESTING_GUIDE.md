# NextAds Integration Testing Guide

This guide explains how to test the NextAds ad serving system on the news portal website.

## Preconditions

Before testing, ensure the following are set up in the NextAds admin panel:

1. **Publisher exists** with a registered website
2. **Website domain** matches the website deployed on GitHub Pages
3. You have access to the NextAds admin panel to create zones, campaigns, and creatives

## Testing Instructions

### Step 0: Configure the Ad Script

1. Open the file: [components/NextAdsScript.tsx](components/NextAdsScript.tsx)
2. Update the script URL with your Website ID from the admin panel:
   ```typescript
   <Script src="https://api-dev.next-ads-server-dev.com/script/tag.js?websiteId=6" strategy="afterInteractive" />
   ```
   Replace `YOUR_WEBSITE_ID` with the actual ID from NextAds admin panel.

### Step 1: Create Ad Zones in Admin Panel

For each zone you want to test, create a zone in the NextAds admin panel:

1. Navigate to **Zones** section in admin panel
2. Click **Create New Zone**
3. Fill in zone details:
   - **Name**: Choose descriptive name (e.g., "Hero Zone 1")
   - **CSS Selector**: Use selector from the table above (e.g., `.next-ads-zone-1`)
   - **Width x Height**: Match the size from the table above
   - **Website**: Select your website
4. Save the zone

**Repeat for all 4 zones** you want to test.

### Step 2: Create Campaign and Creative

1. **Create Campaign:**
   - Navigate to **Campaigns** in admin panel
   - Click **Create New Campaign**
   - Set targeting options:
     - **Geography**: Choose appropriate geo (e.g., US, Ukraine)
     - **Vertical/Category**: Select relevant vertical
   - Set budget and schedule
   - Save campaign

2. **Create Creative:**
   - Navigate to **Creatives** in admin panel
   - Click **Create New Creative**
   - Link to the campaign created above
   - **Important**: Set creative size to match zone size:
     - For 300x250 zones: upload 300x250 creative
     - For 728x90 zone: upload 728x90 creative
   - Upload creative asset (image or HTML)
   - Save creative

3. **Link Creative to Zone:**
   - Ensure the creative's targeting (geo, vertical, size) matches the zone configuration
   - The system will automatically serve matching creatives to appropriate zones

### Step 3: Deploy Changes to GitHub Pages

After updating the NextAdsScript with your Website ID, deploy the site:

```bash
# Stage all changes
git add .

# Commit with descriptive message
git commit -m "Update NextAds Website ID for testing"

# Push to remote repository
git push

# Deploy to GitHub Pages
npm run deploy
```

**Note**: Deployment takes 2-5 minutes. Wait for GitHub Pages to update before testing.

### Step 4: Verify Ad Serving

1. **Open the deployed site:**
   - URL: `https://[your-username].github.io/[project-name]/`

2. **Verify ads are loading:**
   - Check if placeholder text "Ad Zone 300x250" or "Ad Zone 728x90" is replaced with actual creatives
   - If you see the ad creative, the integration is working

3. **Verify tracking:**
   - Click on an ad creative
   - In Network tab, check for tracking requests to `/track/event`
   - Verify impression and click events are being sent
