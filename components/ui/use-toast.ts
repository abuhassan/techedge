import { Toast } from "@/components/ui/toast";

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast> & {
  id?: string;
  title?: string;
  description?: string;
  action?: React.ReactNode;
};

const useToast = () => {
  const toast = (props: ToastProps) => {
    // Implementation details...
  };

  return { toast };
};

export { useToast, type ToastProps };
