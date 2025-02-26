import ReactDOM from "react-dom";
import { ModalProps } from "../Interfaces";
import { Button } from "@mui/material";

export const Modal = ({ isOpen, onClose, onCancel, children }: ModalProps) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black/40 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        {children}
        <div className="flex justify-between gap-4 mt-4">
          <Button
            onClick={onCancel}
            className=" px-4 py-2 rounded-lg hover:bg-gray-600 w-full"
            variant="contained"
          >
            Cancel
          </Button>
          <Button
            onClick={onClose}
            className=" px-4 py-2 rounded-lg hover:bg-blue-600 w-full"
            variant="contained"
          >
            Save Changes
          </Button>
        </div>
      </div>
    </div>,
    document.body
  );
};