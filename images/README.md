# Images Folder

## Adding Your Profile Photo

1. **Prepare your photo**:
   - Use a professional, high-quality headshot
   - Recommended size: 400x400 pixels (square)
   - Format: JPG or PNG
   - File size: Keep under 200KB for fast loading

2. **Add the photo**:
   - Save your photo in this folder as `profile.jpg` or `profile.png`

3. **Update the HTML**:
   
   In `index.html`, find this section:
   
   ```html
   <div class="profile-image-placeholder">
       <!-- SVG placeholder code -->
   </div>
   ```
   
   Replace the entire `<div class="profile-image-placeholder">...</div>` with:
   
   ```html
   <img src="images/profile.jpg" alt="Christina Andrinopoulou" class="profile-image">
   ```

4. **Add CSS styling**:
   
   Add this to your `styles.css`:
   
   ```css
   .profile-image {
       width: 160px;
       height: 160px;
       border-radius: 50%;
       object-fit: cover;
       border: 3px solid var(--border-color);
       transition: all var(--transition-base);
   }
   
   .profile-image:hover {
       border-color: var(--accent-primary);
       transform: scale(1.05);
   }
   ```

## Tips for a Great Profile Photo

- ✅ Professional attire
- ✅ Good lighting (natural light is best)
- ✅ Neutral or clean background
- ✅ Friendly, approachable expression
- ✅ Face clearly visible
- ❌ Avoid overly casual photos
- ❌ Avoid filters or heavy editing
- ❌ Avoid group photos

## Other Images

You can add other images to this folder as needed (e.g., project screenshots, certificates, etc.).
