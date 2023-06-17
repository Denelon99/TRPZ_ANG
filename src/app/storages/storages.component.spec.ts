import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoragesComponent } from './storages.component';

describe('StoragesComponent', () => {
  let component: StoragesComponent;
  let fixture: ComponentFixture<StoragesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoragesComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoragesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
  
  it('should initially have a non-empty storage array', () => {
    expect(component.storage.length).toBeGreaterThan(0);
  });
  
  it('should add a new storage item when createStorage() is called', () => {
    component.storage = [];
    component.createStorage();
    expect(component.storage.length).toBe(1);
    expect(component.storage[0]).toBe('Storage 1');
  });
  
  it('should remove the last storage item when deleteStorage() is called', () => {
    component.storage = ['Storage 1', 'Storage 2', 'Storage 3'];
    component.deleteStorage();
    expect(component.storage.length).toBe(2);
    expect(component.storage[component.storage.length - 1]).toBe('Storage 2');
  });
  
  it('should load storage data from localStorage', () => {
    localStorage.setItem('Storage', JSON.stringify(['Storage 1', 'Storage 2']));
    component.loadStorage();
    expect(component.storage.length).toBe(2);
    expect(component.storage).toEqual(['Storage 1', 'Storage 2']);
  });
});