import { Component, OnInit } from '@angular/core';
// import {MdDialog, MdDialogRef} from '@angular/material';
//
// @Component({
//   selector: 'dialog-result-example',
//   templateUrl: './dialog-result-example.html',
// })
// export class DialogResultExample {
//   selectedOption: string;
//
//   constructor(public dialog: MdDialog) {}
//
//   openDialog() {
//     let dialogRef = this.dialog.open(DialogComponent);
//     dialogRef.afterClosed().subscribe(result => {
//       this.selectedOption = result;
//     });
//   }
// }
//
//
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
//
//   constructor(public dialogRef: MdDialogRef<DialogComponent>) {}
//
  ngOnInit() {
  }
//
}
