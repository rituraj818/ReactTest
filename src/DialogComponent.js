import {
  Table,
  TablePagination,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Dialog,
  Button,
  DialogActions,
  DialogContentText,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";

const DialogComponent = () => {
  return;
  <>
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle></DialogTitle>
      <DialogContent>
        <DialogContentText>
          User country :{alertdata.login.username}
        </DialogContentText>
        <DialogContentText>Username :{alertdata.phone}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>ok</Button>
      </DialogActions>
    </Dialog>
  </>;
};

export default DialogComponent;
