import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorageServiceService } from '../services/storage-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class GoodsComponent implements OnInit {
  storageId: number = 0;
  isEditing: boolean = false;
  storage: any = {};
  commodityData = {
    name: '',
    price: 0,
    quantity: 0,
    storage_id: this.storageId,
  };
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private storageService: StorageServiceService,
    private location: Location
  ) {}

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
        this.errorMessage = 'Error loading storage. Please try again.';
      }
    );
  }

  goBack() {
    this.location.back();
  }

  addCommodity() {
    this.commodityData.storage_id = this.storageId;
    this.storageService.addCommodity(this.commodityData).subscribe(
      (response) => {
        console.log('Commodity added successfully:', response);
        this.loadStorage(this.storageId);
        this.commodityData = {
          name: '',
          price: 0,
          quantity: 0,
          storage_id: this.storageId
        };
      },
      (error) => {
        this.errorMessage = 'Error adding commodity. Please try again.';
      }
    );
  }

  removeCommodity(commodityId: number) {
    const commodity = this.storage.commodities.find((commodity: any) => commodity.id == commodityId);
    if (commodity) {
      const id = commodity.id;
      this.storageService.removeCommodity(id).subscribe(
        (response) => {
          console.log('Commodity removed successfully:', response);
          const index = this.storage.commodities.findIndex((c: any) => c.id == commodityId);
          if (index !== -1) {
            this.storage.commodities.splice(index, 1);
          }
        },
        (error) => {
          this.errorMessage = 'Error removing commodity. Please try again.';
        }
      );
    }
  }
  editCommodity(commodity: any) {
    commodity.editable = true;
  }
  
  saveCommodity(commodity: any) {
    const updatedData = {
      name: commodity.name,
      price: commodity.price,
      quantity: commodity.quantity
    };
  
    this.storageService.updateCommodity(commodity.id, updatedData).subscribe(
      (response) => {
        console.log('Commodity updated successfully:', response);
        commodity.editable = false; 
      },
      (error) => {
        console.log('Error updating commodity:', error);
      }
    );
  }

  startEditing() {
    this.isEditing = true;
  }

  saveChanges() {
    const updatedData = {
      name: this.storage.name,
      location: this.storage.price,
    };
  
    this.storageService.updateStorage(this.storage.id, updatedData).subscribe(
      (response) => {
        console.log('Commodity updated successfully:', response);
        this.storage.editable = false; 
      },
      (error) => {
        console.log('Error updating commodity:', error);
      }
    );
    this.isEditing = false;
  }
}
