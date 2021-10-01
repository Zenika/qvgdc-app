import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Toolbar from '@material-ui/core/Toolbar';
import AdminAddDialog from 'components/Admin/AdminAddDialog/AdminAddDialog';
import React from 'react';

import styles from './CrudList.module.scss';

export default function CrudList(props) {
  return (
    <>
      <AdminAddDialog
        title={props.dialog.title}
        description={props.dialog.description}
        open={props.dialog.open}
        close={props.dialog.closeDialog}
        complete={props.dialog.completeDialog}
        fields={props.dialog.fields}
      />
      <Paper className={styles.paper}>
        <Toolbar>
          <div className={styles.title}>
            <h2 className="h3">{props.table.title}</h2>
            {props.table.actions}
          </div>
        </Toolbar>
        {props.table.data && props.table.data.length ? (
          <Table aria-label="Liste des parties">
            <TableHead>
              <TableRow>
                {props.table.columns.map((col) => (
                  <TableCell key={col.slug}>{col.title}</TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {props.table.data.map((item) => (
                <TableRow key={item.id}>
                  {props.table.columns.map((col) => (
                    <TableCell align={col.align} key={col.slug}>
                      {col.content ? col.content(item) : item[col.slug]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <p>{props.table.empty}</p>
        )}
      </Paper>
    </>
  );
}
