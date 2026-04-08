import profileLogo from "@/assets/social/profile-logo.png";
import facebookCover from "@/assets/social/facebook-cover.png";
import linkedinCover from "@/assets/social/linkedin-cover.png";

const SocialPreview = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <h1 className="text-3xl font-bold text-foreground mb-8">Social Media Assets Preview</h1>
      
      <div className="space-y-12">
        {/* Profile Logo */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Profile Logo (400x400)</h2>
          <div className="bg-muted p-4 rounded-lg inline-block">
            <img 
              src={profileLogo} 
              alt="Profile Logo" 
              className="max-w-[400px] rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Facebook Cover */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Facebook Cover (1200x630)</h2>
          <div className="bg-muted p-4 rounded-lg">
            <img 
              src={facebookCover} 
              alt="Facebook Cover" 
              className="max-w-full rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* LinkedIn Cover */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">LinkedIn Cover (1584x396)</h2>
          <div className="bg-muted p-4 rounded-lg">
            <img 
              src={linkedinCover} 
              alt="LinkedIn Cover" 
              className="max-w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialPreview;
