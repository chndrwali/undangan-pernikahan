import { Copy } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { Button } from '@/components/ui/button';

interface CopyAlertProps {
  cp: string;
  description: string;
}

export const CopyAlert: React.FC<CopyAlertProps> = ({ description, cp }) => {
  const onCopy = (description: string) => {
    navigator.clipboard.writeText(description);
    toast.success(`${cp} disalin ke clipboard.`);
  };

  return (
    <div className="flex items-center">
      <blockquote>{description}</blockquote>
      <Button variant="outline" size="sm" onClick={() => onCopy(description)}>
        <Copy className="h-4 w-4 text-black" />
      </Button>
    </div>
  );
};
