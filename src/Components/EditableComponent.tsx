import { useState } from "react";
// import { Plus, Trash2 } from "lucide-react";
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Button } from "@mui/material";
import { Modal } from "./Modal";
import { ElementTypes } from "../Constants";

type EditableContentProps = {
  type: "headline" | "image" | "list";
};

const EditableContent = ({ type }: EditableContentProps) => {
  const [content, setContent] = useState<string | string[]>(
    type === ElementTypes.headline
      ? "Editable Headline"
      : type === ElementTypes.image
      ? ""
      : ["List 1", "List 2", "List 3"]
  );

  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(content);

  const openModal = () => {
    setModalContent(content);
    setModalOpen(true);
  };

  const handleModalSave = () => {
    setContent(modalContent);
    setModalOpen(false);
  };

  const handleModalCancel = () => {
    setModalOpen(false);
  };

  const handleContentChange = (value: string) => setModalContent(value);

  const handleItemChange = (index: number, value: string) => {
    if (Array.isArray(modalContent)) {
      const updatedItems = [...modalContent];
      updatedItems[index] = value;
      setModalContent(updatedItems);
    }
  };

  const handleAddItem = () => {
    if (Array.isArray(modalContent)) {
      setModalContent([...modalContent, ""]);
    }
  };

  const handleDeleteItem = (index: number) => {
    if (Array.isArray(modalContent)) {
      const updatedItems = modalContent.filter((_, i) => i !== index);
      setModalContent(updatedItems);
    }
  };

  return (
    <div>
      {type === ElementTypes.headline && (
        <div onClick={openModal}>
          <h1 className="text-2xl font-bold">{content}</h1>
        </div>
      )}

      {type === ElementTypes.image && (
        <div
          className="cursor-pointer bg-gray-100 p-4 rounded-xl shadow flex justify-center"
          onClick={openModal}
        >
          <img
            src={content as string}
            alt="Add image"
            className="rounded-lg max-h-60 object-contain"
          />
        </div>
      )}

      {type === ElementTypes.list && (
        <ul>
          {(content as string[]).map((item, index) => (
            <li key={index} onClick={openModal}>
              {item}
            </li>
          ))}
        </ul>
      )}

      <Modal
        isOpen={modalOpen}
        onClose={handleModalSave}
        onCancel={handleModalCancel}
      >
        {type === ElementTypes.headline&& (
          <>
            <h3 className="text-lg font-semibold mb-4">Edit Headline</h3>
            <input
              type="text"
              value={modalContent}
              onChange={(e) => handleContentChange(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </>
        )}

        {type === ElementTypes.image && (
          <>
            <h3 className="text-lg font-semibold mb-4">Edit Image URL</h3>
            <input
              type="text"
              value={modalContent}
              onChange={(e) => handleContentChange(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </>
        )}

        {type === ElementTypes.list && (
          <>
            <h3 className="text-lg font-semibold mb-4">Edit List Items</h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {(modalContent as string[]).map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <input
                    type="text"
                    value={item}
                    onChange={(e) => handleItemChange(index, e.target.value)}
                    className="flex-grow border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-none"
                  />
                  <Button
                    onClick={() => handleDeleteItem(index)}
                    className="rounded-lg "
                             variant="contained"
                  >
                    <DeleteOutlineIcon className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
            <Button
              onClick={handleAddItem}
              className="mt-4  px-4 py-2 rounded-lg w-full flex justify-center items-center gap-2"
              variant="contained"
            >
              <AddIcon className="w-3 h-3" /> Add Item
            </Button>
          </>
        )}
      </Modal>
    </div>
  );
};

export default EditableContent;
