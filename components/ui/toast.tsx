// src/components/ui/toast.tsx
import * as React from 'react';

export type ToastProps = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  title?: React.ReactNode;
  description?: React.ReactNode;
};

export type ToastActionElement = React.ReactElement;

export const Toast: React.FC<ToastProps> = ({ title, description }) => (
  <div>
    <strong>{title}</strong>
    <p>{description}</p>
  </div>
);
