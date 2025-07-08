import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Settings, Save } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface SanityConfig {
  projectId: string;
  dataset: string;
  token?: string;
}

const SanityConfigDialog = () => {
  const [config, setConfig] = useState<SanityConfig>({
    projectId: localStorage.getItem('sanity-project-id') || '',
    dataset: localStorage.getItem('sanity-dataset') || 'production',
    token: localStorage.getItem('sanity-token') || '',
  });
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleSave = () => {
    if (!config.projectId) {
      toast({
        title: "Error",
        description: "Project ID is required",
        variant: "destructive",
      });
      return;
    }

    // Save to localStorage
    localStorage.setItem('sanity-project-id', config.projectId);
    localStorage.setItem('sanity-dataset', config.dataset);
    if (config.token) {
      localStorage.setItem('sanity-token', config.token);
    }

    toast({
      title: "Success",
      description: "Sanity configuration saved successfully",
    });

    setIsOpen(false);
    
    // Reload page to apply new config
    window.location.reload();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Settings className="h-4 w-4" />
          Configure Sanity
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Sanity CMS Configuration</DialogTitle>
          <DialogDescription>
            Enter your Sanity project details to connect your CMS. Your credentials will be stored locally in your browser.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="projectId">Project ID *</Label>
            <Input
              id="projectId"
              value={config.projectId}
              onChange={(e) => setConfig(prev => ({ ...prev, projectId: e.target.value }))}
              placeholder="your-project-id"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="dataset">Dataset</Label>
            <Input
              id="dataset"
              value={config.dataset}
              onChange={(e) => setConfig(prev => ({ ...prev, dataset: e.target.value }))}
              placeholder="production"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="token">API Token (Optional)</Label>
            <Input
              id="token"
              type="password"
              value={config.token}
              onChange={(e) => setConfig(prev => ({ ...prev, token: e.target.value }))}
              placeholder="Optional: For authenticated requests"
            />
          </div>
        </div>
        <div className="flex justify-end gap-3">
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave} className="gap-2">
            <Save className="h-4 w-4" />
            Save Configuration
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SanityConfigDialog;