import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-storages',
  templateUrl: './storages.component.html',
  styleUrls: ['./storages.component.css']
})
export class StoragesComponent implements OnInit {
  storage: string[] = [];

  ngOnInit() {
    this.loadStorage();
  }

  createStorage() {
    const newStorage = 'Storage ' + (this.storage.length + 1);
    this.storage.push(newStorage);
    this.saveStorage();
  }

  saveStorage() {
    localStorage.setItem('Storage', JSON.stringify(this.storage));
  }

  deleteStorage() {
    this.storage.pop();
    this.saveStorage();
  }

  loadStorage() {
    const savedStorage = localStorage.getItem('Storage');
    if (savedStorage) {
      this.storage = JSON.parse(savedStorage);
    } else {
      this.storage = [];
    }
  }
}