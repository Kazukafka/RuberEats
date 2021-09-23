import React from 'react';
import { DialogContent, Dialog, DialogTitle } from '@material-ui/core';
import { OrderButton } from './Buttons/OrderButton';

export const NewOrderConfirmDialog = ({
  isOpen,
  onClose,
  existingResutaurautName,
  newResutaurautName,
  onClickSubmit,
}) => (
  <Dialog
    open={isOpen}
    onClose={onClose}
    maxWidth="xs"
  >
    <DialogTitle>
      新しい注文を始めますか？
    </DialogTitle>
    <DialogContent>
      <p>
        {
          `ご注文に ${existingResutaurautName} の商品が含まれています。
          新しい注文を始めて ${newResutaurautName} の商品を追加してください。`
        }
      </p>
      <OrderButton onClick={onClickSubmit}>
        新規注文
      </OrderButton>
    </DialogContent>
  </Dialog>
);
