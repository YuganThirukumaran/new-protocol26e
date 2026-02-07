# Video Setup Instructions

## Hero Section Video

The hero section now uses a video background instead of a static image. To set up the video:

1. **Video Requirements:**
   - Format: MP4 (H.264 codec recommended for best browser compatibility)
   - Duration: 15 seconds (will loop automatically)
   - Recommended resolution: 1920x1080 or higher
   - File size: Keep under 10MB for optimal loading performance

2. **Placement:**
   - Place your video file in the `public` folder (create it if it doesn't exist)
   - Name it: `hero-video.mp4`
   - The path should be: `public/hero-video.mp4`

3. **Video Content Suggestions:**
   - F1 car footage shot in daylight
   - Racing track scenes
   - Technical symposium venue footage
   - Any dynamic F1-themed content that looks good in daylight

4. **Fallback:**
   - If the video doesn't load, the component will fall back to the original image
   - The video is set to autoplay, loop, and be muted (required for autoplay in most browsers)

## Testing

After placing the video file, test that:
- Video plays automatically on page load
- Video loops seamlessly
- Video looks good in both light and dark modes
- Fallback image appears if video fails to load

