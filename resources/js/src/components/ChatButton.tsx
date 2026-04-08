import { useState, useRef } from 'react';
import { MessageCircle, X, Send, Paperclip } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you can integrate with your preferred chat service or email
    toast({
      title: "Message Sent!",
      description: file ? `We received your message and file: ${file.name}` : "We'll get back to you shortly.",
    });
    
    setFormData({ name: '', email: '', message: '' });
    setFile(null);
    setIsOpen(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      // Limit file size to 10MB
      if (selectedFile.size > 10 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please select a file smaller than 10MB.",
          variant: "destructive",
        });
        return;
      }
      setFile(selectedFile);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <>
      {/* Chat Button with Label */}
      <div className="fixed bottom-20 right-6 lg:bottom-6 z-50 flex items-center gap-2">
        {/* Tooltip - shows on hover like WhatsApp */}
        {showTooltip && !isOpen && (
          <div className="bg-card text-card-foreground px-4 py-2 rounded-lg shadow-lg animate-fade-in flex items-center gap-2">
            <span className="text-sm font-medium whitespace-nowrap">Talk with us</span>
            <button 
              onClick={() => setShowTooltip(false)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={14} />
            </button>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => {}}
          className="w-14 h-14 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110"
          aria-label="Open chat"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <>
              <MessageCircle className="w-6 h-6" />
              {/* Pulse animation */}
              <span className="absolute w-14 h-14 rounded-full bg-accent animate-ping opacity-30" />
            </>
          )}
        </button>
      </div>

      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-card rounded-2xl shadow-2xl border border-border/50 overflow-hidden animate-fade-in">
          {/* Header */}
          <div className="bg-accent p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent-foreground/20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-accent-foreground">Chat with us</h3>
                <p className="text-xs text-accent-foreground/70">We typically reply within minutes</p>
              </div>
            </div>
          </div>

          {/* Chat Form */}
          <form onSubmit={handleSubmit} className="p-4 space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-background"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-background"
              />
            </div>
            <div>
              <Textarea
                placeholder="How can we help you?"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={3}
                className="bg-background resize-none"
              />
            </div>

            {/* File Upload */}
            <div>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg,.gif"
              />
              <button
                type="button"
                onClick={triggerFileInput}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors w-full p-2 border border-dashed border-border rounded-lg hover:border-accent/50"
              >
                <Paperclip className="w-4 h-4" />
                {file ? (
                  <span className="truncate text-foreground">{file.name}</span>
                ) : (
                  <span>Attach a file (optional)</span>
                )}
              </button>
              {file && (
                <button
                  type="button"
                  onClick={() => setFile(null)}
                  className="text-xs text-destructive hover:underline mt-1"
                >
                  Remove file
                </button>
              )}
            </div>

            <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </Button>
          </form>

          {/* Footer */}
          <div className="px-4 pb-4">
            <p className="text-xs text-center text-muted-foreground">
              Or reach us on{' '}
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                WhatsApp
              </a>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatButton;
