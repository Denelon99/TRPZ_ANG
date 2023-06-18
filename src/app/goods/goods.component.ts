import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorageServiceService } from '../services/storage-service.service';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class GoodsComponent implements OnInit {
  storageId: number = 0;
  storage: any = {};

  constructor(private route: ActivatedRoute, private storageService: StorageServiceService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.storageId = params['id'];
      this.loadStorage(this.storageId);
    });
  }

  loadStorage(storageId: number) {
    this.storageService.getStorage().subscribe(
      (response) => {
        const storage = response.find((storage: any) => storage.id == storageId);
        if (storage) {
          this.storage = storage;
        }
      },
      (error) => {
        console.log('Error loading storage:', error);
      }
    );
  }
}
