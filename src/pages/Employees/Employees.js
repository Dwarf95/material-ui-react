import {
  InputAdornment,
  makeStyles,
  Paper,
  TableBody,
  TableCell,
  TableRow,
  Toolbar,
} from "@material-ui/core";
import {
  AddCircleOutlineOutlined,
  PeopleOutlineTwoTone,
  Search,
} from "@material-ui/icons";
import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";
import useTable from "../../components/useTable";
import EmployeeForm from "./EmployeeForm";
import { getAllEmployees } from "./initialFormValues";
import Controls from "../../components/controls";
import Popup from "../../components/Popup";

const useStyle = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(4),
    padding: theme.spacing(3),
  },
  searchInput: {
    width: "75%",
    marginLeft: "0px",
    paddingLeft: "0px",
  },
  muiToolbar: {
    marginLeft: "0px",
    paddingLeft: "0px",
  },
  newButton: {
    position: "absolute",
    right: "10px",
  },
}));

const headCells = [
  { id: "fullName", label: "Employee Name" },
  { id: "email", label: "Email" },
  { id: "phone", label: "Phone" },
  { id: "department", label: "Department" },
];

function Employees() {
  const classes = useStyle();
  const [records, setRecords] = useState(getAllEmployees());
  const [openPopup, setOpenPopup] = useState(false);
  const [filter, setFilter] = useState({
    fn: (items) => {
      return items;
    },
  });
  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    useTable(records, headCells, filter);

  const handleSearch = (e) => {
    let target = e.target;
    setFilter({
      fn: (items) => {
        if (target.value === "") return items;
        else
          return items.filter((x) =>
            x.fullName.toLowerCase().includes(target.value.toLowerCase())
          );
      },
    });
  };
  return (
    <React.Fragment>
      <PageHeader
        title="New Employee"
        subTitle="Form design with validation"
        icon={<PeopleOutlineTwoTone />}
      />
      {/* <Paper className={classes.pageContent}>
      </Paper> */}
      <Paper className={classes.pageContent} elevation="6">
        <Toolbar className={classes.muiToolbar}>
          <Controls.Input
            label="Search employees"
            className={classes.searchInput}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            onChange={handleSearch}
          />
          <Controls.Button
            text="Add New"
            variant="outlined"
            startIcon={<AddCircleOutlineOutlined />}
            className={classes.newButton}
            onClick={() => setOpenPopup(true)}
          />
        </Toolbar>
        <TblContainer>
          <TblHead />
          <TableBody>
            {recordsAfterPagingAndSorting().map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.fullName}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.phone}</TableCell>
                <TableCell>{item.department}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
        <TblPagination />
      </Paper>
      <Popup
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        title="Employee Form"
      >
        <EmployeeForm />
      </Popup>
    </React.Fragment>
  );
}

export default Employees;
