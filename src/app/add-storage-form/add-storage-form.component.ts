import { Component } from '@angular/core';
import { StorageServiceService } from '../services/storage-service.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-add-storage-form',
  templateUrl: './add-storage-form.component.html',
  styleUrls: ['./add-storage-form.component.css']
})
export class AddStorageFormComponent {
  storageData = {
    name: '',
    location: ''
  };

  constructor(
    private storageService: StorageServiceService,
    private router: Router,
    private location: Location,
    ) { }

  onSubmit() {
    this.storageService.addStorage(this.storageData).subscribe(
      (response) => {
        console.log('Storage added successfully:', response);
        this.router.navigate(['/']);
      },
      (error) => {
        console.log('Error adding storage:', error);
      }
    );
  }
  goBack() {
    this.location.back();
  }
}
