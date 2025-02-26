import { ReactNode } from "react";
export interface OpenPopup {
    customEvent: string; 
    type: string;
}

export interface GridItem {
  id: string;
  type: "headline" | "list" | "image";
  content: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCancel: () => void;
  children: React.ReactNode;
}

export interface RowProps {
  addRow: () => void;
  children: ReactNode;
}