# Video and Light Mode Fix Instructions

## Video Setup

The video file needs to be in the **root `public` folder** (not `src/public`).

1. **Create the public folder** at the root level if it doesn't exist:
   ```
   F1inspiredsymposiumwebsiteui-main/
   ├── public/
   │   └── hero-video.mp4  ← Place your video here
   ├── src/
   ├── package.json
   └── ...
   ```

2. **Move your video file**:
   - If your video is in `src/public/hero-video.mp4`, move it to `public/hero-video.mp4` (root level)
   - The path in code is `/hero-video.mp4` which Vite serves from the root `public` folder

3. **Video requirements**:
   - Format: MP4 (H.264 codec)
   - Duration: 15 seconds (will loop)
   - Shot in daylight
   - Recommended: 1920x1080 or higher resolution

## Light Mode Fix

The light mode should now work correctly. If it's still not working:

1. **Clear browser cache and localStorage**:
   - Open browser DevTools (F12)
   - Go to Application tab → Local Storage
   - Clear the "theme" key or clear all
   - Refresh the page

2. **Check the theme toggle button**:
   - It should be in the top-right corner
   - Click it to toggle between light and dark modes
   - The icon changes (Sun = dark mode, Moon = light mode)

3. **Verify the HTML class**:
   - Open DevTools → Elements
   - Check the `<html>` tag
   - When in light mode: should NOT have `class="dark"`
   - When in dark mode: should have `class="dark"`

## Testing

1. **Test video**:
   - Place video in `public/hero-video.mp4`
   - Restart dev server: `npm run dev`
   - Video should autoplay and loop

2. **Test light mode**:
   - Click theme toggle button
   - Backgrounds should change to light colors
   - Text should change to dark colors
   - Video opacity should adjust

## Troubleshooting

If video still doesn't show:
- Check browser console for errors
- Verify file path is exactly `public/hero-video.mp4` (root level)
- Check file size (should be under 10MB for best performance)
- Try a different video format/codec

If light mode still doesn't work:
- Check browser console for errors
- Verify `ThemeProvider` is wrapping the app in `App.tsx`
- Check if `dark` class is being added/removed from `<html>` tag
- Try hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

