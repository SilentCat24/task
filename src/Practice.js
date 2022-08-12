import React, { useState, useEffect } from "react";
import { InputLabel } from "@mui/material";
import { MenuItem } from "@mui/material";
import { FormControl } from "@mui/material";
import { Select } from "@mui/material";
import { Grid } from "@mui/material";
import { Paper } from "@mui/material";
import auditData from "./auditData.json";
import docData from "./docData.json";

const App = () => {
  const [option, setOption] = useState(0);
  const [displayData, setDisplayData] = useState({});
  const auditNames = ["Audit1", "Audit2", "Audit3"];
  const documentName = ["Doc1", "Doc2", "Doc3"];
  const [audit, setAudit] = useState();
  const [docs, setDocs] = useState();

  // useEffect(() => {
  //   set
  // }, []);
  useEffect(() => {
    setAudit(auditData.AuditData);
  }, [audit]);

  console.log(audit);

  const handleClick = (name) => {
    if (Object.keys(auditData.AuditData).includes(name))
      setDisplayData(auditData.AuditData[name]);
    else setDisplayData(docData.docData[name]);
  };

  return (
    <Grid container columnSpacing={2}>
      <Grid item xs={12} border={2}>
        <FormControl xs={{ minwidth: 120 }}>
          <InputLabel>Label</InputLabel>
          <Select
            value={option}
            label="label"
            onChange={(e) => setOption(e.target.value)}
          >
            <MenuItem value={0}>All</MenuItem>
            <MenuItem value={1}>Audit</MenuItem>
            <MenuItem value={2}>Document</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      {/* left side */}
      <Grid item xs={6}>
        <div>
          {(option === 0 || option === 1) && (
            <Grid item xs={6}>
              <Paper elevation={4}>
                <h4>Audit</h4>
                {auditNames.map((name) => (
                  <p
                    style={{ cursor: "pointer" }}
                    onClick={(e) => handleClick(name)}
                  >
                    {name}
                  </p>
                ))}
              </Paper>
            </Grid>
          )}
        </div>

        <div>
          {(option === 0 || option === 2) && (
            <Grid item xs={6}>
              <Paper elevation={4}>
                <h4>Document</h4>
                {documentName.map((name) => (
                  <p
                    style={{ cursor: "pointer" }}
                    onClick={(e) => handleClick(name)}
                  >
                    {name}
                  </p>
                ))}
              </Paper>
            </Grid>
          )}
        </div>
      </Grid>

      <div>
        {(option === 0 || option === 2) && (
          <Grid item xs={6}>
            <Paper elevation={4}>
              <h4>Document</h4>
              {Object.values(audit).map((value, index) => {
                return (
                  <div key={index}>
                    <h2>{value}</h2>
                  </div>
                );
              })}
            </Paper>
          </Grid>
        )}
      </div>

      {/*  result part */}

      <Grid item xs={6}>
        <Paper elevation={4}>
          <p>id:{displayData.id}</p>
          <p>name:{displayData.name}</p>
          <p>comments:{displayData.city}</p>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default App;
