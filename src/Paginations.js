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
import Pagination from "@material-ui/lab/Pagination";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Paginations = () => {
  const [pagedata, setdata] = useState([]);
  const [pages, setpages] = useState(10);
  const [open, setopen] = useState(false);
  const [alertdata, setalertdata] = useState(10);
  const [serchdata, setsearchdata] = useState("");
  const handleClose = () => {
    setopen(false);
  };

  const check = (data) => {
    setopen(true);
    setalertdata(data);
  };

  const clickMethod = () => {
    console.log("ssss", serchdata.length);
    if (serchdata.length) {
      var pagessdata = pagedata.filter(
        (datas) => datas.name.first === serchdata
      );
      setdata(pagessdata);
    } else {
      setdata(pagedata);
    }
  };

  useEffect(() => {
    // console.log("pages", pages);
    var configs = {
      method: "get",
      url: `https://randomuser.me/api/?page=${pages}&results=20`,
    };
    axios(configs)
      .then((response) => {
        console.log(response.data.results[0].name.first);
        setdata(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [pages]);

  return (
    <>
      <div style={{ margin: "40px" }}>
        <input onChange={(e) => setsearchdata(e.target.value)} />
        <button onClick={() => clickMethod()}>Search button</button>
        <Table sx={{ minWidth: 500 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Profile Image&nbsp;</TableCell>
              <TableCell align="right">Name&nbsp;</TableCell>
              <TableCell align="right">Email&nbsp;</TableCell>
              <TableCell align="right">City &nbsp;</TableCell>
              <TableCell align="right">State &nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pagedata.map((row) => (
              <TableRow onClick={() => check(row)}>
                <img src={row.picture.thumbnail} />
                <TableCell align="right">{row.name.first}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.location.city}</TableCell>
                <TableCell align="right">{row.location.state}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div style={{ margin: "30px" }}>
          <Pagination
            count={10}
            color="secondary"
            variant="outlined"
            onChange={(event, value) => {
              setpages(value);
            }}
            rowsPerPage={20}
          />
        </div>
      </div>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle></DialogTitle>
        <DialogContent>
          <DialogContentText>
            User country :{alertdata.login?.username}
          </DialogContentText>
          <DialogContentText>Username :{alertdata.phone}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>ok</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Paginations;
