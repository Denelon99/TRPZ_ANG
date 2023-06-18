import { Component, OnInit } from '@angular/core';
import { StorageServiceService } from '../services/storage-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-storages',
  templateUrl: './storages.component.html',
  styleUrls: ['./storages.component.css']
})
export class StoragesComponent implements OnInit {
  storages: any[] | undefined;

  constructor(private storageService: StorageServiceService, private router: Router) { }

  ngOnInit() {
    this.loadStorage();
  }

  loadStorage() {
    this.storageService.getStorage().subscribe(
      (storage) => {
        console.log('API Response:', storage);
        this.storages = storage;
      },
      (error) => {
        console.log('Error loading storage:', error);
      }
    );
  }

  openStorage(storageId: number) {
    this.router.navigate(['/goods', storageId]);
  }
}
