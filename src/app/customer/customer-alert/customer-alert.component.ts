import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'public-customer-alert',
  templateUrl: './customer-alert.component.html',
  styleUrls: ['./customer-alert.component.scss'],
})
export class CustomerAlertComponent implements OnInit {
  confirmDialog = false;
  message = '';
  title = '';
  cancelButton = 'Cancel';
  acceptButton = 'Delete';
  cancelButtonColor = '';
  constructor(
    public dialogRef: MatDialogRef<CustomerAlertComponent>,
    @Inject(MAT_DIALOG_DATA) private dialogData: any,
  ) { }

  ngOnInit(): void {
    if (this.dialogData) {
      this.confirmDialog = this.dialogData.confirmDialog;
      this.message = this.dialogData.message;
      this.title = this.dialogData.title;
      this.cancelButton = this.dialogData.cancelButton;
      if (this.confirmDialog) {
        this.acceptButton = this.dialogData.acceptButton;
        this.cancelButtonColor = '';
      } else {
        this.cancelButtonColor = 'accent';
      }
    }
  }

}
