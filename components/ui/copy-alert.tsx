import { Copy } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { Button } from '@/components/ui/button';

interface CopyAlertProps {
  cp: string;
  description: string;
  text?: string;
}

export const CopyAlert: React.FC<CopyAlertProps> = ({ description, cp, text }) => {
  const onCopy = (description: string) => {
    navigator.clipboard.writeText(description);
    toast.success(`${cp} disalin ke clipboard.`);
  };

  return (
    <div className="flex items-center">
      <blockquote>{description}</blockquote>
      <Button className="ml-2" variant="outline" size="sm" onClick={() => onCopy(description)}>
        <Copy className="h-4 w-4 text-black" />
        <span className="hidden sm:block ml-2">{text}</span>
      </Button>
    </div>
  );
};
